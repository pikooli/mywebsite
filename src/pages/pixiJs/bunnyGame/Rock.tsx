import { Sprite } from '@inlet/react-pixi';
import { Texture } from '@pixi/core';

import utils, { map, BLOCKSIZE } from 'src/pages/pixiJs/bunnyGame/utils';

const Rock = ({
  textures,
  posi,
}: {
  textures: Texture[];
  posi: Position;
  setPosi: Function;
}) => {
  return (
    <Sprite
      interactive
      texture={textures[utils.spriteSheetMapping['rock']]}
      {...{ x: posi.x * BLOCKSIZE, y: posi.y * BLOCKSIZE }}
      anchor={[0, 1]}
    />
  );
};

export default Rock;
