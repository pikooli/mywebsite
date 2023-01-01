import { createContext } from "react";
import { ContextValue } from "./index";

export const defaultValue: ContextValue = {};

export const GameContext = createContext<ContextValue>(defaultValue);
