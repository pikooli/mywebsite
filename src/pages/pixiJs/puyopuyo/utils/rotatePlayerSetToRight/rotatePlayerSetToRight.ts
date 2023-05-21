import { NUM_ROWS } from 'puyopuyo/constants';
import { Board, PlayerSet } from 'puyopuyo/types';

interface RotatePlayerSetToRight {
  board: Board;
  playerSet: PlayerSet;
}

const slim1HigherThanSlim2 = (props: RotatePlayerSetToRight) => {
  const { board, playerSet } = props;
  const slim1 = playerSet[0];
  const slim2 = playerSet[1];

  if (
    slim2.position - NUM_ROWS === slim1.position &&
    !board[slim2.position - NUM_ROWS + 1] &&
    !board[slim2.position + 1] &&
    slim2.position % NUM_ROWS !== NUM_ROWS - 1
  ) {
    return [slim1, { ...slim2, position: slim2.position - NUM_ROWS + 1 }];
  }
  return null;
};

const slim2ToTheLeftOfSlim1 = (props: RotatePlayerSetToRight) => {
  const { board, playerSet } = props;
  const slim1 = playerSet[0];
  const slim2 = playerSet[1];

  if (
    slim2.position + 1 === slim1.position &&
    !board[slim2.position + NUM_ROWS + 1] &&
    !board[slim2.position + NUM_ROWS] &&
    slim2.position + NUM_ROWS < board.length
  ) {
    return [slim1, { ...slim2, position: slim2.position + NUM_ROWS + 1 }];
  }
  return null;
};

const slim2HigherThanSlim1 = (props: RotatePlayerSetToRight) => {
  const { board, playerSet } = props;
  const slim1 = playerSet[0];
  const slim2 = playerSet[1];

  if (
    slim1.position - NUM_ROWS === slim2.position &&
    !board[slim2.position + NUM_ROWS - 1] &&
    !board[slim2.position - 1] &&
    slim2.position % NUM_ROWS !== 0
  ) {
    return [slim1, { ...slim2, position: slim2.position + NUM_ROWS - 1 }];
  }
  return null;
};

const slim1ToTheLeftOfSlim2 = (props: RotatePlayerSetToRight) => {
  const { board, playerSet } = props;
  const slim1 = playerSet[0];
  const slim2 = playerSet[1];

  if (
    slim2.position - 1 === slim1.position &&
    !board[slim2.position - NUM_ROWS - 1] &&
    !board[slim2.position - NUM_ROWS] &&
    slim2.position - NUM_ROWS > 0
  ) {
    return [slim1, { ...slim2, position: slim2.position - NUM_ROWS - 1 }];
  }
  return null;
};

export function rotatePlayerSetToRight(
  props: RotatePlayerSetToRight
): PlayerSet | null {
  if (!props.playerSet.length) {
    return null;
  }

  let result;
  result = slim1HigherThanSlim2(props);
  result = result || slim2ToTheLeftOfSlim1(props);
  result = result || slim2HigherThanSlim1(props);
  result = result || slim1ToTheLeftOfSlim2(props);
  return result;
}
