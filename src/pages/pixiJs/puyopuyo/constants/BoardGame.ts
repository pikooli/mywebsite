import { ArrowKey, ActionKey, SlimColor } from 'puyopuyo/types';
import { Board, PlayerSet } from 'puyopuyo/types';

export const NUM_ROWS = 6;
export const NUM_COLS = 12;
export const GRID_SIZE = 18;

export const MAP_HEIGHT = NUM_COLS * GRID_SIZE;
export const MAP_WIDTH = NUM_ROWS * GRID_SIZE;
export const STARTING_POSITION = [2, 8];

export const KEY_MOVE: { [key in ArrowKey]: ArrowKey } = {
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
};

export const KEY_ACTION: { [key in ActionKey]: string } = {
  KeyQ: 'KeyQ',
  KeyW: 'KeyW',
};

export const SLIM_COLORS: SlimColor[] = ['r', 'g', 'b', 'y'];
// prettier-ignore
export const DEFAULT_BOARD :Board= [
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

// // prettier-ignore
// export const DEFAULT_BOARD :Board= [
//   '', '', '', '', '', '',
//   '', '', '', '', '', '',
//   '', '', 'r', '', '', '',
//   '', '', 'r', '', '', '',
//   '', '', 'r', '', '', '',
//   '', '', 'y', '', '', '',
//   '', '', 'y', '', '', '',
//   '', '', 'y', '', '', '',
//   '', '', 'y', '', '', '',
//   '', '', 'b', '', '', '',
//   '', '', 'b', '', '', '',
//   '', '', 'b', 'b', 'y', 'y'
// ]

export const DEFAULT_TICK_NUMBER = 20;

export const DEFAULT_PLAYER_SET: PlayerSet = [
  { color: 'g', position: 2 },
  { color: 'r', position: 8 },
];

export const DEFAULT_COMBO = 1;
export const DEFAULT_LVL = 0;
