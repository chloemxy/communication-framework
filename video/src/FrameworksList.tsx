// "14 frameworks, one list" slide (after Meet PRISM): PRISM's 14 frameworks fan out as glass slices,
// coloured by zone, in the same look as the "Why AI?" clip. A yellow dropdown drops into the middle of
// the row, opens, and the slices slide into it from both sides; each one lands as a row of the list.
// It ends on one open list of all 14 and holds on the last frame.
import { ThreeCanvas } from "@remotion/three";
import { loadFont } from "@remotion/google-fonts/PublicSans";
import { useThree } from "@react-three/fiber";
import { useLayoutEffect, useMemo } from "react";
import * as THREE from "three";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const { fontFamily } = loadFont("normal", { weights: ["400", "600", "700"], subsets: ["latin"] });

// ---- look -------------------------------------------------------------------------------
const BG = "#121417"; // the deck's dark desk, so the clip has no visible edge on the slide
const INK = "#E9EBEE";
const PAPER = "#F6F4EC";
const DARK = "#16181D";
const YELLOW = "#F5CF4A";
// zones, in the Why AI? clip's colours: form blue, PRISM's pass green, PRISM's fail coral
const ZONE = {
  c: { col: "#8DB4EC", name: "Clarity & content" },
  d: { col: "#7FD19B", name: "Decisions & conversations" },
  b: { col: "#F28B82", name: "Behaviour change" },
} as const;
type Z = keyof typeof ZONE;

// the deck's 14 frameworks (presentation/fw-rows.js), in list order
const FW: { name: string; z: Z }[] = [
  { name: "CCI", z: "c" }, { name: "PEMAT-P", z: "c" }, { name: "PEMAT-A/V", z: "c" },
  { name: "CDC IDD/ELL", z: "c" }, { name: "SAM", z: "c" }, { name: "DISCERN", z: "c" },
  { name: "Readability", z: "c" }, { name: "CDC Inclusive", z: "c" }, { name: "UPL", z: "c" },
  { name: "IPDAS", z: "d" },
  { name: "HBM", z: "b" }, { name: "TTM", z: "b" }, { name: "EPPM", z: "b" }, { name: "WHO ERC", z: "b" },
];

// ---- layout (world units) ---------------------------------------------------------------
const STEP = 0.46;
const T = 0.07, H = 1.45, D = 1.05;
const SPLIT = 7; // the dropdown drops in dead centre: 7 slices in front, 7 behind
const N = FW.length + 1;
const X0 = -((N - 1) * STEP) / 2;
const xAt = (slot: number) => X0 + slot * STEP;
const DD_X = xAt(SPLIT);

// ---- camera: the Why AI? clip's orthographic view, centred on the dropdown -----------------
const CAM_DIR = new THREE.Vector3(-9, 7, 6.2).normalize();
const ZOOM = 132;
const TARGET = new THREE.Vector3(DD_X, 0, 0);
// where the dropdown sits on screen (the slide's title runs across the top left)
const ANCHOR = { x: 1240, y: 360 };

const makeCam = (w: number, h: number) => {
  const c = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, 0.1, 100);
  c.zoom = ZOOM;
  c.position.copy(TARGET).addScaledVector(CAM_DIR, 30);
  c.lookAt(TARGET);
  c.updateProjectionMatrix();
  c.updateMatrixWorld();
  return c;
};

const CameraRig: React.FC<{ cam: THREE.OrthographicCamera }> = ({ cam }) => {
  const { camera, size } = useThree();
  useLayoutEffect(() => {
    const o = camera as THREE.OrthographicCamera;
    o.left = -size.width / 2; o.right = size.width / 2; o.top = size.height / 2; o.bottom = -size.height / 2;
    o.near = cam.near; o.far = cam.far; o.zoom = cam.zoom;
    o.position.copy(cam.position); o.quaternion.copy(cam.quaternion);
    o.updateProjectionMatrix(); o.updateMatrixWorld();
  }, [camera, size, cam]);
  return null;
};

// ---- timing (frames @30fps) --------------------------------------------------------------
const ease = Easing.bezier(0.22, 1, 0.36, 1);
const inOut = Easing.bezier(0.65, 0, 0.35, 1);
const r = (f: number, a: number, b: number, from = 0, to = 1, e = ease) =>
  interpolate(f, [a, b], [from, to], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: e });

const EXPAND = [6, 66];
const LABELS_IN = [50, 80];
const GAP_OPEN = [104, 130];
const DROP = [116, 152];
const OPEN = [160, 178]; // the dropdown opens: chevron turns, the list panel unfolds
const ABSORB = 176; // the nearest slices start sliding in
const ABSORB_GAP = 5; // frames between one slice and the next
const ABSORB_LEN = 24;

