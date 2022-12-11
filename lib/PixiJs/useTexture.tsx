import { useEffect, useState } from "react";
import { useApp } from "@inlet/react-pixi";

const getTextures = (textures: any, asTextureChain: boolean) => {
  return asTextureChain
    ? Object.keys(textures).map((k) => textures[k])
    : textures;
};

// thanks AdrienLemaire 👇
// use a hook to load spritesheet textures
export function useTextures(
  spriteSheetPath: any,
  asTextureChain: boolean = false
) {
  const [textures, setTextures] = useState();
  const app = useApp();

  useEffect(() => {
    // get from cache
    if (app.loader.resources[spriteSheetPath]) {
      setTextures(
        getTextures(app.loader.resources[spriteSheetPath], asTextureChain)
      );
      return;
    }

    // else load
    app.loader.add(spriteSheetPath).load((_, resource) => {
      resource[spriteSheetPath]?.textures &&
        setTextures(
          getTextures(resource[spriteSheetPath].textures, asTextureChain)
        );
    });
  }, [app.loader, spriteSheetPath]);

  return textures;
}
