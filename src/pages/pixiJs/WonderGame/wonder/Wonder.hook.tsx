import { useMemo } from "react";
import { wonderSpriteSheetMap } from "../sprites";
import { Texture } from "@pixi/core";

export type UseWonderProps = {
  textures: Texture[];
  position: Position;
};

export function useWonder(props: UseWonderProps) {
  const { textures, position } = props;

  const cat_costum = useMemo(() => {
    return textures.find(
      (texture) =>
        texture.textureCacheIds[0] ===
        wonderSpriteSheetMap["cat kigurumi walk and idle"][
          "cat kigurumi walk and idle-0"
        ]
    );
  }, []);

  const wonder = useMemo(() => {
    return textures.find(
      (texture) =>
        texture.textureCacheIds[0] ===
        wonderSpriteSheetMap["walk and idle"]["walk and idle-0"]
    );
  }, []);

  return {
    position,
    cat_costum,
    wonder,
  };
}
