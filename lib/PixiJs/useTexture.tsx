import { useCallback, useEffect, useState } from "react";
import { useApp } from "@inlet/react-pixi";
import { Texture } from "@pixi/core";

const getTextures = (textures: any, asTextureChain: boolean) => {
  return asTextureChain
    ? Object.keys(textures).map((k) => textures[k])
    : textures;
};

export interface UseTexturesProps {
  spriteSheetPath?: string;
  spriteSheetPaths?: string[];
  asTextureChain: boolean;
}

// thanks AdrienLemaire 👇
// use a hook to load spritesheet textures
export function useTextures(props: UseTexturesProps) {
  const { spriteSheetPath, spriteSheetPaths, asTextureChain = false } = props;
  const [textures, setTextures] = useState<Texture[]>([]);
  const app = useApp();

  const loadSingleSpriteSheet = useCallback(() => {
    if (!spriteSheetPath) {
      return;
    }

    if (app.loader.resources[spriteSheetPath]) {
      // get from cache
      setTextures([
        getTextures(app.loader.resources[spriteSheetPath], asTextureChain),
      ]);
      return;
    }

    // else load
    app.loader.add(spriteSheetPath);
    app.loader.load((_, resource) => {
      resource[spriteSheetPath]?.textures &&
        setTextures([
          getTextures(resource[spriteSheetPath].textures, asTextureChain),
        ]);
    });
  }, []);

  const loadMultiSpriteSheet = useCallback(() => {
    if (!spriteSheetPaths?.length) {
      return;
    }

    const resources: Texture[] = [];

    spriteSheetPaths.forEach((spriteSheetPath: any) => {
      // get from cache
      if (app.loader.resources[spriteSheetPath]) {
        resources.push(
          getTextures(app.loader.resources[spriteSheetPath], asTextureChain)
        );
      } else {
        // else load
        app.loader.add(spriteSheetPath);
      }
    });

    const promises = spriteSheetPaths.map((spriteSheetPath: any) => {
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
      setTextures(resources);
    });
  }, []);

  useEffect(() => {
    if (spriteSheetPaths?.length) {
      loadMultiSpriteSheet();
    } else {
      loadSingleSpriteSheet();
    }
  }, [app.loader, spriteSheetPath, spriteSheetPaths]);

  return textures;
}
