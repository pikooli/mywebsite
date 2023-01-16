import { useMemo, useEffect } from 'react';
import { map1 } from '../maps';
import {
  KIGURUMI_SPRITE_SHEET_JSON,
  TILEMAP_SPRITE_SHEET_JSON,
} from '../utils';
import { ContextValue } from '../context';
import { useGameState } from './Game.state';

export function useGame() {
  const { wonderParameters, setWonderParameters, setText, text } =
    useGameState();

  const mapConfiguration = map1;
  const spriteSheetPaths = [
    KIGURUMI_SPRITE_SHEET_JSON,
    TILEMAP_SPRITE_SHEET_JSON,
  ];

  useEffect(() => {
    if (wonderParameters.action === 'action') {
      const { speeches } = mapConfiguration;
      const speech = speeches.find(
        speech =>
          speech.position.x === wonderParameters.position.x &&
          speech.position.y === wonderParameters.position.y
      );
      if (speech) {
        setText(speech);
      } else {
        setWonderParameters(prev => ({ ...prev, action: '' }));
      }
    }
  }, [wonderParameters]);

  const contextValue: ContextValue = useMemo(
    () => ({
      wonder: {
        parameters: wonderParameters,
        setParameters: setWonderParameters,
        inventaire: { costume: false },
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
