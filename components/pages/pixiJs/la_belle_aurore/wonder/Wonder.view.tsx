import { Sprite } from "@inlet/react-pixi";
import { Texture } from "@pixi/core";
import { BLOCKSIZE } from "components/pages/pixiJs/la_belle_aurore/utils/utils";
import { Position } from "../types";

export type WonderViewProps = {
  position: Position;
  wonder?: Texture;
  cat_costum?: Texture;
};

export const WonderView = (props: WonderViewProps) => {
  const { position, wonder, cat_costum } = props;
  return (
    <>
      <Sprite
        texture={wonder}
        {...{ x: position.x * BLOCKSIZE, y: position.y * BLOCKSIZE }}
        anchor={[0, 1]}
      />
      <Sprite
        texture={cat_costum}
        {...{ x: position.x * BLOCKSIZE, y: position.y * BLOCKSIZE }}
        anchor={[0, 1]}
      />
    </>
  );
};
