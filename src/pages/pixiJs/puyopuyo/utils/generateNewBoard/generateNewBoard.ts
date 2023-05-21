import { NUM_COLS, NUM_ROWS } from 'puyopuyo/constants';

export function generateNewBoard() {
  return new Array(NUM_COLS * NUM_ROWS);
}
