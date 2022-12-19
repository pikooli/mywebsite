import { Stage } from "@inlet/react-pixi";
import { Texture } from "@pixi/core";
import Textures from "components/pixijs/Texture";
import {
  BLOCK_SIZE,
  MAP_HEIGHT,
  MAP_WIDTH,
} from "components/pages/pixiJs/WonderGame/utils";
import { Wonder } from "components/pages/pixiJs/WonderGame/wonder";
import { GameStage } from "../gameStage";
import { Map, SpriteSheetPaths } from "../types";
import { useCallback } from "react";

export interface GameViewProps {
  wonderPosition: Position;
  map: Map;
  spriteSheetPaths: SpriteSheetPaths;
}

export const GameView = (props: GameViewProps) => {
  const { wonderPosition, map, spriteSheetPaths } = props;

  const renderStage = useCallback(
    (textures: Texture[][]) => {
      return (
        <>
          <GameStage textures={textures[1]} map={map} />
          <Wonder textures={textures[0]} position={wonderPosition} />
        </>
      );
    },
    [map, wonderPosition]
  );
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
