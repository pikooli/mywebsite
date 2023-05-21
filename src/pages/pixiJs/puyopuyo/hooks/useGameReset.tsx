import { useContext, useEffect } from 'react';
import {
  DEFAULT_TICK_NUMBER,
  DEFAULT_COMBO,
  DEFAULT_LVL,
} from 'puyopuyo/constants';
import { PuyoPuyoContext } from 'puyopuyo/context';
import { createNewPlayerSet, generateNewBoard } from 'puyopuyo/utils';

export function useGameReset() {
  const {
    gameReset,
    setGameReset,
    setBoard,
    setPlayerSet,
    setCombo,
    setIsGameOver,
    setIsResolveTriggered,
    setLvl,
    setNextPlayerSet,
    setScore,
    setTickNumber,
    setTime,
    board,
  } = useContext(PuyoPuyoContext);

  useEffect(() => {
    if (gameReset) {
      setGameReset(false);
      setBoard(generateNewBoard());
      setTime(0);
      setPlayerSet(createNewPlayerSet());
      setCombo(DEFAULT_COMBO);
      setIsGameOver(false);
      setIsResolveTriggered(false);
      setLvl(DEFAULT_LVL);
      setNextPlayerSet(createNewPlayerSet());
      setScore(0);
      setTickNumber(DEFAULT_TICK_NUMBER);
    }
  }, [
    gameReset,
    setBoard,
    setGameReset,
    setPlayerSet,
    setCombo,
    setIsGameOver,
    setIsResolveTriggered,
    setLvl,
    setNextPlayerSet,
    setScore,
    setTickNumber,
    setTime,
    board,
  ]);
}
