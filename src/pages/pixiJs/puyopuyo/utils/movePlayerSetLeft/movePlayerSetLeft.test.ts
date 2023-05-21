import { movePlayerSetLeft } from './movePlayerSetLeft';
import { Board, PlayerSet } from 'puyopuyo/types';

describe('movePlayerSetLeft', () => {
  it(`
      Given a set of slim
      When call movePlayerSetLeft
      Then it should return a set with slim that have move to the left`, () => {
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
      { color: 'g', position: 1 },
      { color: 'r', position: 7 },
    ];

    const newPlayerSet = movePlayerSetLeft({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it(`
      Given a set of slim with a slim at the left of one of them
      When call movePlayerSetLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      'g', 'g', '', '', '', '',
      '', 'r', '', '', '', '',
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
      { color: 'g', position: 1 },
      { color: 'r', position: 7 },
    ];

    const newPlayerSet = movePlayerSetLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim positioned at the very left
      When call movePlayerSetLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      'g', '', '', '', '', '',
      'r', '', '', '', '', '',
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
      { color: 'g', position: 0 },
      { color: 'r', position: 6 },
    ];

    const newPlayerSet = movePlayerSetLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });
});
