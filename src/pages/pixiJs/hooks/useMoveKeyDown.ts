import { useCallback, useEffect } from 'react';
import { KEY_MOVE } from '../utils';
import { ArrowKey } from '../types';

export interface UseMoveKeydown {
  reactToMove: (move: Position) => void;
}

export function useMoveKeydown(props: UseMoveKeydown) {
  const { reactToMove } = props;

  const keydown = useCallback(
    (e: KeyboardEvent) => {
      const move = KEY_MOVE[e.code as ArrowKey];

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
