import { useState, useMemo, useEffect } from 'react';
import { canWonderMove } from '../wonder/Wonder.utils';
import { mapConfiguration1 } from '../mapConfiguration';
import { useMoveKeydown, useActionKeydown } from '../../hooks';
import {
  KIGURUMI_SPRITE_SHEET_JSON,
  TILEMAP_SPRITE_SHEET_JSON,
} from '../utils';
import { contextdefaultValue, ContextValue } from '../context';
import { mappingSpeech } from '../actions';
import { Text } from '../../types';

export function useGame() {
  const [text, setText] = useState<Text>(contextdefaultValue.text);
  const mapConfiguration = mapConfiguration1;
  const spriteSheetPaths = [
    KIGURUMI_SPRITE_SHEET_JSON,
    TILEMAP_SPRITE_SHEET_JSON,
  ];

  const { position: wonderPosition, setPosition: setWonderPosition } =
    useMoveKeydown({
      mapConfiguration,
      canMove: canWonderMove,
      initPosition: contextdefaultValue.wonder.position,
    });

  const { action, setAction } = useActionKeydown();

  useEffect(() => {
    console.log(action);
    if (action === 'action') {
      setText(
        mappingSpeech({
          mapName: mapConfiguration.name,
          coordoner: wonderPosition,
        })
      );
      setAction('');
    }
  }, [action]);

  const contextValue: ContextValue = useMemo(
    () => ({
      wonder: {
        position: wonderPosition,
        setPosition: setWonderPosition,
        action,
        setAction,
        inventaire: { costume: false },
      },
      text,
    }),
    [wonderPosition, setWonderPosition, action, setAction, text]
  );

  return {
    wonderPosition,
    mapConfiguration,
    spriteSheetPaths,
    contextValue,
    text,
  };
}
