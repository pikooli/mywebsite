import { detectPlayerSetEnd } from './detectPlayerSetEnd';
import { Board, PlayerSet } from 'puyopuyo/types';

describe('detectPlayerSetEnd', () => {
  test(`
        Given a board with a set of slim positionned before the bottom
        When call detectPlayerSetEnd
        Then it should return null`, () => {
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
      '', '', '', 'g', '', '',
      '', '', '', 'r', '', '',
      '', '', '', '', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: 'g', position: 57 },
      { color: 'r', position: 63 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(null);
  });

  test(`
        Given a board with a set of slim positionned at the bottom
        When call detectPlayerSetEnd
        Then it should return true`, () => {
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
      '', '', 'g', 'r', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: 'g', position: 68 },
      { color: 'r', position: 69 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(true);
  });

  test(`
        Given a board with the slim 1 that are above another slim
        When call detectPlayerSetEnd
        Then it should return true`, () => {
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
      '', '', 'g', 'r', '', '',
      '', '', 'y', '', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: 'g', position: 62 },
      { color: 'r', position: 63 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(true);
  });

  test(`
        Given a board with the slim 2 that are above another slim
        When call detectPlayerSetEnd
        Then it should return true`, () => {
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
      '', '', 'g', 'r', '', '',
      '', '', '', 'y', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: 'g', position: 62 },
      { color: 'r', position: 63 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(true);
  });

  test(`
        Given a board with the set of slims vertically aligned
          And slim 1 is above slim 2
          And are above another slim
        When call detectPlayerSetEnd
        Then it should return true`, () => {
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
      '', '', '', 'g', '', '',
      '', '', '', 'r', '', '',
      '', '', '', 'y', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: 'g', position: 57 },
      { color: 'r', position: 63 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(true);
  });

  test(`
        Given a board with the set of slims vertically aligned
          And slim 2 is above slim 1
          And are above another slim
        When call detectPlayerSetEnd
        Then it should return true`, () => {
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
      '', '', 'r', '', '', '',
      '', '', 'g', '', '', '',
      '', '', 'y', '', '', ''
    ]
    const playerSet: PlayerSet = [
      { color: 'g', position: 62 },
      { color: 'r', position: 56 },
    ];
    const result = detectPlayerSetEnd({ board, playerSet });

    expect(result).toBe(true);
  });
});
