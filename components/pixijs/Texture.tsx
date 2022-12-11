import React from "react";
import { useTextures } from "lib/PixiJs/useTexture";

const Textures = ({
  spritesheet,
  textureChain = false,
  children,
}: {
  spritesheet: string;
  textureChain: boolean;
  children: Function;
}) => {
  const textures = useTextures(spritesheet, textureChain);
  return <>{textures && children(textures)}</>;
};

export default Textures;
