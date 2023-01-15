import { createContext } from 'react';
import { ContextValue } from './index';
import { defaultAction, defaultWonderPosition } from '../utils';

export const defaultValue: ContextValue = {
  wonderPosition: defaultWonderPosition,
  action: defaultAction,
};

export const GameContext = createContext<ContextValue>(defaultValue);
