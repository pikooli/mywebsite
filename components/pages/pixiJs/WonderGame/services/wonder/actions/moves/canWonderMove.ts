import {
  MAP_HEIGHT,
  MAP_WIDTH,
} from "components/pages/pixiJs/WonderGame/utils/utils";

export const canWonderMove = (nextPosition: Position) => {
  if (
    nextPosition.x === MAP_WIDTH - 1 ||
    nextPosition.y === MAP_HEIGHT - 1 ||
    nextPosition.x === -1 ||
    nextPosition.y === -1
  )
    return false;
  else return true;
};