// slices go in nearest first, alternating sides; the list fills in its own order as they land
const ORDER = (() => {
  const o: number[] = [];
  for (let d = 0; d < SPLIT; d++) { o.push(SPLIT - 1 - d); o.push(SPLIT + d); }
  return o;
})();
const startOf = (i: number) => ABSORB + ORDER.indexOf(i) * ABSORB_GAP;
const LAST_LAND = ABSORB + (FW.length - 1) * ABSORB_GAP + ABSORB_LEN;

// ---- per-slice state -----------------------------------------------------------------------
const sliceState = (f: number, i: number) => {
  const restSlot = i < SPLIT ? i : i + 1;
  const ex = r(f, EXPAND[0] + i * 1.5, EXPAND[1] + i * 1.5, 0, 1);
  const closed = xAt(i + (i >= SPLIT ? 0.5 : 0)) * 0.12 + DD_X * 0.88;
  let x = interpolate(ex, [0, 1], [closed, xAt(i)]);
  x += r(f, GAP_OPEN[0], GAP_OPEN[1], 0, 1, inOut) * (xAt(restSlot) - xAt(i));
  let op = r(f, EXPAND[0] + i * 1.5, EXPAND[0] + 18 + i * 1.5, 0, 1);
  const a = startOf(i);
  const t = r(f, a, a + ABSORB_LEN, 0, 1, inOut);
  x = interpolate(t, [0, 1], [x, DD_X]);
  op *= interpolate(t, [0, 0.7, 1], [1, 0.8, 0]);
  return { x, op, sx: interpolate(t, [0, 1], [1, 0.3]), sy: interpolate(t, [0, 1], [1, 0.82]) };
};

// ---- meshes --------------------------------------------------------------------------------
const Slice: React.FC<{ x: number; op: number; sx: number; sy: number; color: string; order: number }> = ({ x, op, sx, sy, color, order }) => {
  const geo = useMemo(() => new THREE.BoxGeometry(T, H, D), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);
  if (op <= 0.001) return null;
  return (
    <group position={[x, 0, 0]} scale={[sx, sy, sy]}>
      <mesh geometry={geo} renderOrder={order}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35} transparent opacity={Math.min(0.95, 0.6 * op)} depthWrite={false} roughness={0.35} metalness={0} />
      </mesh>
      <lineSegments geometry={edges} renderOrder={order + 0.5}>
        <lineBasicMaterial color={"#ffffff"} transparent opacity={0.55 * op} depthWrite={false} />
      </lineSegments>
    </group>
  );
};

