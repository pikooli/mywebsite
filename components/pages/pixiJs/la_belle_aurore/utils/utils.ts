export const BLOCKSIZE = 24;
export const KIGURUMI_SPRITE_SHEET = "/la_belle_aurore/kigurumi.png";
export const KIGURUMI_SPRITE_SHEET_JSON = "/la_belle_aurore/kigurumi.json";
export const TILEMAP_SPRITE_SHEET = "/la_belle_aurore/tilemap.png";
export const TILEMAP_SPRITE_SHEET_JSON = "/la_belle_aurore/tilemap.json";

export const KEY: { [key: string]: { x: number; y: number } } = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export const map = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]];
