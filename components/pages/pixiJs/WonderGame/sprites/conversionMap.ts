import { spriteSheetMap } from "./spriteSheetMap";
import { TitleNatureMap } from "../types";

export const conversionMap = {
  133: spriteSheetMap["inside"]["inside-23"],
  144: spriteSheetMap["inside"]["inside-34"],
  226: spriteSheetMap["spring tilemap"]["spring tilemap-65"],
};

export const tileNatureMap: TitleNatureMap = {
  133: {
    canStepOn: true,
  },
  144: { canStepOn: false },
  226: { canStepOn: false },
};
