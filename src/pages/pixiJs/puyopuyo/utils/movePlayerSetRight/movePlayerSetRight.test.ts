import { movePlayerSetRight } from './movePlayerSetRight';
import { Board, PlayerSet } from 'puyopuyo/types';

describe('movePlayerSetRight', () => {
  it(`
      Given a set of slim
      When call movePlayerSetRight
      Then it should return a set with slim that have move to the right`, () => {
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

    const expectedNewPlayerSet: PlayerSet = [
      { color: 'g', position: 3 },
      { color: 'r', position: 9 },
    ];

    const newPlayerSet = movePlayerSetRight({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it(`
      Given a set of slim with a slim at the right of one of them
      When call movePlayerSetRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', 'g', 'y',
      '', '', '', '', 'r', '',
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
      { color: 'g', position: 4 },
      { color: 'r', position: 10 },
    ];

    const newPlayerSet = movePlayerSetRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim at the very right of the board
      When call movePlayerSetRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', '', 'g',
      '', '', '', '', '', 'r',
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
      { color: 'g', position: 5 },
      { color: 'r', position: 11 },
    ];

    const newPlayerSet = movePlayerSetRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });
});
