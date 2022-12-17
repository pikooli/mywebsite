import { spriteSheetMap } from "./stages.spriteSheetMap";

export const conversionMap = (tileNumber: number) => {
  switch (tileNumber) {
    case 133:
      return spriteSheetMap["inside"]["inside-23"];
    case 144:
      return spriteSheetMap["inside"]["inside-34"];
    case 226:
      return spriteSheetMap["spring tilemap"]["spring tilemap-65"];
    default:
      return null;
  }
};
