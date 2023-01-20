import { useMemo } from 'react';
import { map1 } from '../maps';
import {
  KIGURUMI_SPRITE_SHEET_JSON,
  TILEMAP_SPRITE_SHEET_JSON,
} from '../utils';
import { ContextValue } from '../context';
import { useGameState } from './Game.state';

export function useGame() {
  const {
    wonderParameters,
    setWonderParameters,
    setText,
    text,
    inventaire,
    setInventaire,
  } = useGameState();

  const mapConfiguration = map1;
  const spriteSheetPaths = [
    KIGURUMI_SPRITE_SHEET_JSON,
    TILEMAP_SPRITE_SHEET_JSON,
  ];

  const contextValue: ContextValue = useMemo(
    () => ({
      wonder: {
        parameters: wonderParameters,
        setParameters: setWonderParameters,
        inventaire,
        setInventaire,
      },
      text,
      setText,
      map: mapConfiguration,
    }),
    [wonderParameters, setWonderParameters, text]
  );

  return {
    mapConfiguration,
    spriteSheetPaths,
    contextValue,
  };
}
