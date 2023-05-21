import { useCallback, useEffect, useContext } from 'react';
import { KEY_MOVE } from 'puyopuyo/constants';
import { ArrowKey } from 'puyopuyo/types';
import {
  moveAllElementsDown,
  movePlayerSetLeft,
  movePlayerSetRight,
  setPlayerSlimInBoard,
} from 'puyopuyo/utils/';
import { PuyoPuyoContext } from 'puyopuyo/context';

export function useMoveKeydown() {
  const {
    board,
    setBoard,
    setPlayerSet,
    playerSet,
    setIsResolveTriggered,
    isGameOver,
  } = useContext(PuyoPuyoContext);

  const handleArrowDown = useCallback(() => {
    const newBoard = setPlayerSlimInBoard({
      board: board,
      playerSet,
    });
    setBoard(moveAllElementsDown(newBoard));
    setIsResolveTriggered(true);
  }, [board, playerSet, setBoard, setIsResolveTriggered]);

  const handleArrowRight = useCallback(() => {
    setPlayerSet(prev => {
      const newPlayerSet = movePlayerSetRight({
        board,
        playerSet: prev,
      });
      return newPlayerSet || prev;
    });
  }, [board, setPlayerSet]);

  const handleArrowLeft = useCallback(() => {
    setPlayerSet(prev => {
      const newPlayerSet = movePlayerSetLeft({
        board,
        playerSet: prev,
      });
      return newPlayerSet || prev;
    });
  }, [board, setPlayerSet]);

  const keydown = useCallback(
    (e: KeyboardEvent) => {
      const move = KEY_MOVE[e.code as ArrowKey];
      if (move && !isGameOver) {
        e.preventDefault();
        switch (move) {
          case KEY_MOVE['ArrowDown']:
            handleArrowDown();
            break;
          case KEY_MOVE['ArrowRight']:
            handleArrowRight();
            break;
          case KEY_MOVE['ArrowLeft']:
            handleArrowLeft();
            break;
        }
      }
    },
    [handleArrowDown, handleArrowLeft, handleArrowRight, isGameOver]
  );

  useEffect(() => {
    window.document.addEventListener('keydown', keydown);
    return function () {
      window.document.removeEventListener('keydown', keydown);
    };
  }, [keydown]);
}
