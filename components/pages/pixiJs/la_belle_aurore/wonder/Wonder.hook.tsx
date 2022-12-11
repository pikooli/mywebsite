import { useCallback, useEffect, useState, useMemo } from "react";
import { KEY } from "../utils/utils";
import { spriteSheet } from "../utils/spriteSheet";
import { Position } from "../types";
import { Texture } from "@pixi/core";

export type UseWonderProps = {
  textures: Texture[];
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
          return { x: nextX, y: nextY };
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
        spriteSheet["cat kigurumi walk and idle"][
          "cat kigurumi walk and idle-0"
        ]
    );
  }, []);

  const wonder = useMemo(() => {
    return textures.find(
      (texture) =>
        texture.textureCacheIds[0] ===
        spriteSheet["walk and idle"]["walk and idle-0"]
    );
  }, []);

  return {
    position,
    cat_costum,
    wonder,
  };
}
