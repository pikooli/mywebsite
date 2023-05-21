import { generateNewBoard } from './generateNewBoard';
import { NUM_COLS, NUM_ROWS } from 'puyopuyo/constants';

describe('generateNewBoard', () => {
  test(`
        Given initial state
        When generateNewBoard is called
        Then it should return a board of size NUM_COLS x NUM_ROWS`, () => {
    const result = generateNewBoard();

    expect(result.length).toBe(NUM_COLS * NUM_ROWS);
  });
});
