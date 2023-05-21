import { rotatePlayerSetToLeft } from './rotatePlayerSetToLeft';
import { Board, PlayerSet } from 'puyopuyo/types';

describe('rotatePlayerSetToLeft', () => {
  it(`
      Given a set of slim
      When call rotatePlayerSetToLeft
      Then it should return a set with slim 2 that have rotate to the left`, () => {
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
      { color: 'r', position: 1 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it(`
      Given a set of slim with a slim at the left of the slim 1
      When call rotatePlayerSetToLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      'y', 'g', '', '', '', '',
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim with a slim at the left of the slim 2
      When call rotatePlayerSetToLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', 'g', '', '', '', '',
      'y', 'r', '', '', '', '',
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim at the very left
      When call rotatePlayerSetToLeft
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally at the very top
      When call rotatePlayerSetToLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
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
      '', '', '', '', '', '',
      '', '', '', '', 'y', ''
    ]
    const playerSet: PlayerSet = [
      { color: 'g', position: 2 },
      { color: 'r', position: 1 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });

    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally at below of the top
      When call rotatePlayerSetToLeft
      Then it should change the position of the slim 2`, () => {
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
      { color: 'r', position: 2 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it(`
      Given a set of slim aligner horizontally at below of the top
        And a slim is at the top of slim 1
      When call rotatePlayerSetToLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'y', '', '', '',
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally at below of the top
        And a slim is at the top of slim 2
      When call rotatePlayerSetToLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', 'y', '', '', '', '',
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner vertically at the very top
      When call rotatePlayerSetToLeft
      Then it should change the position of the slim 2`, () => {
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
      { color: 'r', position: 9 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it(`
      Given a set of slim aligner vertically at the very left
      When call rotatePlayerSetToLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', '', '', '', 'r',
      '', '', '', '', '', 'g',
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
      { color: 'g', position: 11 },
      { color: 'r', position: 5 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });

    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally
        And a slim is at the left of slim 2
      When call rotatePlayerSetToLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'r', 'y', '', '',
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally
        And a slim is at the left of slim 1
      When call rotatePlayerSetToLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'r', '', '', '',
      '', '', 'g', 'y', '', '',
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally at the very top
      When call rotatePlayerSetToLeft
      Then it should change the position of the slim 2`, () => {
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

    const expectedNewPlayerSet: PlayerSet = [
      { color: 'g', position: 2 },
      { color: 'r', position: 8 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet?.[0].position).toEqual(
      expectedNewPlayerSet[0].position
    );
    expect(newPlayerSet?.[1].position).toEqual(
      expectedNewPlayerSet[1].position
    );
  });

  it(`
      Given a set of slim aligner vertically at the very top
        And a slim is below slim 2
      When call rotatePlayerSetToLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'g', 'r', '', '',
      '', '', '', 'y', '', '',
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally at the very top
        And a slim is below slim 1
      When call rotatePlayerSetToLeft
      Then it should return null`, () => {
    // prettier-ignore
    const board :Board= [
      '', '', 'g', 'r', '', '',
      '', '', 'y', '', '', '',
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

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });

  it(`
      Given a set of slim aligner horizontally at the very bottom
      When call rotatePlayerSetToLeft
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
      '', '', 'g', 'r', 'y', ''
    ]
    const playerSet: PlayerSet = [
      { color: 'g', position: 68 },
      { color: 'r', position: 69 },
    ];

    const newPlayerSet = rotatePlayerSetToLeft({ board, playerSet });
    expect(newPlayerSet).toEqual(null);
  });
});
