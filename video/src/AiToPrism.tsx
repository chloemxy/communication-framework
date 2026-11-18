// "Why AI?" -> "Meet PRISM": picks up on AiSlices' last frame (one designer, AI, one month), merges the
// three slices into one yellow slab, turns it to face us, and grows it into the Meet PRISM slide. Its
// last frame is the Meet PRISM slide as it first appears (public/meet-prism-face.png, captured from the
// deck at 1920x1080 in dark mode), so the deck can cut to the live slide with no visible jump.
import { ThreeCanvas } from "@remotion/three";
import { useMemo } from "react";
import * as THREE from "three";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { AI_X, BG, COL, CameraRig, D, FINAL_GAP, H, INK, Label, SHIFT, Slice, T, ZOOM, inOut, makeCam, r } from "./AiSlices";

const AI_SX = 2.6; // AI's thickness at the end of AiSlices
const YELLOW = "rgb(221,211,127)"; // the lit slab's face as it renders in AiSlices
const W = 1920, HH = 1080;

// ---- timing (frames @30fps, 3 s) -------------------------------------------------------------
const LABELS_OUT = [0, 10];
const MERGE = [2, 24]; // designer and month slide into AI
const SWAP = [20, 28]; // the 3D slab hands over to the flat card on its front face
const TURN = [24, 52]; // the card unskews to face us, centred
const SHOW = [40, 56]; // the yellow becomes the Meet PRISM slide
const GROW = [52, 80]; // it grows to fill the screen
const RIM_OUT = [60, 78];
export const AI_TO_PRISM_FRAMES = 90;

type P = [number, number];
const mix = (a: P, b: P, t: number): P => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

// CSS matrix3d that maps a w x h box onto the quad tl, tr, br, bl (a projective map, Heckbert)
const quadMatrix = (w: number, h: number, [x0, y0]: P, [x1, y1]: P, [x2, y2]: P, [x3, y3]: P) => {
  const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3;
  const dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
  let g = 0, hh = 0;
  if (Math.abs(dx3) > 1e-9 || Math.abs(dy3) > 1e-9) {
    const den = dx1 * dy2 - dx2 * dy1;
    g = (dx3 * dy2 - dx2 * dy3) / den;
    hh = (dx1 * dy3 - dx3 * dy1) / den;
  }
  const a = x1 - x0 + g * x1, b = x3 - x0 + hh * x3, c = x0;
  const d = y1 - y0 + g * y1, e = y3 - y0 + hh * y3, f = y0;
  // unit square -> quad, after scaling the box down to the unit square
  return `matrix3d(${a},${d},0,${g},${b},${e},0,${hh},0,0,1,0,${c},${f},0,1) scale(${1 / w},${1 / h})`;
};

