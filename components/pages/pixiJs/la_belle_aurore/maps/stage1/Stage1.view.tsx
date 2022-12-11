import { Sprite } from "@inlet/react-pixi";
import { Texture } from "@pixi/core";
import { BLOCKSIZE } from "components/pages/pixiJs/la_belle_aurore/utils/utils";
import { Position } from "../../types";

export type Stage1ViewProps = {
  summerTitle0?: Texture;
  summerTitle1?: Texture;
};

export const Stage1View = (props: Stage1ViewProps) => {
  const { summerTitle0, summerTitle1 } = props;
  return (
    <>
      <Sprite
        texture={summerTitle0}
        {...{ x: 1 * BLOCKSIZE, y: 1 * BLOCKSIZE }}
        anchor={[0, 1]}
      />
      <Sprite
        texture={summerTitle1}
        {...{ x: 2 * BLOCKSIZE, y: 2 * BLOCKSIZE }}
        anchor={[0, 1]}
      />
    </>
  );
};
