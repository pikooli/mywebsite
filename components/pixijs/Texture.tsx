import React from "react";
import { useTextures, UseTexturesProps } from "lib/PixiJs/useTexture";

interface TexturesProps extends UseTexturesProps {
  children: Function;
}

const Textures = (props: TexturesProps) => {
  const {
    spriteSheetPath,
    spriteSheetPaths,
    asTextureChain = false,
    children,
  } = props;
  const textures = useTextures({
    spriteSheetPath,
    spriteSheetPaths,
    asTextureChain,
  });
  console.log(textures, spriteSheetPath);
  if (spriteSheetPaths?.length === textures.length) {
    return children(textures);
  }
  return textures[0] ? children(textures[0]) : null;
};

export default Textures;
