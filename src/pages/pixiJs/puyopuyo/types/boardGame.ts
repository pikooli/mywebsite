export type BoardGame = JSX.Element[][];
export type SlimColor = '' | 'r' | 'b' | 'g' | 'y';
export type Board = SlimColor[];
export type ArrowKey = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';
export type ActionKey = 'KeyQ' | 'KeyW';
export interface PlayerSlim {
  color: SlimColor;
  position: number;
}
export type PlayerSet = PlayerSlim[];

export interface Position {
  x: number;
  y: number;
}
