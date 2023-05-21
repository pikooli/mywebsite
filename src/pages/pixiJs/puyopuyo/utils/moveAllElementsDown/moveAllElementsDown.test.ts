import { moveAllElementsDown } from './moveAllElementsDown';
import { Board } from 'puyopuyo/types';

describe('moveAllElementsDown', () => {
  it(`
      Given a board with a set of slim at the top
      When call moveAllElementsDown
      Then it should return a board with the set moved to the bottom wit hthe same alignement`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'g', '', '', '',
      '', '', 'r', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', '', '', '', 'y', ''
    ]

    // prettier-ignore
    const expectedArray = [
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
      '', '', 'g', '', '', '',
      '', '', 'r', '', 'y', ''
    ];

    const resultArray = moveAllElementsDown(board);
    expect(resultArray).toEqual(expectedArray);
  });
});
