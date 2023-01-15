import { spriteSheetMap } from "./spriteSheetMap";
import { TitleNatureMap } from "../../types";

// 406 is normal inside floor

export const conversionMap: TitleNatureMap = {
  139: {
    sprite: spriteSheetMap["spring tilemap"]["spring tilemap-65"],
    canStepOn: true,
  },
  164: {
    sprite: spriteSheetMap["autumn tilemap"]["autumn tilemap-90"],
    canStepOn: true,
  },
  165: {
    sprite: spriteSheetMap["autumn tilemap"]["autumn tilemap-91"],
    canStepOn: true,
  },
  166: {
    sprite: spriteSheetMap["autumn tilemap"]["autumn tilemap-92"],
    canStepOn: true,
  },
  263: { sprite: spriteSheetMap["inside"]["inside-23"], canStepOn: true },
  268: { sprite: spriteSheetMap["inside"]["inside-23"], canStepOn: true },
  273: { sprite: spriteSheetMap["inside"]["inside-28"], canStepOn: true },
  279: { sprite: spriteSheetMap["inside"]["inside-34"], canStepOn: true },
  296: { sprite: spriteSheetMap["objects"]["objects-0"], canStepOn: false },
  398: {
    sprite: spriteSheetMap["spring tilemap"]["spring tilemap-83"],
    canStepOn: true,
  },
  406: {
    sprite: spriteSheetMap["spring tilemap"]["spring tilemap-91"],
    canStepOn: true,
  },
  414: {
    sprite: spriteSheetMap["spring tilemap"]["spring tilemap-99"],
    canStepOn: true,
  },
  470: {
    sprite:
      spriteSheetMap["summer and spring items"]["summer and spring items-46"],
    canStepOn: true,
  },
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
    canStepOn: true,
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
  725: {
    sprite: spriteSheetMap["winter items"]["winter items-42"],
    canStepOn: false,
  },
  726: {
    sprite: spriteSheetMap["winter items"]["winter items-43"],
    canStepOn: false,
  },
  731: {
    sprite: spriteSheetMap["winter items"]["winter items-48"],
    canStepOn: true,
  },
  734: {
    sprite: spriteSheetMap["winter items"]["winter items-51"],
    canStepOn: true,
  },
  740: {
    sprite: spriteSheetMap["winter items"]["winter items-57"],
    canStepOn: true,
  },
  742: {
    sprite: spriteSheetMap["winter items"]["winter items-59"],
    canStepOn: false,
  },
  802: {
    sprite: spriteSheetMap["winter outside"]["winter outside-26"],
    canStepOn: true,
  },
  819: {
    sprite: spriteSheetMap["winter outside"]["winter outside-43"],
    canStepOn: true,
  },
  820: {
    sprite: spriteSheetMap["winter outside"]["winter outside-44"],
    canStepOn: true,
  },
  827: {
    sprite: spriteSheetMap["winter outside"]["winter outside-51"],
    canStepOn: false,
  },
  828: {
    sprite: spriteSheetMap["winter outside"]["winter outside-52"],
    canStepOn: false,
  },
  837: {
    sprite: spriteSheetMap["winter outside"]["winter outside-64"],
    canStepOn: false,
  },
  844: {
    sprite: spriteSheetMap["winter outside"]["winter outside-68"],
    canStepOn: true,
  },
  845: {
    sprite: spriteSheetMap["winter outside"]["winter outside-69"],
    canStepOn: false,
  },
  846: {
    sprite: spriteSheetMap["winter outside"]["winter outside-70"],
    canStepOn: true,
  },
  854: {
    sprite: spriteSheetMap["winter outside"]["winter outside-78"],
    canStepOn: true,
  },
};
