import { useCallback } from 'react';
import { Texture } from '@pixi/core';
import { conversionMap } from 'src/pages/pixiJs/WonderGame/sprites';
import { Map, TitleNature } from '../../types';
import { Sprite } from '@pixi/react';
import {
  BLOCK_SIZE,
  MAP_COL,
  MAP_ROW,
} from 'src/pages/pixiJs/WonderGame/utils';

export interface UseGameStageProps {
  textures: Texture[];
  map: Map;
}

export function useGameStage(props: UseGameStageProps) {
  const { textures, map } = props;

  const mapTextures = useCallback(() => {
    return map.map((titleNumber: number, idx: number) => {
      const title: TitleNature = conversionMap[titleNumber];
      const texture =
        textures.find((texture: Texture) => {
          return texture.textureCacheIds[0] === title.sprite;
        }) ?? textures[0];

      const x = Math.floor(idx % MAP_COL);
      const y = Math.floor(idx / MAP_ROW);

      return (
        <Sprite
          key={idx}
          texture={texture}
          {...{ x: x * BLOCK_SIZE, y: y * BLOCK_SIZE }}
          anchor={[0, 0]}
        />
      );
    });
  }, [textures]);

  return {
    mapTextures,
  };
}
