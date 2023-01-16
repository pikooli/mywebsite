import { useMemo, useContext, useCallback } from 'react';
import { wonderSpriteSheetMap } from '../sprites';
import { Texture } from '@pixi/core';
import { useActionKeydown } from '../../hooks';
import { GameContext } from 'src/pages/pixiJs/WonderGame/context';
import { useMove } from '../actions';

export type UseWonderProps = {
  textures: Texture[];
};

export function useWonder(props: UseWonderProps) {
  const { textures } = props;
  const contextValue = useContext(GameContext);
  const {
    wonder: { setParameters },
    map,
  } = contextValue;

  useMove();
  const cat_costum = useMemo(() => {
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
        return { ...prev, action: action };
      });
    },
    [setParameters]
  );

  useActionKeydown({ setAction });

  return {
    cat_costum,
    wonder,
  };
}
