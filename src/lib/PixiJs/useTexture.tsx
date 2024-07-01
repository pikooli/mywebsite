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

    spriteSheetPaths.forEach((spriteSheetPath: string, idx: number) => {
      PIXI.Assets.add(spriteSheetNames[idx], spriteSheetPath);
    });

    const texturesPromise = PIXI.Assets.load(spriteSheetNames);

    const textures = await texturesPromise;
    setTextures(getTextures(textures, asTextureChain));
  }, [spriteSheetPaths, spriteSheetNames, asTextureChain]);

  useEffect(() => {
    if (spriteSheetPaths?.length && spriteSheetNames?.length) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      loadMultiSpriteSheet();
    }
  }, [spriteSheetPaths, spriteSheetNames]);

  return textures;
}
