import react, { useMemo, useState } from "react";
import { GameContext, ContextBridge } from "../context";
import { Stage } from "@inlet/react-pixi";
import {
  MAP_HEIGHT,
  MAP_WIDTH,
} from "components/pages/pixiJs/WonderGame/utils";
import { MapConfiguration } from "components/pages/pixiJs/types";
import { contenairStyle } from "./Game.style";
import { TextArea } from "../TextArea";
import { RenderTextureELements } from "./RenderTextureELements";

export interface GameViewProps {
  wonderPosition: Position;
  mapConfiguration: MapConfiguration;
}

export const GameView = (props: GameViewProps) => {
  const { mapConfiguration, wonderPosition } = props;
  const [userName, setUserName] = useState("John Smith");
  const value = useMemo(() => ({ userName, setUserName }), [userName]);
  const stageStyle = useMemo(
    () => ({
      backgroundColor: mapConfiguration.backgroundColor,
    }),
    []
  );

  return (
    <GameContext.Provider value={value}>
      <div style={contenairStyle}>
        <ContextBridge
          Context={GameContext}
          render={(children: react.ReactChildren) => (
            <Stage
              width={MAP_WIDTH}
              height={MAP_HEIGHT}
              renderOnComponentChange={true}
              style={stageStyle}
              options={{ backgroundAlpha: 0, resolution: 1 }}
            >
              {children}
            </Stage>
          )}
        >
          <RenderTextureELements
            mapConfiguration={mapConfiguration}
            wonderPosition={wonderPosition}
          />
        </ContextBridge>
        <TextArea
          text="113"
          // text="tettt ettte tttetttet ttett t ettte ttte ttte tttett tettte tttett tettt ettte tttetttet ttett t ettte ttte ttte tttett tettte tttett tettt ettte tttetttet ttett t ettte ttte ttte tttett tettte tttett tettt ettte tttetttet ttett t ettte ttte ttte tttett tettte tttett"
          name="Toto"
        />
      </div>
    </GameContext.Provider>
  );
};
