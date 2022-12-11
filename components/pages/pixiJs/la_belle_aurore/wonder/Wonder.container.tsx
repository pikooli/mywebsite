import { WonderView } from "./Wonder.view";
import { useWonder, UseWonderProps } from "./Wonder.hook";
interface WonderProps extends Pick<UseWonderProps, "textures"> {}

export function Wonder(props: WonderProps) {
  const { textures } = props;
  const WonderHookProps = useWonder({ textures });

  return <WonderView {...WonderHookProps} />;
}
