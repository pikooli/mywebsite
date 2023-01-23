import { ArrowKey, ActionKey } from '../types';

export const KEY_MOVE: { [key in ArrowKey]: Position } = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export const KEY_ACTION: { [key in ActionKey]: string } = {
  Space: 'action',
};
