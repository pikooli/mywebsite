import { useMemo, CSSProperties } from "react";
import { Texture } from "@pixi/core";
import { Stage } from "@inlet/react-pixi";
import Textures from "components/pixijs/Texture";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
} from "components/pages/pixiJs/WonderGame/utils";
import {
  MapConfiguration,
  SpriteSheetPaths,
} from "components/pages/pixiJs/types";
import { contenairStyle } from "./Game.style";
import { TextArea } from "../TextArea";
export interface GameViewProps {
  wonderPosition: Position;
  mapConfiguration: MapConfiguration;
  spriteSheetPaths: SpriteSheetPaths;
  renderStage(textures: Texture[][]): JSX.Element;
}

export const GameView = (props: GameViewProps) => {
  const { mapConfiguration, spriteSheetPaths, renderStage } = props;

  const stageStyle = useMemo(
    () => ({
      backgroundColor: mapConfiguration.backgroundColor,
    }),
    []
  );

  return (
    <div style={contenairStyle}>
      <Stage
        width={MAP_WIDTH}
        height={MAP_HEIGHT}
        renderOnComponentChange={true}
        style={stageStyle}
        options={{ backgroundAlpha: 0, resolution: 1 }}
      >
        <Textures spriteSheetPaths={spriteSheetPaths} asTextureChain={true}>
          {renderStage}
        </Textures>
      </Stage>
      <TextArea text="tett" />
    </div>
  );
};
