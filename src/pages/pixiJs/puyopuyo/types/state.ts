import { Dispatch, SetStateAction } from 'react';
import { Board, PlayerSet } from './boardGame';

export interface ContextValue {
  board: Board;
  setBoard: Dispatch<SetStateAction<Board>>;
  playerSet: PlayerSet;
  setPlayerSet: Dispatch<SetStateAction<PlayerSet>>;
  isResolveTriggered: boolean;
  setIsResolveTriggered: Dispatch<SetStateAction<boolean>>;
  isGameOver: boolean;
  setIsGameOver: Dispatch<SetStateAction<boolean>>;
  nextPlayerSet: PlayerSet;
  setNextPlayerSet: Dispatch<SetStateAction<PlayerSet>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  combo: number;
  setCombo: Dispatch<SetStateAction<number>>;
  tickNumber: number;
  setTickNumber: Dispatch<SetStateAction<number>>;
  lvl: number;
  setLvl: Dispatch<SetStateAction<number>>;
  gameReset: boolean;
  setGameReset: Dispatch<SetStateAction<boolean>>;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
}
