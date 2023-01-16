export const KEY_MOVE: { [key: string]: { x: number; y: number } } = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export const KEY_ACTION: { [key: string]: string } = {
  Space: 'action',
};
