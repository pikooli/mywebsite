import { useCallback, useContext, useEffect } from 'react';
import { PuyoPuyoContext } from 'puyopuyo/context';
import { NUM_ROWS } from 'puyopuyo/constants';
import {
  createNewPlayerSet,
  removeGroupFromBoard,
  findBiggestGroup,
  moveAllElementsDown,
  detectGameOver,
} from 'puyopuyo/utils/';

export function useGameResolve() {
  const {
    board,
    playerSet,
    setPlayerSet,
    setBoard,
    isResolveTriggered,
    setIsResolveTriggered,
    setIsGameOver,
    isGameOver,
    nextPlayerSet,
    setNextPlayerSet,
    setScore,
    setCombo,
    gameReset,
  } = useContext(PuyoPuyoContext);

  const resolveFunction = useCallback(
    (firstIteration?: boolean) => {
      const group = findBiggestGroup({ board, numbRow: NUM_ROWS });
      if (group.size) {
        const newBoard = removeGroupFromBoard({
          board,
          indexes: group.elementsIndex,
        });
        setBoard(moveAllElementsDown(newBoard));
        setCombo(prevCombo => {
          setScore(prev => prev + group.size * prevCombo);
          return prevCombo + 1;
        });
        resolveFunction();
      } else {
        firstIteration && setCombo(1);
      }
    },
    [board, setBoard, setScore, setCombo]
  );

  const checkGameOver = useCallback(() => {
    if (detectGameOver({ board })) {
      setIsGameOver(true);
      return true;
    }
  }, [board, setIsGameOver]);

  useEffect(() => {
    if (isResolveTriggered && !isGameOver && !gameReset) {
      resolveFunction(true);
      checkGameOver();
      setIsResolveTriggered(false);
      setPlayerSet(nextPlayerSet);
      setNextPlayerSet(createNewPlayerSet());
    }
  }, [
    playerSet,
    setPlayerSet,
    isResolveTriggered,
    resolveFunction,
    setIsResolveTriggered,
    checkGameOver,
    isGameOver,
    nextPlayerSet,
    setNextPlayerSet,
    board,
    gameReset,
  ]);
}
