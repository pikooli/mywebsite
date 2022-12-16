import React, { useCallback } from "react";
import { Stage } from "@inlet/react-pixi";
import { Texture } from "@pixi/core";
import Textures from "components/pixijs/Texture";
import { BLOCKSIZE } from "components/pages/pixiJs/la_belle_aurore/utils/utils";
import { Wonder } from "components/pages/pixiJs/la_belle_aurore/wonder";
import {
  KIGURUMI_SPRITE_SHEET_JSON,
  TILEMAP_SPRITE_SHEET_JSON,
} from "../utils/utils";
import { Stage1 } from "../stages";

const spriteSheetPaths = [
  KIGURUMI_SPRITE_SHEET_JSON,
  TILEMAP_SPRITE_SHEET_JSON,
];

export const WonderGameView = () => {
  const renderStage = useCallback((textures: Texture[][]) => {
    return (
      <>
        <Wonder textures={textures[0]} />
        <Stage1 textures={textures[1]} />
      </>
    );
  }, []);

  return (
    <div className="card">
      <Stage
        width={10 * BLOCKSIZE}
        height={10 * BLOCKSIZE}
        renderOnComponentChange={true}
        className="mx-auto lg:mx-0 border-2	 border-orange-200"
        options={{ backgroundAlpha: 0 }}
      >
        <Textures spriteSheetPaths={spriteSheetPaths} asTextureChain={true}>
          {renderStage}
        </Textures>
      </Stage>
    </div>
  );
};
