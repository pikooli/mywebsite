import { useCallback } from "react";
import { Texture } from "@pixi/core";
import { canWonderMove } from "../wonder/Wonder.utils";
import { mapConfiguration1 } from "../mapConfiguration";
import { useKeydown } from "../../hooks";
import {
  KIGURUMI_SPRITE_SHEET_JSON,
  TILEMAP_SPRITE_SHEET_JSON,
} from "../utils";
import { Wonder } from "components/pages/pixiJs/WonderGame/wonder";
import { GameStage } from "../gameStage";

export function useGame() {
  const mapConfiguration = mapConfiguration1;
  const spriteSheetPaths = [
    KIGURUMI_SPRITE_SHEET_JSON,
    TILEMAP_SPRITE_SHEET_JSON,
  ];
  const { position: wonderPosition } = useKeydown({
    mapConfiguration,
    canMove: canWonderMove,
    initPosition: { x: 1, y: 1 },
  });

  const renderStage = useCallback(
    (textures: Texture[][]) => {
      return (
        <>
          <GameStage textures={textures[1]} map={mapConfiguration.map} />
          <Wonder textures={textures[0]} position={wonderPosition} />
        </>
      );
    },
    [mapConfiguration, wonderPosition]
  );
  return {
    wonderPosition,
    mapConfiguration,
    spriteSheetPaths,
    renderStage,
  };
}
