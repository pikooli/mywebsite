import { spriteSheetMap } from "./stages.spriteSheetMap";

export type ConversionMap = typeof conversionMap;
export type KeyofConversionMap = keyof ConversionMap;

export const conversionMap = {
  133: spriteSheetMap["inside"]["inside-23"],
  144: spriteSheetMap["inside"]["inside-34"],
  226: spriteSheetMap["spring tilemap"]["spring tilemap-65"],
};
