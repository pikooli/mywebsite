import { canWonderMove } from "../wonder/Wonder.utils";
import { mapConfiguration1 } from "../mapConfiguration";
import { useKeydown } from "../../hooks";
import {
  KIGURUMI_SPRITE_SHEET_JSON,
  TILEMAP_SPRITE_SHEET_JSON,
} from "../utils";

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

  return {
    wonderPosition,
    mapConfiguration,
    spriteSheetPaths,
  };
}
