import { useCallback, useContext, useEffect } from 'react';
import { PuyoPuyoContext } from 'puyopuyo/context';

const INCREASE_LVL_TIME = 60000;
const INCREASE_LVL_AMOUNT = 1;
const DESCREASE_TICK_NUMBER_AMOUNT = 5;

export function useGameLvl() {
  const { setTickNumber, isGameOver, setLvl, gameReset } =
    useContext(PuyoPuyoContext);

  const increaseLvl = useCallback(() => {
    if (!isGameOver && !gameReset) {
      setTickNumber(prev => prev - DESCREASE_TICK_NUMBER_AMOUNT);
      setLvl(prev => prev + INCREASE_LVL_AMOUNT);
    }
  }, [setTickNumber, isGameOver, setLvl, gameReset]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      increaseLvl();
    }, INCREASE_LVL_TIME);

    return () => {
      clearInterval(intervalId);
    };
  }, [increaseLvl]);
}
