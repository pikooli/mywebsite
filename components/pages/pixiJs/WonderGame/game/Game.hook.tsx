import { useState, useMemo, useEffect } from 'react';
import { canWonderMove } from '../wonder/Wonder.utils';
import { mapConfiguration1 } from '../mapConfiguration';
import { useKeydown } from '../../hooks';
import {
  KIGURUMI_SPRITE_SHEET_JSON,
  TILEMAP_SPRITE_SHEET_JSON,
} from '../utils';
import { defaultTextArea } from '../utils';
import { defaultValue } from '../context';
import { mappingSpeech } from '../actions';

export function useGame() {
  const [textArea, setTextArea] = useState(defaultTextArea);
  const mapConfiguration = mapConfiguration1;
  const spriteSheetPaths = [
    KIGURUMI_SPRITE_SHEET_JSON,
    TILEMAP_SPRITE_SHEET_JSON,
  ];

  const {
    position: wonderPosition,
    setPosition: setWonderPosition,
    action,
    setAction,
  } = useKeydown({
    mapConfiguration,
    canMove: canWonderMove,
    initPosition: defaultValue.wonderPosition,
  });

  useEffect(() => {
    if (action === 'action') {
      setTextArea(
        mappingSpeech({
          mapName: mapConfiguration.name,
          coordoner: wonderPosition,
        })
      );
      setAction('');
    }
  }, [action]);

  const contextValue = useMemo(
    () => ({
      wonderPosition,
      setWonderPosition,
      action,
      setAction,
    }),
    [wonderPosition, setWonderPosition, action, setAction]
  );

  return {
    wonderPosition,
    mapConfiguration,
    spriteSheetPaths,
    contextValue,
    textArea,
  };
}
