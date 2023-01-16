import { useCallback, useEffect, useState } from 'react';
import { MapConfiguration, Map } from '../types';
import { KEY_MOVE } from '../utils';

export interface UseMoveKeydown {
  mapConfiguration: MapConfiguration;
  canMove(nextPosition: Position, map: Map): boolean;
  initPosition?: Position;
}

const DEFAULT_POSITION = { x: 0, y: 0 };

export function useMoveKeydown(props: UseMoveKeydown) {
  const { mapConfiguration, canMove, initPosition } = props;
  const [position, setPosition] = useState(initPosition ?? DEFAULT_POSITION);

  const keydown = useCallback((e: KeyboardEvent) => {
    const move = KEY_MOVE[e.code];

    if (move) {
      e.preventDefault();
      return setPosition((prev: Position) => {
        const nextX = prev.x + move.x;
        const nextY = prev.y + move.y;
        const nextPosition = { x: nextX, y: nextY };
        console.log('nextPosition', nextPosition);
        return canMove(nextPosition, mapConfiguration.map)
          ? nextPosition
          : prev;
      });
    }
  }, []);

  useEffect(() => {
    window.document.addEventListener('keydown', keydown);
    return () => {
      window.removeEventListener('keydown', keydown);
    };
  }, []);

  return {
    position,
    setPosition,
  };
}
