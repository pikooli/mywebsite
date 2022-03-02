import { Sprite } from "@inlet/react-pixi";
import { Texture } from "@pixi/core";

import utils, { map, BLOCKSIZE } from "components/pages/pixiJs/bunnyGame/utils";
import { Posi } from "components/pages/pixiJs/bunnyGame/BunnyGame";

const LIMITUP = 2;
const LIMITRIGHT = map[0].length - 2;

const Rock = ({
  textures,
  posi,
  setPosi,
}: {
  textures: Texture[];
  posi: Posi;
  setPosi: Function;
}) => {
  return (
    <Sprite
      interactive
      texture={textures[utils.spriteSheetMapping["rock"]]}
      {...{ x: posi.x * BLOCKSIZE, y: posi.y * BLOCKSIZE }}
      anchor={[0, 1]}
    />
  );
};

export default Rock;
