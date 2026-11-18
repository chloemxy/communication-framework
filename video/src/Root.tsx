import { Composition } from "remotion";
import { AiSlices } from "./AiSlices";

export const RemotionRoot = () => (
  <Composition id="AiSlices" component={AiSlices} durationInFrames={300} fps={30} width={1920} height={1080} />
);
