import react, { useMemo } from 'react';
import { GameContext, ContextBridge, ContextValue } from '../context';
import { Stage } from '@inlet/react-pixi';
import { MAP_HEIGHT, MAP_WIDTH } from 'src/pages/pixiJs/WonderGame/utils';
import { MapConfiguration } from 'src/pages/pixiJs/types';
import { contenairStyle } from './Game.style';
import { Text } from '../Text';
import { RenderTextureELements } from './RenderTextureELements';
import { Text as TextEntity } from '../../types';

export interface GameViewProps {
  wonderPosition: Position;
  mapConfiguration: MapConfiguration;
  contextValue: ContextValue;
  text: TextEntity;
}

export const GameView = (props: GameViewProps) => {
  const { mapConfiguration, wonderPosition, contextValue, text } = props;

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
          <RenderTextureELements
            mapConfiguration={mapConfiguration}
            wonderPosition={wonderPosition}
          />
        </ContextBridge>
        <Text name={text.name} text={text.text} />
      </div>
    </GameContext.Provider>
  );
};
