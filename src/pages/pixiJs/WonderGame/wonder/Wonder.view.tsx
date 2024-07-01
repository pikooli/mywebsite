import { Sprite } from '@pixi/react';
import { Texture } from '@pixi/core';
import { BLOCK_SIZE } from 'src/pages/pixiJs/WonderGame/utils';
import { useContext } from 'react';
import { GameContext } from 'src/pages/pixiJs/WonderGame/context';

export interface WonderViewProps {
  wonder?: Texture;
  catCostum?: Texture;
}

export const WonderView = (props: WonderViewProps) => {
  const { wonder, catCostum } = props;

  const contextValue = useContext(GameContext);
  const {
    wonder: {
      parameters: { position: wonderPosition },
      inventaire: { catCostum: catCostumInventory },
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
      {catCostumInventory ? (
        <Sprite
          texture={catCostum}
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
