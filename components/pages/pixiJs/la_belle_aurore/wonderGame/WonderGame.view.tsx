import React from "react";
import { Stage } from "@inlet/react-pixi";
import { Texture } from "@pixi/core";
import Textures from "components/pixijs/Texture";
import { BLOCKSIZE } from "components/pages/pixiJs/la_belle_aurore/utils/utils";
import { Wonder } from "components/pages/pixiJs/la_belle_aurore/wonder";
import { SPRITE_SHEET_JSON } from "../utils/utils";
import { Stage1 } from "../stages";

export type WonderGameViewProps = {};

export const WonderGameView = (props: WonderGameViewProps) => {
  return (
    <div className="card">
      <Stage
        width={10 * BLOCKSIZE}
        height={10 * BLOCKSIZE}
        renderOnComponentChange={true}
        className="mx-auto lg:mx-0 border-2	 border-orange-200"
        options={{ backgroundAlpha: 0 }}
      >
        <Textures spritesheet={SPRITE_SHEET_JSON} textureChain={true}>
          {(textures: Texture[]) => {
            return (
              <>
                <Wonder textures={textures} />
                <Stage1 textures={textures} />
              </>
            );
          }}
        </Textures>
      </Stage>
    </div>
  );
};
