import { useCallback } from "react";
import { Texture } from "@pixi/core";
import {
  conversionMap,
  KeyofConversionMap,
} from "components/pages/pixiJs/WonderGame/stages/stages.conversionMap";
import { map1 } from "components/pages/pixiJs/WonderGame/maps/map1";
import { Sprite } from "@inlet/react-pixi";
import {
  BLOCK_SIZE,
  MAP_WIDTH,
  MAP_HEIGHT,
} from "components/pages/pixiJs/WonderGame/utils/utils";

export type UseStage1Props = {
  textures: Texture[];
};

export function useStage1(props: UseStage1Props) {
  const { textures } = props;

  const mapTextures = useCallback(() => {
    return map1.map((titleNumber: number, idx: number) => {
      const textureName: string =
        conversionMap[titleNumber as KeyofConversionMap];
      const texture =
        textures.find((texture: Texture) => {
          return texture.textureCacheIds[0] === textureName;
        }) ?? textures[0];

      const x = Math.floor(idx % MAP_WIDTH);
      //  the +1 is a quick fix
      const y = Math.floor(idx / MAP_HEIGHT) + 1;

      return (
        <Sprite
          key={idx}
          texture={texture}
          {...{ x: x * BLOCK_SIZE, y: y * BLOCK_SIZE }}
          anchor={[0, 1]}
        />
      );
    });
  }, [textures]);

  return {
    mapTextures,
  };
}
