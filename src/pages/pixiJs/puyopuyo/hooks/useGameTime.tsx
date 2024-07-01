import { useContext } from 'react';
import { PuyoPuyoContext } from 'puyopuyo/context';
import { useTick } from '@pixi/react';
import {
  movePlayerSetDown,
  detectPlayerSetEnd,
  setPlayerSlimInBoard,
  moveAllElementsDown,
} from 'puyopuyo/utils/';

export function useGameTime() {
  const {
    board,
    playerSet,
    setPlayerSet,
    setBoard,
    setIsResolveTriggered,
    isGameOver,
    tickNumber,
    time,
    setTime,
    gameReset,
  } = useContext(PuyoPuyoContext);

  useTick(() => {
    if (playerSet.length && !isGameOver && !gameReset) {
      if (time > tickNumber) {
        const newPlayerSet =
          movePlayerSetDown({
            board,
            playerSet,
          }) || playerSet;

        const shouldBePlaced = detectPlayerSetEnd({
          board,
          playerSet: newPlayerSet,
        });

        if (shouldBePlaced) {
          const newBoard = setPlayerSlimInBoard({
            board,
            playerSet: newPlayerSet,
          });

          setBoard(moveAllElementsDown(newBoard));

          setIsResolveTriggered(true);
        } else {
          setPlayerSet(newPlayerSet);
        }
        setTime(0);
      } else {
        setTime(time + 1);
      }
    }
  });
}
