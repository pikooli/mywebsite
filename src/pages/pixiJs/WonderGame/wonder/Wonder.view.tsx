import { Sprite } from '@inlet/react-pixi';
import { Texture } from '@pixi/core';
import { BLOCK_SIZE } from 'src/pages/pixiJs/WonderGame/utils';
import { useContext } from 'react';
import { GameContext } from 'src/pages/pixiJs/WonderGame/context';

export interface WonderViewProps {
  wonder?: Texture;
  cat_costum?: Texture;
}

export const WonderView = (props: WonderViewProps) => {
  const { wonder, cat_costum } = props;

  const contextValue = useContext(GameContext);
  const {
    wonder: {
      parameters: { position: wonderPosition },
      inventaire: { cat_costume },
    },
  } = contextValue;

  return (
    <>
      <Sprite
        texture={wonder}
        {...{
          x: wonderPosition.x * BLOCK_SIZE,
          y: wonderPosition.y * BLOCK_SIZE,
        }}
        anchor={[0, 0]}
      />
      {cat_costume ? (
        <Sprite
          texture={cat_costum}
          {...{
            x: wonderPosition.x * BLOCK_SIZE,
            y: wonderPosition.y * BLOCK_SIZE,
          }}
          anchor={[0, 0]}
        />
      ) : null}
    </>
  );
};
