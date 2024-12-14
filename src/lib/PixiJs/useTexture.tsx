import { useCallback, useEffect, useState } from 'react';
import * as PIXI from 'pixi.js';
import { Texture } from '@pixi/core';

const getTextures = (textures: any, asTextureChain: boolean) => {
  return asTextureChain
    ? Object.keys(textures).map<Texture[]>(k =>
        Object.values(textures[k].textures)
      )
    : Object.values<Texture[]>(textures.textures);
};

export interface UseTexturesProps {
  spriteSheetPaths?: string[];
  spriteSheetNames?: string[];
  asTextureChain: boolean;
}

export function useTextures(props: UseTexturesProps) {
  const { spriteSheetPaths, asTextureChain = false, spriteSheetNames } = props;
  const [textures, setTextures] = useState<Texture[][]>([]);

  const loadMultiSpriteSheet = useCallback(async () => {
    if (!spriteSheetPaths?.length || !spriteSheetNames?.length) {
      return;
    }

    const loadPromises = spriteSheetPaths.map(async (spriteSheetPath: string, idx: number) =>
      await PIXI.Assets.load(spriteSheetPath)
    );

    const loadedAssets = await Promise.all(loadPromises);
    const combinedTextures = spriteSheetNames.reduce<any>((acc, name, idx) => {
      acc[name] = loadedAssets[idx];
      return acc;
    }, {});

    setTextures(getTextures(combinedTextures, asTextureChain));
  }, [spriteSheetPaths, spriteSheetNames, asTextureChain]);

  useEffect(() => {
    if (spriteSheetPaths?.length && spriteSheetNames?.length) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      loadMultiSpriteSheet();
    }
  }, [spriteSheetPaths, spriteSheetNames]);
  console.log('textures', textures);
  return textures;
}