// face: the picture the slab becomes (default the Meet PRISM slide; AiToReveal uses the Studio reveal).
// contained: the slab stops square to the room at 80% of the screen, keeps its yellow rim with the picture
// inside it, on the same blue stage (AiToReveal); otherwise it grows to fill the screen.
const BOX: { tl: P; tr: P; br: P; bl: P } = { tl: [192, 108], tr: [1728, 108], br: [1728, 972], bl: [192, 972] };
export const AiToPrism: React.FC<{ face?: string; contained?: boolean }> = ({ face: picture = "meet-prism-face.png", contained = false }) => {
  const f = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const cam = useMemo(() => makeCam(width, height), [width, height]);

  const m = r(f, MERGE[0], MERGE[1], 0, 1, inOut);
  const aiSx = AI_SX + m * 0.5;
  const side = (s: number) => ({
    x: interpolate(m, [0, 1], [AI_X + s * FINAL_GAP, AI_X]),
    op: interpolate(m, [0, 0.7, 1], [1, 0.8, 0]),
    sx: interpolate(m, [0, 1], [1, 0.3]),
    sy: interpolate(m, [0, 1], [1, 0.82]),
  });
  const des = side(-1), mon = side(1);
  const slabOp = 1 - r(f, SWAP[0], SWAP[1]);
  const labelsOp = 1 - r(f, LABELS_OUT[0], LABELS_OUT[1]);

  // the slab's face toward the camera (its -x side), projected to screen pixels (plus the picture's shift)
  const face = useMemo(() => {
    const xf = AI_X - (T * (AI_SX + 0.5)) / 2;
    const pt = (y: number, z: number): P => {
      const p = new THREE.Vector3(xf, y, z).project(cam);
      return [(p.x * 0.5 + 0.5) * width + SHIFT.x, (-p.y * 0.5 + 0.5) * height + SHIFT.y];
    };
    const top = [pt(H / 2, D / 2), pt(H / 2, -D / 2)].sort((p, q) => p[0] - q[0]);
    const bot = [pt(-H / 2, D / 2), pt(-H / 2, -D / 2)].sort((p, q) => p[0] - q[0]);
    return { tl: top[0], tr: top[1], br: bot[1], bl: bot[0] };
  }, [cam, width, height]);

  // the card: from the slab's face, to a centred half-size frame, to the full screen
  const tTurn = r(f, TURN[0], TURN[1], 0, 1, inOut);
  const tGrow = r(f, GROW[0], GROW[1], 0, 1, inOut);
  const mid = { tl: [480, 270] as P, tr: [1440, 270] as P, br: [1440, 810] as P, bl: [480, 810] as P };
  const full = contained ? BOX : { tl: [0, 0] as P, tr: [W, 0] as P, br: [W, HH] as P, bl: [0, HH] as P };
  const k = (key: "tl" | "tr" | "br" | "bl") => mix(mix(face[key], mid[key], tTurn), full[key], tGrow);
  const cardOp = r(f, SWAP[0], SWAP[0] + 4);
  const shotOp = r(f, SHOW[0], SHOW[1]);
  const rim = contained ? 1 : 1 - r(f, RIM_OUT[0], RIM_OUT[1]);
  const stage = BG;   // the stage stays the Why AI? blue; the slab is the only thing that changes

  return (
    <AbsoluteFill style={{ backgroundColor: stage }}>
      <AbsoluteFill style={{ transform: `translate(${SHIFT.x}px, ${SHIFT.y}px)` }}>
        <ThreeCanvas width={width} height={height} orthographic camera={{ zoom: ZOOM, position: cam.position.toArray() as [number, number, number] }} gl={{ antialias: true }}>
          <CameraRig cam={cam} />
          <ambientLight intensity={1.1} />
          <directionalLight position={[-4, 6, 5]} intensity={1.2} />
          <Slice x={mon.x} y={0} op={mon.op} sx={mon.sx} sy={mon.sy} color={COL.mon} order={100 - mon.x * 10} />
          <Slice x={AI_X} y={0} op={slabOp} sx={aiSx} sy={1} color={COL.ai} order={100 - AI_X * 10 + 0.2} glow={0.35} />
          <Slice x={des.x} y={0} op={des.op} sx={des.sx} sy={des.sy} color={COL.des} order={100 - des.x * 10} />
        </ThreeCanvas>
        <AbsoluteFill>
          <Label cam={cam} w={width} h={height} at={[AI_X, H / 2, -D / 2]} dx={-16} dy={14} op={labelsOp} text="AI" color={COL.ai} align="right" />
          <Label cam={cam} w={width} h={height} at={[AI_X - FINAL_GAP, -H / 2, D / 2]} dx={14} dy={30} op={labelsOp} text="1 designer" color={INK} />
          <Label cam={cam} w={width} h={height} at={[AI_X + FINAL_GAP, H / 2, D / 2]} dx={0} dy={-64} op={labelsOp} text="1 month" color={INK} align="right" />
        </AbsoluteFill>
      </AbsoluteFill>
      {cardOp > 0.001 && (
        <div style={{ position: "absolute", left: 0, top: 0, width: W, height: HH, transformOrigin: "0 0", opacity: cardOp,
          transform: quadMatrix(W, HH, k("tl"), k("tr"), k("br"), k("bl")), background: YELLOW, overflow: "hidden", borderRadius: contained ? 28 : 0 }}>
          {contained
            ? <Img src={staticFile(picture)} style={{ position: "absolute", left: 18, top: 18, width: W - 36, height: HH - 36, borderRadius: 14, opacity: shotOp }} />
            : <Img src={staticFile(picture)} style={{ position: "absolute", inset: 0, width: W, height: HH, opacity: shotOp }} />}
          {!contained && <div style={{ position: "absolute", inset: 0, boxShadow: `inset 0 0 0 28px ${YELLOW}`, opacity: rim * shotOp }} />}
        </div>
      )}
    </AbsoluteFill>
  );
};
