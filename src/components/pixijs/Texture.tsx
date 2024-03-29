import { useTextures, UseTexturesProps } from 'src/lib/PixiJs/useTexture';

interface TexturesProps extends UseTexturesProps {
  children: Function;
}

const Textures = (props: TexturesProps) => {
  const {
    spriteSheetPaths,
    asTextureChain = false,
    children,
    spriteSheetNames,
  } = props;

  const textures = useTextures({
    spriteSheetPaths,
    spriteSheetNames,
    asTextureChain,
  });

  if (spriteSheetPaths?.length === textures.length) {
    return children(textures);
  }

  return null;
};

export default Textures;
