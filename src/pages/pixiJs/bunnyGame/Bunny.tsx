import { useCallback, useEffect } from 'react';
import { Sprite, useTick } from '@pixi/react';
import { Texture } from '@pixi/core';

import utils, { map, BLOCKSIZE } from 'src/pages/pixiJs/bunnyGame/utils';

const LIMITUP = 2;
const LIMITRIGHT = map[0].length - 2;

const KEY: Record<string, { x: number; y: number }> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

const Bunny = ({
  textures,
  posi,
  setPosi,
  checkCollision,
  arrowDown,
}: {
  textures: Texture[];
  posi: Position;
  setPosi: Function;
  checkCollision: Function;
  arrowDown: string;
}) => {
  const canMove = useCallback(
    ({ nextX, nextY }: { nextX: number; nextY: number }) => {
      if (
        !map[nextY] ||
        map[nextY][nextX] === undefined ||
        nextY <= LIMITUP ||
        nextX > LIMITRIGHT
      ) {
        return false;
      }
      return true;
    },
    []
  );

  const gravity = () => {
    setPosi((prev: Position) => {
      const block = map[prev.y][prev.x];
      if (block !== 1) {
        const nextX = prev.x;
        const nextY = prev.y + 1;
        if (canMove({ nextX, nextY })) return { x: nextX, y: nextY };
      }
      return prev;
    });
  };

  const canJump = useCallback((key: string, posi) => {
    if (key === 'ArrowUp') {
      if (map[posi.y][posi.x] !== 1) {
        return false;
      }
    }
    return true;
  }, []);

  const keydown = useCallback((e: KeyboardEvent) => {
    if (KEY[e.key]) {
      e.preventDefault();
      const key = e.key;
      const move = KEY[key];
      if (move) {
        setPosi((prev: Position) => {
          const nextX = prev.x + move.x;
          const nextY = prev.y + move.y;
          if (canMove({ nextX, nextY }) && canJump(key, prev))
            return { x: nextX, y: nextY };
          return prev;
        });
      }
    }
  }, []);

  useTick(() => checkCollision());

  useEffect(() => {
    if (arrowDown) {
      const keyDownInterval = setInterval(() => {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        keydown({
          key: arrowDown,
          preventDefault: () => {},
        } as KeyboardEvent);
      }, 60);
      return () => {
        clearInterval(keyDownInterval);
      };
    }
  }, [arrowDown]);

  useEffect(() => {
    window.document.addEventListener('keydown', keydown);
    return () => {
      window.removeEventListener('keydown', keydown);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(gravity, 60);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Sprite
      texture={textures[utils.spriteSheetMapping.IaUrttj]}
      {...{ x: posi.x * BLOCKSIZE, y: posi.y * BLOCKSIZE }}
      anchor={[0, 1]}
    />
  );
};

export default Bunny;
