import { useCallback, useEffect, useState } from "react";
import { KEY } from "../utils";
import { canWonderMove } from "../services/wonder/actions";
import { map1 } from "../maps";
import {
  KIGURUMI_SPRITE_SHEET_JSON,
  TILEMAP_SPRITE_SHEET_JSON,
} from "../utils";

export function useGame() {
  const [wonderPosition, setWonderPosition] = useState({ x: 1, y: 1 });
  const map = map1;
  const spriteSheetPaths = [
    KIGURUMI_SPRITE_SHEET_JSON,
    TILEMAP_SPRITE_SHEET_JSON,
  ];
  const keydown = useCallback((e: KeyboardEvent) => {
    if (KEY[e.key]) {
      e.preventDefault();
      const key = e.key;
      const move = KEY[key];
      if (move) {
        setWonderPosition((prev: Position) => {
          const nextX = prev.x + move.x;
          const nextY = prev.y + move.y;
          const nextPosition = { x: nextX, y: nextY };
          if (canWonderMove(nextPosition, map)) return nextPosition;
          else return prev;
        });
      }
    }
  }, []);

  useEffect(() => {
    window.document.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, []);

  return {
    wonderPosition,
    map,
    spriteSheetPaths,
  };
}
