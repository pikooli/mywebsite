import { useMemo } from 'react';
import {
  KIGURUMI_SPRITE_SHEET_JSON,
  TILEMAP_SPRITE_SHEET_JSON,
} from '../../utils';
import { Wonder } from 'src/pages/pixiJs/WonderGame/wonder';
import { GameStage } from '../../gameStage';
import { useTextures } from 'src/lib/PixiJs/useTexture';
import { MapConfiguration } from '../../../types';

interface RenderTextureELementsProps {
  mapConfiguration: MapConfiguration;
  wonderPosition: Position;
}

export function RenderTextureELements(props: RenderTextureELementsProps) {
  const { mapConfiguration, wonderPosition } = props;
  const spriteSheetPaths = useMemo(
    () => [KIGURUMI_SPRITE_SHEET_JSON, TILEMAP_SPRITE_SHEET_JSON],
    []
  );

  const textures = useTextures({
    spriteSheetPaths,
    asTextureChain: true,
  });

  if (textures.length !== spriteSheetPaths.length) {
    return null;
  }

  return (
    <>
      <GameStage textures={textures[1]} map={mapConfiguration.map} />
      <Wonder textures={textures[0]} position={wonderPosition} />
    </>
  );
}