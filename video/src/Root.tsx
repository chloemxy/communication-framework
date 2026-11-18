import { Composition } from "remotion";
import { AiSlices } from "./AiSlices";
import { AiToPrism, AI_TO_PRISM_FRAMES } from "./AiToPrism";
import { FrameworksList } from "./FrameworksList";
import { FrameworksFlow } from "./FrameworksFlow";

export const RemotionRoot = () => (
  <>
    <Composition id="AiSlices" component={AiSlices} durationInFrames={300} fps={30} width={1920} height={1080} />
    <Composition id="AiToPrism" component={AiToPrism} durationInFrames={AI_TO_PRISM_FRAMES} fps={30} width={1920} height={1080} />
    <Composition id="AiToReveal" component={AiToPrism} defaultProps={{ face: "prism-reveal.png", contained: true }} durationInFrames={AI_TO_PRISM_FRAMES} fps={30} width={1920} height={1080} />
    <Composition id="AiToRevealLight" component={AiToPrism} defaultProps={{ face: "prism-reveal-light.png", contained: true }} durationInFrames={AI_TO_PRISM_FRAMES} fps={30} width={1920} height={1080} />
    <Composition id="FrameworksList" component={FrameworksList} durationInFrames={330} fps={30} width={1920} height={1080} />
    <Composition id="FrameworksFlow" component={FrameworksFlow} durationInFrames={300} fps={30} width={1920} height={1080} />
  </>
);
