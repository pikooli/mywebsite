import { NUM_ROWS } from 'puyopuyo/constants';
import { PlayerSet, Board } from 'puyopuyo/types';

interface DetectPlayerSetEnd {
  board: Board;
  playerSet: PlayerSet;
}

const slim1HigherThanSlim2 = (props: DetectPlayerSetEnd) => {
  const { board, playerSet } = props;
  const slim1 = playerSet[0];
  const slim2 = playerSet[1];

  if (
    slim2.position - NUM_ROWS === slim1.position &&
    board[slim2.position + NUM_ROWS]
  ) {
    return true;
  }
  return null;
};

const slim2HigherThanSlim1 = (props: DetectPlayerSetEnd) => {
  const { board, playerSet } = props;
  const slim1 = playerSet[0];
  const slim2 = playerSet[1];

  if (
    slim1.position - NUM_ROWS === slim2.position &&
    board[slim1.position + NUM_ROWS]
  ) {
    return true;
  }
  return null;
};

const slimsSameHeight = (props: DetectPlayerSetEnd) => {
  const { board, playerSet } = props;
  const slim1 = playerSet[0];
  const slim2 = playerSet[1];

  if (
    (slim1.position - 1 === slim2.position ||
      slim1.position + 1 === slim2.position) &&
    (board[slim1.position + NUM_ROWS] || board[slim2.position + NUM_ROWS])
  ) {
    return true;
  }
  return null;
};

const slimsAtBottom = (props: DetectPlayerSetEnd) => {
  const { board, playerSet } = props;
  const slim1 = playerSet[0];
  const slim2 = playerSet[1];

  if (
    slim1.position > board.length - NUM_ROWS ||
    slim2.position > board.length - NUM_ROWS
  ) {
    return true;
  }
  return null;
};

export function detectPlayerSetEnd(props: DetectPlayerSetEnd) {
  const { playerSet } = props;

  if (
    playerSet.length &&
    (slimsAtBottom(props) ||
      slimsSameHeight(props) ||
      slim1HigherThanSlim2(props) ||
      slim2HigherThanSlim1(props))
  ) {
    return true;
  }

  return null;
}
