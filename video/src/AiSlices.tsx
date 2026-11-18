// "Why AI?" slide background: a usual project laid out as glass slices (developers, budget,
// two designers, six months of work). An AI slice drops in between the designers and the other
// slices slide into it from both sides, leaving one designer, AI and one month. Plays once and holds on the last frame.
import { ThreeCanvas } from "@remotion/three";
import { loadFont } from "@remotion/google-fonts/PublicSans";
import { useThree } from "@react-three/fiber";
import { useLayoutEffect, useMemo } from "react";
import * as THREE from "three";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const { fontFamily } = loadFont("normal", { weights: ["600"], subsets: ["latin"] });

// ---- look -------------------------------------------------------------------------------
export const BG = "rgb(15,108,157)"; // #why slide background
export const INK = "#F6F4EC"; // slide text colour
// deck colours: PRISM dark-theme fail/pass status, pale ink, form blue, brand yellow
export const COL = { dev: "#F28B82", bud: "#7FD19B", mon: "#EEF1F4", des: "#8DB4EC", ai: "#F5CF4A" } as const;
// whole picture moved into the slide's free lower-right area (text sits top-left)
export const SHIFT = { x: 585, y: 165 };
type Kind = keyof typeof COL;

// ---- layout (world units) ---------------------------------------------------------------
const STEP = 0.46; // gap between slices along the row
export const T = 0.07, H = 1.45, D = 1.05; // slice thickness, height, depth
// 7 slices in front of AI and 7 behind, with AI between the two designers
const KINDS: Kind[] = [
  "dev", "dev", "dev", "bud", "bud", "bud", "des",
  "des", "mon", "mon", "mon", "mon", "mon", "mon",
];
const SPLIT = 7; // AI goes dead centre, between the two designers
const KEEP_FRONT = 6, KEEP_BACK = 8; // the front designer and the first month stay; the back designer goes into AI
const N = KINDS.length + 1; // with the AI slot
const X0 = -((N - 1) * STEP) / 2;
const xAt = (slot: number) => X0 + slot * STEP;
export const AI_X = xAt(SPLIT);
export const FINAL_GAP = 2.1; // wide enough that the three faces don't overlap, so both gaps read the same

// ---- camera: orthographic, row rises to the right like the reference ---------------------
const CAM_DIR = new THREE.Vector3(-9, 7, 6.2).normalize();
export const ZOOM = 132; // px per world unit
const TARGET = new THREE.Vector3(-0.15, 0.15, 0); // shifts the row into the slide's free right column

export const makeCam = (w: number, h: number) => {
  const c = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, 0.1, 100);
  c.zoom = ZOOM;
  c.position.copy(TARGET).addScaledVector(CAM_DIR, 30);
  c.lookAt(TARGET);
  c.updateProjectionMatrix();
  c.updateMatrixWorld();
  return c;
};

export const CameraRig: React.FC<{ cam: THREE.OrthographicCamera }> = ({ cam }) => {
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
export const ease = Easing.bezier(0.22, 1, 0.36, 1);
export const inOut = Easing.bezier(0.65, 0, 0.35, 1);
export const r = (f: number, a: number, b: number, from = 0, to = 1, e = ease) =>
  interpolate(f, [a, b], [from, to], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: e });

const EXPAND = [6, 66]; // the stack fans out into the full project
const LABELS_IN = [50, 80];
const GAP_OPEN = [110, 136];
const AI_DROP = [122, 158];
const ABSORB = 176; // first slice starts sliding into AI
const ABSORB_LEN = 34;
const SETTLE = [214, 246];
const FINAL_LABELS = [232, 260];

// ---- per-slice state -----------------------------------------------------------------------
type S = { x: number; y: number; op: number; sx: number; sy: number; kind: Kind; i: number };

const sliceState = (f: number, i: number): S => {
  const kind = KINDS[i];
  const restSlot = i < SPLIT ? i : i + 1; // slot once the gap is open
  // expand: everything starts squeezed together at the centre
  const ex = r(f, EXPAND[0] + i * 1.5, EXPAND[1] + i * 1.5, 0, 1);
  const closed = xAt(i + (i >= SPLIT ? 0.5 : 0)) * 0.12;
  let x = interpolate(ex, [0, 1], [closed, xAt(i)]);
  x += r(f, GAP_OPEN[0], GAP_OPEN[1], 0, 1, inOut) * (xAt(restSlot) - xAt(i));
  let op = r(f, EXPAND[0] + i * 1.5, EXPAND[0] + 18 + i * 1.5, 0, 1);
  let sx = 1, sy = 1;
  const kept = i === KEEP_FRONT || i === KEEP_BACK;
  if (!kept) {
    // slide into AI, nearest first
    const dist = Math.abs(restSlot - SPLIT);
    const a = ABSORB + (dist - 1) * 2.2;
    const t = r(f, a, a + ABSORB_LEN, 0, 1, inOut);
    x = interpolate(t, [0, 1], [x, AI_X]);
    op *= interpolate(t, [0, 0.7, 1], [1, 0.8, 0]);
    sy = interpolate(t, [0, 1], [1, 0.82]);
    sx = interpolate(t, [0, 1], [1, 0.3]);
  } else {
    const side = i === KEEP_FRONT ? -1 : 1;
    const t = r(f, SETTLE[0], SETTLE[1], 0, 1, inOut);
    x = interpolate(t, [0, 1], [x, AI_X + side * FINAL_GAP]);
  }
  return { x, y: 0, op, sx, sy, kind, i };
};

