import { createContext } from 'react';
import { ContextValue } from 'puyopuyo/types';
import {
  DEFAULT_BOARD,
  DEFAULT_PLAYER_SET,
  DEFAULT_TICK_NUMBER,
  DEFAULT_LVL,
  DEFAULT_COMBO,
} from 'puyopuyo/constants';

export const PuyoPuyoContext = createContext<ContextValue>({
  board: DEFAULT_BOARD,
  playerSet: DEFAULT_PLAYER_SET,
  setBoard: () => {},
  setPlayerSet: () => {},
  isResolveTriggered: false,
  setIsResolveTriggered: () => {},
  isGameOver: false,
  setIsGameOver: () => {},
  nextPlayerSet: DEFAULT_PLAYER_SET,
  setNextPlayerSet: () => {},
  score: 0,
  setScore: () => {},
  combo: DEFAULT_COMBO,
  setCombo: () => {},
  tickNumber: DEFAULT_TICK_NUMBER,
  setTickNumber: () => {},
  lvl: DEFAULT_LVL,
  setLvl: () => {},
  gameReset: false,
  setGameReset: () => {},
  time: 0,
  setTime: () => {},
});
