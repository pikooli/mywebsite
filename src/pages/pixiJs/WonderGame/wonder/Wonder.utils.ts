import { MAP_ROW, MAP_COL } from 'src/pages/pixiJs/WonderGame/utils';
import { conversionMap } from 'src/pages/pixiJs/WonderGame/sprites';
import { Map } from '../../types';

export const isLimitOfMap = (nextPosition: Position) => {
  if (
    nextPosition.x === MAP_COL - 1 ||
    nextPosition.y === MAP_ROW - 1 ||
    nextPosition.x === -1 ||
    nextPosition.y === -1
  )
    return true;
  return false;
};

export const canStepOn = (nextPosition: Position, map: Map) => {
  const idx = nextPosition.x + nextPosition.y * MAP_COL;
  const tileNumber = map[idx];
  const tile = conversionMap[tileNumber];

  if (tile.canStepOn) return true;
  return false;
};

export const canWonderMove = (nextPosition: Position, map: Map) => {
  if (isLimitOfMap(nextPosition)) return false;
  if (!canStepOn(nextPosition, map)) return false;
  return true;
};