// ---- labels (HTML on top, placed by projecting 3D anchors) -------------------------------
const toScreen = (cam: THREE.Camera, w: number, h: number, at: [number, number, number]) => {
  const p = new THREE.Vector3(...at).project(cam);
  return { x: (p.x * 0.5 + 0.5) * w - w / 2 + ANCHOR.x, y: (-p.y * 0.5 + 0.5) * h - h / 2 + ANCHOR.y };
};
const Label: React.FC<{ x: number; y: number; op: number; text: string; color?: string; align?: "left" | "right" }> = ({ x, y, op, text, color = INK, align = "left" }) =>
  op <= 0.001 ? null : (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(${align === "right" ? "-100%" : "0"}, -50%)`, opacity: op, color, fontFamily, fontWeight: 600, fontSize: 34, lineHeight: 1.1, whiteSpace: "nowrap" }}>
      {text}
    </div>
  );

// ---- the dropdown ---------------------------------------------------------------------------
const DD_W = 470, HEAD_H = 64, ROW_H = 41;
const Dropdown: React.FC<{ f: number }> = ({ f }) => {
  const drop = r(f, DROP[0], DROP[1], 0, 1, Easing.bezier(0.3, 1.25, 0.5, 1)); // small settle bounce
  const op = r(f, DROP[0], DROP[0] + 10);
  if (op <= 0.001) return null;
  const y = interpolate(drop, [0, 1], [-340, 0]);
  const open = r(f, OPEN[0], OPEN[1], 0, 1, inOut);
  // how many rows have landed: a row appears as its slice reaches the dropdown
  const landed = FW.map((_, k) => r(f, ABSORB + k * ABSORB_GAP + ABSORB_LEN * 0.6, ABSORB + k * ABSORB_GAP + ABSORB_LEN + 4));
  const filled = landed.reduce((s, v) => s + v, 0);
  const count = Math.round(filled);
  const listH = 14 + filled * ROW_H;
  return (
    <div style={{ position: "absolute", left: ANCHOR.x - DD_W / 2, top: ANCHOR.y - HEAD_H / 2 + y, width: DD_W, opacity: op, fontFamily }}>
      <div style={{ height: HEAD_H, borderRadius: 12, background: YELLOW, color: DARK, display: "flex", alignItems: "center", padding: "0 26px", boxSizing: "border-box", fontWeight: 700, fontSize: 34, boxShadow: "0 10px 40px rgba(0,0,0,.45)" }}>
        <span style={{ flex: 1 }}>Frameworks</span>
        <span style={{ fontWeight: 600, fontSize: 30, marginRight: 22, opacity: count ? 1 : 0 }}>{count}</span>
        <svg width="26" height="26" viewBox="0 0 24 24" style={{ transform: `rotate(${open * 180}deg)` }}>
          <path d="M5 9l7 7 7-7" fill="none" stroke={DARK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div style={{ marginTop: 8, height: open * listH, overflow: "hidden", borderRadius: 12, background: PAPER, boxShadow: "0 10px 40px rgba(0,0,0,.45)", opacity: open }}>
        <div style={{ padding: "7px 0" }}>
          {FW.map((fw, k) => (
            <div key={fw.name} style={{ height: ROW_H, display: "flex", alignItems: "center", padding: "0 26px", opacity: landed[k], transform: `translateY(${(1 - landed[k]) * -14}px)`, color: DARK, fontSize: 28, fontWeight: 600 }}>
              <span style={{ flex: 1 }}>{fw.name}</span>
              <span style={{ width: 14, height: 14, borderRadius: 7, background: ZONE[fw.z].col, boxShadow: "inset 0 0 0 1.5px rgba(22,24,29,.35)" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FrameworksList: React.FC = () => {
  const f = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const cam = useMemo(() => makeCam(width, height), [width, height]);
  const slices = FW.map((_, i) => sliceState(f, i));

  // zone labels under each group's middle slice, then "14 tools" above the far end; they leave as the absorb starts
  const labelOp = r(f, LABELS_IN[0], LABELS_IN[1]) * (1 - r(f, DROP[0], DROP[0] + 20)); // they make way for the dropdown
  const under = (slot: number) => toScreen(cam, width, height, [xAt(slot), -H / 2, D / 2]);
  const top = toScreen(cam, width, height, [xAt(N - 1), H / 2, D / 2]);
  // legend for the zone dots, once the list is full
  const legendOp = r(f, LAST_LAND - 6, LAST_LAND + 20);
  // to the left of the list, ending level with its last row
  const legend = { x: ANCHOR.x - DD_W / 2 - 44, y: ANCHOR.y + HEAD_H / 2 + 8 + 14 + 14 * ROW_H - 3 * 50 };

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      <AbsoluteFill style={{ transform: `translate(${ANCHOR.x - width / 2}px, ${ANCHOR.y - height / 2}px)` }}>
        <ThreeCanvas width={width} height={height} orthographic camera={{ zoom: ZOOM, position: cam.position.toArray() as [number, number, number] }} gl={{ antialias: true }}>
          <CameraRig cam={cam} />
          <ambientLight intensity={1.1} />
          <directionalLight position={[-4, 6, 5]} intensity={1.2} />
          {slices.map((s, i) => (
            <Slice key={i} x={s.x} op={s.op} sx={s.sx} sy={s.sy} color={ZONE[FW[i].z].col} order={100 - s.x * 10} />
          ))}
        </ThreeCanvas>
      </AbsoluteFill>
      <AbsoluteFill>
        <Label {...(() => { const p = under(4); return { x: p.x + 14, y: p.y + 30 }; })()} op={labelOp} text="Clarity & content" />
        <Label {...(() => { const p = under(9); return { x: p.x + 14, y: p.y + 30 }; })()} op={labelOp} text="Decisions" />
        <Label {...(() => { const p = under(12); return { x: p.x + 14, y: p.y + 30 }; })()} op={labelOp} text="Behaviour" />
        <Label x={top.x} y={top.y - 64} op={labelOp} text="14 tools" align="right" />
        <Dropdown f={f} />
        {(["c", "d", "b"] as Z[]).map((z, k) => (
          <div key={z} style={{ position: "absolute", left: legend.x, top: legend.y + k * 50, transform: "translateX(-100%)", opacity: legendOp, display: "flex", alignItems: "center", gap: 14, fontFamily, fontWeight: 600, fontSize: 28, color: INK, whiteSpace: "nowrap" }}>
            {ZONE[z].name}
            <span style={{ width: 16, height: 16, borderRadius: 8, background: ZONE[z].col }} />
          </div>
        ))}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
