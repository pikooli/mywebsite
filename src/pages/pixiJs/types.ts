import { conversionMap } from './WonderGame/sprites';

export type ConversionMap = typeof conversionMap;
export type KeyofConversionMap = keyof ConversionMap;

export interface TitleNature {
  canStepOn: boolean;
  sprite: string;
}

export interface TitleNatureMap {
  [index: number]: TitleNature;
}

export type Map = number[];

export interface Speech {
  name: string;
  text: string;
  position: Position;
}

export interface Item {
  name: 'cat_costume';
  position: Position;
}

export type MapConfiguration = {
  name: string;
  backgroundColor: string;
  map: Map;
  speeches: Speech[];
  items: Item[];
};

export interface Text {
  name: string;
  text: string;
}

export type SpriteSheetPath = string;

export type SpriteSheetPaths = SpriteSheetPath[];

export interface WonderParameters {
  position: Position;
  action: string;
}

export interface Inventaire {
  cat_costume: boolean;
}

export type ArrowKey = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';

export type ActionKey = 'Space';

export type KeyboardKey = ArrowKey | ActionKey;
