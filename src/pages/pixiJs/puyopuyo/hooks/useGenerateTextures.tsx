import { useCallback, useContext } from 'react';
import { conversionMap } from 'puyopuyo/utils';
import { Sprite } from '@pixi/react';
import { GRID_SIZE, NUM_ROWS } from 'puyopuyo/constants';
import { PuyoPuyoContext } from 'puyopuyo/context';

export function useGenerateTextures() {
  const { board, playerSet } = useContext(PuyoPuyoContext);

  const boardTextures = useCallback(() => {
    const map = [];

    for (let i = 0; i < board.length; i++) {
      const image = conversionMap[board[i]];
      if (!image) {
        continue;
      }
      const x = Math.floor(i % NUM_ROWS);
      const y = Math.floor(i / NUM_ROWS);

      map.push(
        <Sprite
          key={`slim-${x}-${y}`}
          image={image}
          {...{ x: x * GRID_SIZE, y: y * GRID_SIZE }}
          anchor={[0, 0]}
        />
      );
    }

    return map;
  }, [board]);

  const playerSlimsTextures = useCallback(() => {
    const slimTextures = [];

    for (let i = 0; i < playerSet.length; i++) {
      const playerSlim = playerSet[i];
      const image = conversionMap[playerSlim.color];

      if (!image) {
        continue;
      }

      const x = Math.floor(playerSlim.position % NUM_ROWS);
      const y = Math.floor(playerSlim.position / NUM_ROWS);

      slimTextures.push(
        <Sprite
          key={`slim-${x}-${y}`}
          image={image}
          {...{ x: x * GRID_SIZE, y: y * GRID_SIZE }}
          anchor={[0, 0]}
        />
      );
    }

    return slimTextures;
  }, [playerSet]);

  return {
    boardTextures,
    playerSlimsTextures,
  };
}
