import { useCallback, useEffect, useState } from "react";
import { MapConfiguration, Map } from "../types";
import { KEY } from "../utils";

export interface UseKeyDown {
  mapConfiguration: MapConfiguration;
  canMove(nextPosition: Position, map: Map): boolean;
  initPosition?: Position;
}

const DEFAULT_POSITION = { x: 0, y: 0 };

export function useKeydown(props: UseKeyDown) {
  const { mapConfiguration, canMove, initPosition } = props;
  const [position, setPosition] = useState(initPosition ?? DEFAULT_POSITION);

  const keydown = useCallback((e: KeyboardEvent) => {
    const move = KEY[e.key];
    if (move) {
      e.preventDefault();
      setPosition((prev: Position) => {
        const nextX = prev.x + move.x;
        const nextY = prev.y + move.y;
        const nextPosition = { x: nextX, y: nextY };
        if (canMove(nextPosition, mapConfiguration.map)) {
          return nextPosition;
        } else {
          return prev;
        }
      });
    }
  }, []);

  useEffect(() => {
    window.document.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, []);

  return {
    position,
    setPosition,
  };
}
