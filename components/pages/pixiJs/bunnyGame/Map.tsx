import { Texture } from "@pixi/core";
import { Sprite } from "@inlet/react-pixi";

import { map, BLOCKSIZE } from "components/pages/pixiJs/bunnyGame/utils";

const Map = (textures: Texture[]) => {
  const mapArray: React.ReactElement[] = [];
  map.map((row, y) => {
    row.map((block, x) => {
      const texture = textures[block];
      if (!texture) return <></>;
      mapArray.push(
        <Sprite
          key={`x=${x} y=${y}`}
          texture={texture}
          {...{ x: x * BLOCKSIZE, y: y * BLOCKSIZE }}
        />
      );
    });
  });
  return mapArray;
};

export default Map;
