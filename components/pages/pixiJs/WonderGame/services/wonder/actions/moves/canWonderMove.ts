import {
  MAP_HEIGHT,
  MAP_WIDTH,
} from "components/pages/pixiJs/WonderGame/utils";
import { conversionMap } from "components/pages/pixiJs/WonderGame/sprites";
import { Mapping } from "../../../../types";

export const isLimitOfMap = (nextPosition: Position) => {
  if (
    nextPosition.x === MAP_WIDTH - 1 ||
    nextPosition.y === MAP_HEIGHT - 1 ||
    nextPosition.x === -1 ||
    nextPosition.y === -1
  )
    return true;
  return false;
};

export const canStepOn = (nextPosition: Position, map: Mapping) => {
  const idx = nextPosition.x + nextPosition.y * MAP_WIDTH;
  const tileNumber = map[idx];
  const tile = conversionMap[tileNumber];

  if (tile.canStepOn) return true;
  return false;
};

export const canWonderMove = (nextPosition: Position, map: Mapping) => {
  if (isLimitOfMap(nextPosition)) return false;
  if (!canStepOn(nextPosition, map)) return false;
  return true;
};
