import { Board, PlayerSet } from 'puyopuyo/types';

interface MovePlayerSetRight {
  board: Board;
  playerSet: PlayerSet;
}

export function setPlayerSlimInBoard(props: MovePlayerSetRight): Board {
  const { board, playerSet } = props;

  if (!playerSet.length) {
    return board;
  }

  const slim1 = playerSet[0];
  const slim2 = playerSet[1];

  board[slim1.position] = slim1.color;
  board[slim2.position] = slim2.color;

  return board;
}
