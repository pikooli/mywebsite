import { NUM_ROWS, NUM_COLS } from 'puyopuyo/constants';
import { Board } from 'puyopuyo/types';

export function moveAllElementsDown(board: Board) {
  for (let col = 0; col < NUM_COLS; col++) {
    for (let row = 0; row < NUM_ROWS; row++) {
      if (
        board[row + col * NUM_ROWS] &&
        col != NUM_COLS - 1 &&
        !board[row + (col + 1) * NUM_ROWS]
      ) {
        board[row + (col + 1) * NUM_ROWS] = board[row + col * NUM_ROWS];
        board[row + col * NUM_ROWS] = '';
        col = 0;
        row = 0;
      }
    }
  }
  return board;
}
