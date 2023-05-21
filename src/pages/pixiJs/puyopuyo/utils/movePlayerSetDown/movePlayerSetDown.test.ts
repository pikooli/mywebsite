import { movePlayerSetDown } from './movePlayerSetDown';
import { Board, PlayerSet } from 'puyopuyo/types';

describe('moveElementsDown', () => {
  it(`
      Given a board with a set of slim at the top
      When call moveElementsDown
      Then it should return a board with the set moved one block lower`, () => {
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
    const playerSet: PlayerSet = [
      { color: 'g', position: 2 },
      { color: 'r', position: 8 },
    ];

    // prettier-ignore
    const expectedNewPlayerSet = [
      { color: "g", position: 8 },
      { color: "r", position: 14 },
    ];

    const newPlayerSet = movePlayerSetDown({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });
});
