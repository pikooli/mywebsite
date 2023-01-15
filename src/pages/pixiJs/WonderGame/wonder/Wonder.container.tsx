import { memo } from "react";
import { WonderView } from "./Wonder.view";
import { useWonder, UseWonderProps } from "./Wonder.hook";

interface WonderProps extends Pick<UseWonderProps, "textures" | "position"> {}

export const Wonder = memo(function (props: WonderProps) {
  const { textures, position } = props;

  const WonderHookProps = useWonder({ textures, position });

  return <WonderView {...WonderHookProps} position={position} />;
});
