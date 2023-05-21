import { Board } from 'puyopuyo/types';

import { removeGroupFromBoard } from './removeGroupFromBoard';

describe('removeGroupFromBoard', () => {
  test(`
        Given a board with a group of slim
        When call removeGroupFromBoard with the board and the index of the group of slim
        Then it should return a board without this group of slim`, () => {
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

    // prettier-ignore
    const expectedBoard :Board= [
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
      '', '', '', '', '', ''
    ]
    const result = removeGroupFromBoard({
      board,
      indexes: [0, 1, 2, 3],
    });
    expect(result).toEqual(expectedBoard);
  });
});
