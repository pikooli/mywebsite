import { Stage1View } from "./Stage1.view";
import { useStage1, UseStage1Props } from "./Stage1.hook";
interface WonderProps extends Pick<UseStage1Props, "textures"> {}

export function Stage1(props: WonderProps) {
  const { textures } = props;
  const Stage1HookProps = useStage1({ textures });

  return <Stage1View {...Stage1HookProps} />;
}
