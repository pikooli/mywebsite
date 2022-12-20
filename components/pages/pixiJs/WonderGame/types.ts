import { conversionMap } from "./sprites";

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
export type SpriteSheetPath = string;
export type SpriteSheetPaths = SpriteSheetPath[];
