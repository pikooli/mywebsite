import { useCallback, useEffect, useState, useMemo } from "react";
import { KEY } from "../utils/utils";
import { spriteSheetMap } from "./Wonder.spriteSheetMap";
import { Position } from "../types";
import { Texture } from "@pixi/core";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
} from "components/pages/pixiJs/WonderGame/utils/utils";

export type UseWonderProps = {
  textures: Texture[];
};

const canMove = (nextPosition: Position) => {
  if (
    nextPosition.x === MAP_WIDTH - 1 ||
    nextPosition.y === MAP_HEIGHT + 1 ||
    nextPosition.x === -1 ||
    nextPosition.y <= 1
  )
    return false;
  else return true;
};

export function useWonder(props: UseWonderProps) {
  const { textures } = props;
  const [position, setPosition] = useState({ x: 1, y: 1 });

  const keydown = useCallback((e: KeyboardEvent) => {
    if (KEY[e.key]) {
      e.preventDefault();
      const key = e.key;
      const move = KEY[key];
      if (move) {
        setPosition((prev: Position) => {
          const nextX = prev.x + move.x;
          const nextY = prev.y + move.y;
          const nextPosition = { x: nextX, y: nextY };
          if (canMove(nextPosition)) return nextPosition;
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

  const cat_costum = useMemo(() => {
    return textures.find(
      (texture) =>
        texture.textureCacheIds[0] ===
        spriteSheetMap["cat kigurumi walk and idle"][
          "cat kigurumi walk and idle-0"
        ]
    );
  }, []);

  const wonder = useMemo(() => {
    return textures.find(
      (texture) =>
        texture.textureCacheIds[0] ===
        spriteSheetMap["walk and idle"]["walk and idle-0"]
    );
  }, []);

  return {
    position,
    cat_costum,
    wonder,
  };
}
