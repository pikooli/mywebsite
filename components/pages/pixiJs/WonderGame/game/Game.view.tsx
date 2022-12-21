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
import { useCallback, useMemo } from "react";

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
          <GameStage textures={textures[1]} map={map.mapping} />
          <Wonder textures={textures[0]} position={wonderPosition} />
        </>
      );
    },
    [map, wonderPosition]
  );

  const style = useMemo(
    () => ({
      backgroundColor: map.backgroundColor,
    }),
    []
  );

  return (
    <div className="card">
      <Stage
        width={MAP_WIDTH * BLOCK_SIZE}
        height={MAP_HEIGHT * BLOCK_SIZE}
        renderOnComponentChange={true}
        style={style}
        options={{ backgroundAlpha: 0, resolution: 1 }}
      >
        <Textures spriteSheetPaths={spriteSheetPaths} asTextureChain={true}>
          {renderStage}
        </Textures>
      </Stage>
    </div>
  );
};
