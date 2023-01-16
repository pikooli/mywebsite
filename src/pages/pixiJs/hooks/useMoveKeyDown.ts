import React, { useCallback, useEffect } from 'react';
import { MapConfiguration, Map } from '../types';
import { KEY_MOVE } from '../utils';

export interface UseMoveKeydown {
  reactToMove(move: Position): void;
}

export function useMoveKeydown(props: UseMoveKeydown) {
  const { reactToMove } = props;

  const keydown = useCallback(
    (e: KeyboardEvent) => {
      const move = KEY_MOVE[e.code];

      if (move) {
        e.preventDefault();
        reactToMove(move);
      }
    },
    [reactToMove]
  );

  useEffect(() => {
    window.document.addEventListener('keydown', keydown);
    return () => {
      window.removeEventListener('keydown', keydown);
    };
  }, [keydown]);
}
