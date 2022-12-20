import { spriteSheetMap } from "./spriteSheetMap";
import { TitleNatureMap } from "../types";

// 406 is normal inside floor

export const conversionMap: TitleNatureMap = {
  139: {
    sprite: spriteSheetMap["spring tilemap"]["spring tilemap-65"],
    canStepOn: false,
  },
  165: {
    sprite: spriteSheetMap["autumn tilemap"]["autumn tilemap-91"],
    canStepOn: false,
  },
  296: { sprite: spriteSheetMap["objects"]["objects-0"], canStepOn: false },
  406: { sprite: spriteSheetMap["inside"]["inside-23"], canStepOn: true },
  414: { sprite: spriteSheetMap["inside"]["inside-34"], canStepOn: false },
  513: {
    sprite:
      spriteSheetMap["summer and spring items"]["summer and spring items-89"],
    canStepOn: false,
  },
  514: {
    sprite:
      spriteSheetMap["summer and spring items"]["summer and spring items-90"],
    canStepOn: false,
  },
  524: {
    sprite:
      spriteSheetMap["summer and spring items"]["summer and spring items-100"],
    canStepOn: false,
  },
  525: {
    sprite:
      spriteSheetMap["summer and spring items"]["summer and spring items-101"],
    canStepOn: false,
  },
  526: {
    sprite:
      spriteSheetMap["summer and spring items"]["summer and spring items-102"],
    canStepOn: false,
  },
  534: {
    sprite:
      spriteSheetMap["summer and spring items"]["summer and spring items-110"],
    canStepOn: false,
  },
  535: {
    sprite:
      spriteSheetMap["summer and spring items"]["summer and spring items-111"],
    canStepOn: false,
  },
};
