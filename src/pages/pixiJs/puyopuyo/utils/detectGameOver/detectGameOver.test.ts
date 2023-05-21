import { detectGameOver } from './detectGameOver';
import { Board } from 'puyopuyo/types';

describe('detectGameOver', () => {
  test(`
        Given a board with a slim positionned at the very top
        When call detectGameOver
        Then it should return true`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', 'r', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', ''
    ]

    const result = detectGameOver({ board });

    expect(result).toBe(true);
  });

  test(`
        Given a board with no slim at the top
        When call detectGameOver
        Then it should return false`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', 'g', '', '', ''
    ]

    const result = detectGameOver({ board });

    expect(result).toBe(false);
  });
});
