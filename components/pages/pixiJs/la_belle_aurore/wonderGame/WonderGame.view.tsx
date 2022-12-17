import React, { useCallback } from "react";
import { Stage } from "@inlet/react-pixi";
import { Texture } from "@pixi/core";
import Textures from "components/pixijs/Texture";
import {
  BLOCK_SIZE,
  MAP_HEIGHT,
  MAP_WIDTH,
} from "components/pages/pixiJs/la_belle_aurore/utils/utils";
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

const renderStage = (textures: Texture[][]) => {
  return (
    <>
      <Stage1 textures={textures[1]} />
      <Wonder textures={textures[0]} />
    </>
  );
};

export const WonderGameView = () => {
  return (
    <div className="card">
      <Stage
        width={MAP_WIDTH * BLOCK_SIZE}
        height={MAP_HEIGHT * BLOCK_SIZE}
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
