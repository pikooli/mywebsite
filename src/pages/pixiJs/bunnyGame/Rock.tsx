import { Sprite } from '@pixi/react';
import { Texture } from '@pixi/core';

import { BLOCKSIZE ,spriteSheetMapping} from 'src/pages/pixiJs/bunnyGame/utils';

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
      texture={textures[spriteSheetMapping.rock]}
      {...{ x: posi.x * BLOCKSIZE, y: posi.y * BLOCKSIZE }}
      anchor={[0, 1]}
    />
  );
};

export default Rock;
