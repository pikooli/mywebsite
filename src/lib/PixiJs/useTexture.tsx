import { useCallback, useEffect, useState } from "react";
import { useApp } from "@inlet/react-pixi";
import { Texture } from "@pixi/core";

const getTextures = (textures: any, asTextureChain: boolean) => {
  return asTextureChain
    ? Object.keys(textures).map((k) => textures[k])
    : textures;
};

export interface UseTexturesProps {
  spriteSheetPaths?: string[];
  asTextureChain: boolean;
}

// thanks AdrienLemaire 👇
// use a hook to load spritesheet textures
export function useTextures(props: UseTexturesProps) {
  const { spriteSheetPaths, asTextureChain = false } = props;
  const [textures, setTextures] = useState<Texture[][]>([]);
  const app = useApp();

  const loadMultiSpriteSheet = useCallback(() => {
    if (!spriteSheetPaths?.length) {
      return;
    }

    const resources: Texture[][] = [];
    let loadedSpriteSheetPaths: string[] = [];

    spriteSheetPaths.map((spriteSheetPath: any) => {
      if (app.loader.resources[spriteSheetPath]) {
        resources.push(
          getTextures(
            app.loader.resources[spriteSheetPath].textures,
            asTextureChain
          )
        );
      } else {
        app.loader.add(spriteSheetPath);
        loadedSpriteSheetPaths.push(spriteSheetPath);
      }
    });

    const promises = loadedSpriteSheetPaths.map((spriteSheetPath: any) => {
      return new Promise((resolve, reject) =>
        app.loader.load((_, resource) => {
          if (resource[spriteSheetPath]?.textures) {
            resources.push(
              getTextures(resource[spriteSheetPath].textures, asTextureChain)
            );
            resolve(resources);
          }
          reject();
        })
      );
    });

    Promise.all(promises).then(() => {
      setTextures((prev) => resources);
    });
  }, []);

  useEffect(() => {
    if (spriteSheetPaths?.length) {
      loadMultiSpriteSheet();
    }
  }, [spriteSheetPaths]);

  return textures;
}
