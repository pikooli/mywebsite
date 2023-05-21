import { rotatePlayerSetToRight } from './rotatePlayerSetToRight';
import { Board, PlayerSet } from 'puyopuyo/types';

describe('rotatePlayerSetToRight', () => {
  it(`
      Given a set of slim aligner vertically at the very top
      When call rotatePlayerSetToRight
      Then it should change the position of slim 2`, () => {
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
      { color: 'g', position: 2 },
      { color: 'r', position: 3 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it(`
      Given a set of slim aligner vertically at the very top
        And a slim is below the slim 1
      When call rotatePlayerSetToRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', 'g', 'y', '', '', '',
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

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally at the very top
        And a slim is right the slim 2
      When call rotatePlayerSetToRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', 'g', '', '', '', '',
      '', 'r', 'y', '', '', '',
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

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner vertically at the very right
      When call rotatePlayerSetToRight
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

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally below the top
      When call rotatePlayerSetToRight
      Then it should change the position of slim 2`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', '', '',
      '', 'r', 'g', '', '', '',
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
      { color: 'g', position: 8 },
      { color: 'r', position: 7 },
    ];

    const expectedNewPlayerSet: PlayerSet = [
      { color: 'g', position: 8 },
      { color: 'r', position: 14 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it(`
      Given a set of slim aligner horizontally at the very bottom
      When call rotatePlayerSetToRight
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
      '', '', '', '', '', '',
      '', '', '', '', '', '',
      '', 'r', 'g', '', 'y', ''
    ]
    const playerSet: PlayerSet = [
      { color: 'g', position: 68 },
      { color: 'r', position: 67 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });

    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally below the top
        And a slim is below the slim 2
      When call rotatePlayerSetToRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', '', '',
      '', 'r', 'g', '', '', '',
      '', 'y', '', '', '', '',
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
      { color: 'g', position: 8 },
      { color: 'r', position: 7 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally below the top
        And a slim is below the slim 1
      When call rotatePlayerSetToRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', '', '',
      '', 'r', 'g', '', '', '',
      '', '', 'y', '', '', '',
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
      { color: 'g', position: 8 },
      { color: 'r', position: 7 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner vertically below the top
      When call rotatePlayerSetToRight
      Then it should change the position of slim 2`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'r', '', '', '',
      '', '', 'g', '', '', '',
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
      { color: 'g', position: 8 },
      { color: 'r', position: 2 },
    ];

    const expectedNewPlayerSet: PlayerSet = [
      { color: 'g', position: 8 },
      { color: 'r', position: 7 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it(`
      Given a set of slim aligner vertically at the left
      When call rotatePlayerSetToRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      'r', '', '', '', '', '',
      'g', '', '', '', '', '',
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
      { color: 'g', position: 6 },
      { color: 'r', position: 0 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });

    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner vertically
        And a slim at the left of the slim 2
      When call rotatePlayerSetToRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', 'y', 'r', '', '', '',
      '', '', 'g', '', '', '',
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
      { color: 'g', position: 8 },
      { color: 'r', position: 2 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner vertically
        And a slim at the left of the slim 1
      When call rotatePlayerSetToRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'r', '', '', '',
      '', 'y', 'g', '', '', '',
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
      { color: 'g', position: 8 },
      { color: 'r', position: 2 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally
      When call rotatePlayerSetToRight
      Then it should change the position of slim 2`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', '', '',
      '', '', 'g', 'r', '', '',
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
      { color: 'g', position: 8 },
      { color: 'r', position: 9 },
    ];

    const expectedNewPlayerSet: PlayerSet = [
      { color: 'g', position: 8 },
      { color: 'r', position: 2 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it(`
      Given a set of slim aligner horizontally
      When call rotatePlayerSetToRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'g', 'r', '', '',
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
      { color: 'r', position: 3 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally
        And a slim at the top of the slim 2
      When call rotatePlayerSetToRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', 'y', '', '',
      '', '', 'g', 'r', '', '',
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
      { color: 'g', position: 8 },
      { color: 'r', position: 9 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally
        And a slim at the top of the slim 1
      When call rotatePlayerSetToRight
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'y', '', '', '',
      '', '', 'g', 'r', '', '',
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
      { color: 'g', position: 8 },
      { color: 'r', position: 9 },
    ];

    const newPlayerSet = rotatePlayerSetToRight({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });
});
