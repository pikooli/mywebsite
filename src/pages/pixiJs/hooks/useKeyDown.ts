import { useCallback, useEffect, useState } from 'react';
import { MapConfiguration, Map } from '../types';
import { KEY_MOVE, KEY_UTILS } from '../utils';

export interface UseKeyDown {
  mapConfiguration: MapConfiguration;
  canMove(nextPosition: Position, map: Map): boolean;
  initPosition?: Position;
}

const DEFAULT_POSITION = { x: 0, y: 0 };

export function useKeydown(props: UseKeyDown) {
  const { mapConfiguration, canMove, initPosition } = props;
  const [position, setPosition] = useState(initPosition ?? DEFAULT_POSITION);
  const [action, setAction] = useState('');

  const keydown = useCallback((e: KeyboardEvent) => {
    const move = KEY_MOVE[e.code];
    const key_action = KEY_UTILS[e.code];

    if (move) {
      e.preventDefault();
      return setPosition((prev: Position) => {
        const nextX = prev.x + move.x;
        const nextY = prev.y + move.y;
        const nextPosition = { x: nextX, y: nextY };
        return canMove(nextPosition, mapConfiguration.map)
          ? nextPosition
          : prev;
      });
    }
    if (key_action) {
      return setAction(prev => key_action);
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
    action,
    setAction,
  };
}
