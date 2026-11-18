// "14 frameworks, one list" slide (after Meet PRISM), flow-tree version: PRISM's 14 frameworks are
// circles down the left, coloured by zone. Each draws a translucent ribbon that sweeps right, and the
// ribbons braid into one yellow node, "1 list", which grows as they arrive. Plays once and holds.
import { loadFont } from "@remotion/google-fonts/PublicSans";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

const { fontFamily } = loadFont("normal", { weights: ["600", "700"], subsets: ["latin"] });

// ---- look -------------------------------------------------------------------------------
const BG = "#121417"; // the deck's dark desk
const INK = "#E9EBEE";
const DARK = "#16181D";
const YELLOW = "#F5CF4A";
const ZONE = { c: "#8DB4EC", d: "#7FD19B", b: "#F28B82" } as const; // clarity, decisions, behaviour
type Z = keyof typeof ZONE;

// the deck's 14 frameworks (presentation/fw-rows.js), in list order
const FW: [string, Z][] = [
  ["CCI", "c"], ["PEMAT-P", "c"], ["PEMAT-A/V", "c"], ["CDC IDD/ELL", "c"], ["SAM", "c"],
  ["DISCERN", "c"], ["Readability", "c"], ["CDC Inclusive", "c"], ["UPL", "c"],
  ["IPDAS", "d"],
  ["HBM", "b"], ["TTM", "b"], ["EPPM", "b"], ["WHO ERC", "b"],
];

// ---- layout (px, 1920×1080; the slide's title runs across the top left) ---------------------
const X0 = 800, Y0 = 300, DY = 52; // framework circles
const R0 = 11;
const NODE = { x: 1560, y: Y0 + (DY * 13) / 2 }; // the one list, level with the middle of the column
const RIB = 15; // ribbon width; at the node they stack side by side
const rowY = (i: number) => Y0 + i * DY;
const endY = (i: number) => NODE.y + (i - 6.5) * RIB;
const ribbon = (i: number) => {
  const y1 = rowY(i), y2 = endY(i), m = (X0 + NODE.x) / 2;
  return `M ${X0} ${y1} C ${m} ${y1}, ${m} ${y2}, ${NODE.x} ${y2}`;
};

// ---- timing (frames @30fps) --------------------------------------------------------------
const ease = Easing.bezier(0.22, 1, 0.36, 1);
const inOut = Easing.bezier(0.65, 0, 0.35, 1);
const r = (f: number, a: number, b: number, e = ease) =>
  interpolate(f, [a, b], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: e });

const NAME_IN = (i: number) => 6 + i * 4; // names and circles fade in down the column
const DRAW = (i: number) => 72 + i * 5; // then each ribbon draws itself to the node
const DRAW_LEN = 48;
const LAST = DRAW(FW.length - 1) + DRAW_LEN;
const LABEL_IN = [LAST + 4, LAST + 26];

export const FrameworksFlow: React.FC = () => {
  const f = useCurrentFrame();
  const drawn = FW.map((_, i) => r(f, DRAW(i), DRAW(i) + DRAW_LEN, inOut));
  const arrived = drawn.reduce((s, d) => s + (d > 0.92 ? (d - 0.92) / 0.08 : 0), 0);
  const nodeOp = r(f, DRAW(0) + DRAW_LEN * 0.8, DRAW(0) + DRAW_LEN + 6);
  // the node grows with every ribbon that lands, with a soft settle at the end
  const nodeR = interpolate(arrived, [0, 14], [46, 118]) * (1 + 0.06 * Math.sin(Math.PI * r(f, LAST - 6, LAST + 18)));
  const labelOp = r(f, LABEL_IN[0], LABEL_IN[1]);

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      <svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <radialGradient id="glow">
            <stop offset="0" stopColor={YELLOW} stopOpacity={0.35} />
            <stop offset="1" stopColor={YELLOW} stopOpacity={0} />
          </radialGradient>
        </defs>
        {/* ribbons, drawn from each circle toward the node */}
        {FW.map(([, z], i) => (
          <path key={i} d={ribbon(i)} pathLength={1} fill="none" stroke={ZONE[z]} strokeOpacity={0.5} strokeWidth={RIB} strokeLinecap="butt"
            strokeDasharray="1 1" strokeDashoffset={1 - drawn[i]} />
        ))}
        {/* the one list */}
        <circle cx={NODE.x} cy={NODE.y} r={nodeR * 1.9} fill="url(#glow)" opacity={nodeOp} />
        <circle cx={NODE.x} cy={NODE.y} r={nodeR} fill={YELLOW} fillOpacity={nodeOp} stroke="#E0B52E" strokeWidth={3} strokeOpacity={nodeOp} />
        {/* framework circles */}
        {FW.map(([, z], i) => {
          const o = r(f, NAME_IN(i), NAME_IN(i) + 16);
          return <circle key={i} cx={X0} cy={rowY(i)} r={R0 * (0.6 + 0.4 * o)} fill={ZONE[z]} fillOpacity={0.9 * o} stroke={ZONE[z]} strokeWidth={2} strokeOpacity={o} />;
        })}
      </svg>
      {FW.map(([name], i) => {
        const o = r(f, NAME_IN(i), NAME_IN(i) + 16);
        return (
          <div key={name} style={{ position: "absolute", left: X0 - R0 - 22, top: rowY(i), transform: `translate(-100%, -50%) translateX(${(1 - o) * -16}px)`, opacity: o, fontFamily, fontWeight: 600, fontSize: 30, color: INK, whiteSpace: "nowrap" }}>
            {name}
          </div>
        );
      })}
      <div style={{ position: "absolute", left: NODE.x, top: NODE.y, transform: `translate(-50%, -50%) scale(${0.9 + 0.1 * labelOp})`, opacity: labelOp, fontFamily, fontWeight: 700, fontSize: 46, color: DARK, whiteSpace: "nowrap" }}>
        1 list
      </div>
    </AbsoluteFill>
  );
};
