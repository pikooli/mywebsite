import { useMemo, useState } from 'react';
import { Board, PlayerSet } from 'puyopuyo/types';
import {
  DEFAULT_BOARD,
  // DEFAULT_PLAYER_SET,
  DEFAULT_TICK_NUMBER,
  DEFAULT_COMBO,
  DEFAULT_LVL,
} from 'puyopuyo/constants';
import { createNewPlayerSet } from 'puyopuyo/utils';

export function useGameContext() {
  const [board, setBoard] = useState<Board>(DEFAULT_BOARD);
  // const [playerSet, setPlayerSet] = useState<PlayerSet>(DEFAULT_PLAYER_SET);
  const [playerSet, setPlayerSet] = useState<PlayerSet>(createNewPlayerSet());
  const [nextPlayerSet, setNextPlayerSet] = useState<PlayerSet>(
    createNewPlayerSet()
  );
  const [isResolveTriggered, setIsResolveTriggered] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(DEFAULT_COMBO);
  const [tickNumber, setTickNumber] = useState<number>(DEFAULT_TICK_NUMBER);
  const [lvl, setLvl] = useState<number>(DEFAULT_LVL);
  const [gameReset, setGameReset] = useState<boolean>(false);
  const [time, setTime] = useState(0);

  const contextValue = useMemo(
    () => ({
      board,
      setBoard,
      playerSet,
      setPlayerSet,
      isResolveTriggered,
      setIsResolveTriggered,
      isGameOver,
      setIsGameOver,
      nextPlayerSet,
      setNextPlayerSet,
      score,
      setScore,
      combo,
      setCombo,
      tickNumber,
      setTickNumber,
      lvl,
      setLvl,
      gameReset,
      setGameReset,
      time,
      setTime,
    }),
    [
      board,
      playerSet,
      setBoard,
      setPlayerSet,
      isResolveTriggered,
      setIsResolveTriggered,
      isGameOver,
      setIsGameOver,
      nextPlayerSet,
      setNextPlayerSet,
      score,
      setScore,
      combo,
      setCombo,
      tickNumber,
      setTickNumber,
      lvl,
      setLvl,
      gameReset,
      setGameReset,
      time,
      setTime,
    ]
  );

  return contextValue;
}
