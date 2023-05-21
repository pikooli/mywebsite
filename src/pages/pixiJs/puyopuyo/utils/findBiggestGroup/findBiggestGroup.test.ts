import { findBiggestGroup } from './findBiggestGroup';
import { Board } from 'puyopuyo/types';
import { NUM_ROWS } from 'puyopuyo/constants';

describe('findBiggestGroup', () => {
  test(`
        Given a boardGame
          And y is the bigger group
        Then it should return the group "y"`, () => {
    // prettier-ignore
    const board :Board= [
      'y', 'y', 'y', 'y', '', '',
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
    const result = findBiggestGroup({
      board,
      numbRow: NUM_ROWS,
    });
    expect(result.size).toBe(4);
    expect(result.letter).toBe('y');
  });

  test(`
        Given a boardGame half full of random colors
          And b is the bigger group
        Then it should return the group b`, () => {
    // prettier-ignore
    const board : Board = [
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","g","","",
      "","","","g","","",
      "b","y","b","g","","",
      "b","r","b","b","g","",
      "g","g","b","b","g","b",
      "r","g","","","","g"
    ]
    const result = findBiggestGroup({
      board,
      numbRow: NUM_ROWS,
    });
    expect(result.size).toBe(5);
    expect(result.letter).toBe('b');
  });

  test(`
        Given a boardGame
          And all group is only of size 1
        Then it should return a group of size 0 and letter ""`, () => {
    // prettier-ignore
    const board : Board = [
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","g","","","",
      "r","","y","","b",""
    ]
    const result = findBiggestGroup({
      board,
      numbRow: NUM_ROWS,
    });
    expect(result.size).toBe(0);
    expect(result.letter).toBe('');
  });

  test(`
        Given a boardGame
          And 3 group of size 4
        Then it should return the first group`, () => {
    // prettier-ignore
    const board : Board = [
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "r","","g","","b","",
      "r","","g","","b","",
      "r","","g","","b","",
      "r","","g","","b",""
    ]
    const result = findBiggestGroup({
      board,
      numbRow: NUM_ROWS,
    });
    expect(result.size).toBe(4);
    expect(result.letter).toBe('r');
  });

  test(`
        Given a boardGame
          And 2 group of size 4 and one of size 5
        Then it should return the bigger group`, () => {
    // prettier-ignore
    const board : Board = [
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","","","","",
      "","","g","","","",
      "r","","g","","b","",
      "r","","g","","b","",
      "r","","g","","b","",
      "r","","g","","b",""
    ]
    const result = findBiggestGroup({
      board,
      numbRow: NUM_ROWS,
    });
    expect(result.size).toBe(5);
    expect(result.letter).toBe('g');
  });
});
