import React from 'react';
import { useTextures, UseTexturesProps } from 'lib/PixiJs/useTexture';

interface TexturesProps extends UseTexturesProps {
  children: Function;
}

const Textures = (props: TexturesProps) => {
  const { spriteSheetPaths, asTextureChain = false, children } = props;
  const textures = useTextures({
    spriteSheetPaths,
    asTextureChain,
  });

  if (spriteSheetPaths?.length === textures.length) {
    return children(textures);
  }

  return null;
};

export default Textures;
