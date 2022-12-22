import { useMemo } from "react";
import { Texture } from "@pixi/core";
import { Stage } from "@inlet/react-pixi";
import Textures from "components/pixijs/Texture";
import {
  BLOCK_SIZE,
  MAP_HEIGHT,
  MAP_WIDTH,
} from "components/pages/pixiJs/WonderGame/utils";
import {
  MapConfiguration,
  SpriteSheetPaths,
} from "components/pages/pixiJs/types";

export interface GameViewProps {
  wonderPosition: Position;
  mapConfiguration: MapConfiguration;
  spriteSheetPaths: SpriteSheetPaths;
  renderStage(textures: Texture[][]): JSX.Element;
}

export const GameView = (props: GameViewProps) => {
  const { mapConfiguration, spriteSheetPaths, renderStage } = props;

  const style = useMemo(
    () => ({
      backgroundColor: mapConfiguration.backgroundColor,
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
