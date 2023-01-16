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

export type MapConfiguration = {
  name: string;
  backgroundColor: string;
  map: Map;
};

export interface Text {
  name: string;
  text: string;
}

export type SpriteSheetPath = string;

export type SpriteSheetPaths = SpriteSheetPath[];
