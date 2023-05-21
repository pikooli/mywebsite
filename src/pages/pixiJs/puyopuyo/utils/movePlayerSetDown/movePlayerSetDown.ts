import { NUM_ROWS } from 'puyopuyo/constants';
import { Board, PlayerSet } from 'puyopuyo/types';

interface MovePlayerSetDown {
  board: Board;
  playerSet: PlayerSet;
}

export function movePlayerSetDown(props: MovePlayerSetDown): PlayerSet | null {
  const { board, playerSet } = props;

  if (!playerSet.length) {
    return null;
  }

  const slim1 = playerSet[0];
  const slim2 = playerSet[1];

  function isPlayerSetNotAtBottom() {
    return (
      slim1.position + NUM_ROWS < board.length &&
      slim2.position + NUM_ROWS < board.length
    );
  }
  function slim2canGoDown() {
    return (
      slim2.position + NUM_ROWS !== slim1.position &&
      !board[slim2.position + NUM_ROWS]
    );
  }
  function slim1CanGoDown() {
    return (
      slim1.position + NUM_ROWS !== slim2.position &&
      !board[slim1.position + NUM_ROWS]
    );
  }

  if (isPlayerSetNotAtBottom() && (slim2canGoDown() || slim1CanGoDown())) {
    slim2.position = slim2.position + NUM_ROWS;
    slim1.position = slim1.position + NUM_ROWS;
    return [slim1, slim2];
  }
  return null;
}
