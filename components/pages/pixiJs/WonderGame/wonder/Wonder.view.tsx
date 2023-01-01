import { Sprite } from "@inlet/react-pixi";
import { Texture } from "@pixi/core";
import { BLOCK_SIZE } from "components/pages/pixiJs/WonderGame/utils/";
import { useContext } from "react";
import { GameContext } from "components/pages/pixiJs/WonderGame/context";

export type WonderViewProps = {
  position: Position;
  wonder?: Texture;
  cat_costum?: Texture;
};

export const WonderView = (props: WonderViewProps) => {
  const { position, wonder, cat_costum } = props;
  const value = useContext(GameContext);

  return (
    <>
      <Sprite
        texture={wonder}
        {...{ x: position.x * BLOCK_SIZE, y: position.y * BLOCK_SIZE }}
        anchor={[0, 0]}
      />
      <Sprite
        texture={cat_costum}
        {...{ x: position.x * BLOCK_SIZE, y: position.y * BLOCK_SIZE }}
        anchor={[0, 0]}
      />
    </>
  );
};
