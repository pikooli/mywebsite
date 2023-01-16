import { createContext } from 'react';
import { contextdefaultValue } from './default';
import { ContextValue } from './Context.types';

export const GameContext = createContext<ContextValue>(contextdefaultValue);
