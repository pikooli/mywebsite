import { NUM_ROWS } from 'puyopuyo/constants';
import { Board, PlayerSet } from 'puyopuyo/types';

interface MovePlayerSetRight {
  board: Board;
  playerSet: PlayerSet;
}

export function movePlayerSetRight(
  props: MovePlayerSetRight
): PlayerSet | null {
  const { board, playerSet } = props;

  if (!playerSet.length) {
    return null;
  }

  const slim1 = playerSet[0];
  const slim2 = playerSet[1];
  const outOfBound =
    slim1.position % NUM_ROWS >= NUM_ROWS - 1 ||
    slim2.position % NUM_ROWS >= NUM_ROWS - 1;

  if (!outOfBound && !board[slim2.position + 1] && !board[slim1.position + 1]) {
    const newPosition1 = slim1.position + 1;
    const newPosition2 = slim2.position + 1;
    return [
      { ...slim1, position: newPosition1 },
      { ...slim2, position: newPosition2 },
    ];
  }
  return null;
}
