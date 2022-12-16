import { useMemo } from "react";
import { spriteSheetMap } from "../stages.spriteSheetMap";
import { Texture } from "@pixi/core";

export type UseStage1Props = {
  textures: Texture[];
};

export function useStage1(props: UseStage1Props) {
  const { textures } = props;

  const summerTitle0 = useMemo(() => {
    return textures.find(
      (texture) =>
        texture.textureCacheIds[0] ===
        spriteSheetMap["spring tilemap"]["spring tilemap-0"]
    );
  }, []);

  const summerTitle1 = useMemo(() => {
    return textures.find(
      (texture) =>
        texture.textureCacheIds[0] ===
        spriteSheetMap["spring tilemap"]["spring tilemap-1"]
    );
  }, []);

  return {
    summerTitle0,
    summerTitle1,
  };
}
