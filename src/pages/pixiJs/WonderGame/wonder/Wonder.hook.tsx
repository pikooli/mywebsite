import { useMemo, useContext, useCallback } from 'react';
import { wonderSpriteSheetMap } from '../sprites';
import { Texture } from '@pixi/core';
import { useActionKeydown } from '../../hooks';
import { GameContext } from 'src/pages/pixiJs/WonderGame/context';
import { useMove, useGrap } from '../actions';

export interface UseWonderProps {
  textures: Texture[];
}

export function useWonder(props: UseWonderProps) {
  const { textures } = props;
  const contextValue = useContext(GameContext);
  const {
    wonder: { setParameters },
  } = contextValue;

  useMove();
  useGrap();
  const catCostum = useMemo(() => {
    return textures.find(
      texture =>
        texture.textureCacheIds[0] ===
        wonderSpriteSheetMap['cat kigurumi walk and idle'][
          'cat kigurumi walk and idle-0'
        ]
    );
  }, []);

  const wonder = useMemo(() => {
    return textures.find(
      texture =>
        texture.textureCacheIds[0] ===
        wonderSpriteSheetMap['walk and idle']['walk and idle-0']
    );
  }, []);

  const setAction = useCallback(
    (action: string) => {
      setParameters(prev => {
        return { ...prev, action };
      });
    },
    [setParameters]
  );

  useActionKeydown({ setAction });

  return {
    catCostum,
    wonder,
  };
}
