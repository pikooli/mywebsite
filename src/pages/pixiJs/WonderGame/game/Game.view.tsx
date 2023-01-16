import react, { useMemo } from 'react';
import { GameContext, ContextBridge, ContextValue } from '../context';
import { Stage } from '@inlet/react-pixi';
import { MAP_HEIGHT, MAP_WIDTH } from 'src/pages/pixiJs/WonderGame/utils';
import { MapConfiguration } from 'src/pages/pixiJs/types';
import { contenairStyle } from './Game.style';
import { Text } from '../Text';
import { RenderTextureELements } from './RenderTextureELements';

export interface GameViewProps {
  mapConfiguration: MapConfiguration;
  contextValue: ContextValue;
}

export const GameView = (props: GameViewProps) => {
  const { mapConfiguration, contextValue } = props;

  const stageStyle = useMemo(
    () => ({
      backgroundColor: mapConfiguration.backgroundColor,
    }),
    []
  );

  return (
    <GameContext.Provider value={contextValue}>
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
          <RenderTextureELements mapConfiguration={mapConfiguration} />
        </ContextBridge>
        <Text />
      </div>
    </GameContext.Provider>
  );
};
