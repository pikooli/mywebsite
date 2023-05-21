import { setPlayerSlimInBoard } from './setPlayerSlimInBoard';
import { Board, PlayerSet } from 'puyopuyo/types';

describe('setPlayerSlimInBoard', () => {
  it(`
      Given a set of slim and a board
      When call setPlayerSlimInBoard
      Then the return board should be equal at the expected board`, () => {
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
      '', '', '', '', 'y', ''
    ]
    const playerSet: PlayerSet = [
      { color: 'g', position: 2 },
      { color: 'r', position: 8 },
    ];

    // prettier-ignore
    const expectedBoard :Board= [
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

    const newBoard = setPlayerSlimInBoard({ board, playerSet });
    expect(newBoard).toEqual(expectedBoard);
  });
});
