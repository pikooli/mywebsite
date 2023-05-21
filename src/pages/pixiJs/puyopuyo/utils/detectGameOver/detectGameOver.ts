import { NUM_ROWS } from 'puyopuyo/constants';
import { Board } from 'puyopuyo/types';

interface DetectGameOver {
  board: Board;
}

export function detectGameOver(props: DetectGameOver) {
  const { board } = props;

  for (let i = 0; i < NUM_ROWS; i++) {
    if (board[i]) {
      return true;
    }
  }

  return false;
}
