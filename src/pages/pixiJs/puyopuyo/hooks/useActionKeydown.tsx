import { useCallback, useEffect, useContext } from 'react';
import { ActionKey } from 'puyopuyo/types';
import { rotatePlayerSetToLeft, rotatePlayerSetToRight } from 'puyopuyo/utils';
import { KEY_ACTION } from 'puyopuyo/constants';
import { PuyoPuyoContext } from 'puyopuyo/context';

export function useActionKeydown() {
  const { board, playerSet, setPlayerSet, isGameOver, gameReset } =
    useContext(PuyoPuyoContext);

  const handleKeyQ = useCallback(() => {
    setPlayerSet(
      rotatePlayerSetToLeft({
        board,
        playerSet,
      }) || playerSet
    );
  }, [board, playerSet, setPlayerSet]);

  const handleKeyW = useCallback(() => {
    setPlayerSet(
      rotatePlayerSetToRight({
        board,
        playerSet,
      }) || playerSet
    );
  }, [board, playerSet, setPlayerSet]);

  const keydown = useCallback(
    (e: KeyboardEvent) => {
      const key_action = KEY_ACTION[e.code as ActionKey];
      if (key_action && !isGameOver && !gameReset) {
        e.preventDefault();
        switch (key_action) {
          case KEY_ACTION['KeyQ']:
            handleKeyQ();
            break;
          case KEY_ACTION['KeyW']:
            handleKeyW();
            break;
        }
      }
    },
    [handleKeyQ, handleKeyW, isGameOver, gameReset]
  );

  useEffect(() => {
    window.document.addEventListener('keydown', keydown);
    return () => {
      window.document.removeEventListener('keydown', keydown);
    };
  }, [keydown]);
}
