import { useMemo } from 'react';
import {
  KIGURUMI_SPRITE_SHEET_JSON,
  TILEMAP_SPRITE_SHEET_JSON,
  KIGURUMI_SPRITE_NAME,
  TILEMAP_SPRITE_NAME,
} from '../../utils';
import { Wonder } from 'src/pages/pixiJs/WonderGame/wonder';
import { GameStage } from '../../gameStage';
import { useTextures } from 'src/lib/PixiJs/useTexture';
import { MapConfiguration } from '../../../types';

interface RenderTextureELementsProps {
  mapConfiguration: MapConfiguration;
}

export function RenderTextureELements(props: RenderTextureELementsProps) {
  const { mapConfiguration } = props;
  const spriteSheetPaths = useMemo(
    () => [KIGURUMI_SPRITE_SHEET_JSON, TILEMAP_SPRITE_SHEET_JSON],
    []
  );

  const spriteSheetNames = useMemo(
    () => [KIGURUMI_SPRITE_NAME, TILEMAP_SPRITE_NAME],
    []
  );

  const textures = useTextures({
    spriteSheetPaths,
    spriteSheetNames,
    asTextureChain: true,
  });

  if (textures.length !== spriteSheetPaths.length) {
    return null;
  }

  return (
    <>
      <GameStage textures={textures[1]} map={mapConfiguration.map} />
      <Wonder textures={textures[0]} />
    </>
  );
}