const aiState = (f: number) => {
  const t = r(f, AI_DROP[0], AI_DROP[1], 0, 1, Easing.bezier(0.3, 1.25, 0.5, 1)); // small settle bounce
  const y = interpolate(t, [0, 1], [2.6, 0]);
  const op = r(f, AI_DROP[0], AI_DROP[0] + 12, 0, 1);
  // it thickens as the work slides into it
  const grow = r(f, ABSORB + 6, ABSORB + ABSORB_LEN + 22, 0, 1, inOut);
  return { y, op, sx: 1 + grow * 1.6 };
};

// ---- meshes --------------------------------------------------------------------------------
export const Slice: React.FC<{ x: number; y: number; op: number; sx: number; sy: number; color: string; order: number; glow?: number }> = ({ x, y, op, sx, sy, color, order, glow = 0 }) => {
  const geo = useMemo(() => new THREE.BoxGeometry(T, H, D), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);
  if (op <= 0.001) return null;
  return (
    <group position={[x, y, 0]} scale={[sx, sy, sy]}>
      <mesh geometry={geo} renderOrder={order}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.35 + glow} transparent opacity={Math.min(0.95, (0.6 + glow) * op)} depthWrite={false} roughness={0.35} metalness={0} />
      </mesh>
      <lineSegments geometry={edges} renderOrder={order + 0.5}>
        <lineBasicMaterial color={"#ffffff"} transparent opacity={0.55 * op} depthWrite={false} />
      </lineSegments>
    </group>
  );
};

// ---- labels (HTML on top, placed by projecting 3D anchors) -------------------------------
export const Label: React.FC<{ cam: THREE.Camera; w: number; h: number; at: [number, number, number]; dx?: number; dy?: number; op: number; text: string; color?: string; align?: "left" | "right" }> = ({ cam, w, h, at, dx = 0, dy = 0, op, text, color = INK, align = "left" }) => {
  if (op <= 0.001) return null;
  const p = new THREE.Vector3(...at).project(cam);
  const px = (p.x * 0.5 + 0.5) * w + dx;
  const py = (-p.y * 0.5 + 0.5) * h + dy;
  return (
    <div style={{ position: "absolute", left: px, top: py, transform: `translate(${align === "right" ? "-100%" : "0"}, -50%)`, opacity: op, color, fontFamily, fontWeight: 600, fontSize: 34, lineHeight: 1.1, whiteSpace: "nowrap", letterSpacing: "0.005em" }}>
      {text}
    </div>
  );
};

export const AiSlices: React.FC = () => {
  const f = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const cam = useMemo(() => makeCam(width, height), [width, height]);

  const slices = KINDS.map((_, i) => sliceState(f, i));
  const ai = aiState(f);

  // group labels sit under the front-bottom corner of each group's middle slice
  const groupLabelOp = r(f, LABELS_IN[0], LABELS_IN[1]) * (1 - r(f, ABSORB - 4, ABSORB + 14));
  const under = (slot: number): [number, number, number] => [xAt(slot), -H / 2, D / 2];
  const finalOp = r(f, FINAL_LABELS[0], FINAL_LABELS[1]);
  const aiLabelOp = r(f, AI_DROP[1] - 10, AI_DROP[1] + 12);

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      <AbsoluteFill style={{ transform: `translate(${SHIFT.x}px, ${SHIFT.y}px)` }}>
      <ThreeCanvas width={width} height={height} orthographic camera={{ zoom: ZOOM, position: cam.position.toArray() as [number, number, number] }} gl={{ antialias: true }}>
        <CameraRig cam={cam} />
        <ambientLight intensity={1.1} />
        <directionalLight position={[-4, 6, 5]} intensity={1.2} />
        {/* farther slices (larger x) draw first */}
        {slices.map((s) => (
          <Slice key={s.i} x={s.x} y={s.y} op={s.op} sx={s.sx} sy={s.sy} color={COL[s.kind]} order={100 - s.x * 10} />
        ))}
        <Slice x={AI_X} y={ai.y} op={ai.op} sx={ai.sx} sy={1} color={COL.ai} order={100 - AI_X * 10 + 0.2} glow={0.35} />
      </ThreeCanvas>
      <AbsoluteFill>
        <Label cam={cam} w={width} h={height} at={under(1)} dx={14} dy={30} op={groupLabelOp} text="Developers" />
        <Label cam={cam} w={width} h={height} at={under(4)} dx={14} dy={30} op={groupLabelOp} text="Budget" />
        <Label cam={cam} w={width} h={height} at={under(7)} dx={14} dy={30} op={groupLabelOp} text="Designers" />
        <Label cam={cam} w={width} h={height} at={[xAt(14), H / 2, D / 2]} dx={0} dy={-64} op={groupLabelOp} text="6 months" align="right" />
        <Label cam={cam} w={width} h={height} at={[AI_X, H / 2 + ai.y, -D / 2]} dx={-16} dy={14} op={aiLabelOp} text="AI" color={COL.ai} align="right" />
        <Label cam={cam} w={width} h={height} at={[AI_X - FINAL_GAP, -H / 2, D / 2]} dx={14} dy={30} op={finalOp} text="1 designer" />
        <Label cam={cam} w={width} h={height} at={[AI_X + FINAL_GAP, H / 2, D / 2]} dx={0} dy={-64} op={finalOp} text="1 month" align="right" />
      </AbsoluteFill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
