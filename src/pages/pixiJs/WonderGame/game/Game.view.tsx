import react, { useMemo } from 'react';
import { GameContext, ContextBridge, ContextValue } from '../context';
import { Stage } from '@pixi/react';
import { MAP_HEIGHT, MAP_WIDTH } from 'src/pages/pixiJs/WonderGame/utils';
import { MapConfiguration } from 'src/pages/pixiJs/types';
import { Text } from '../Text';
import { RenderTextureELements } from './RenderTextureELements';
import { KeyboardTouch } from '../components';
import Title3 from 'src/components/text/Title3';
import { GithubIcon } from 'src/components/icon/index';

const GITHUB =
  'https://github.com/pikooli/mywebsite/tree/main/src/pages/pixiJs/WonderGame';

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
    <div className="card wonder-game">
      <div className="flex">
        <Title3
          className="capitalize font-bold mb-5 mr-2"
          title="Wonder Game"
        />
        <GithubIcon href={GITHUB} />
      </div>
      <div className="flex flex-wrap items-center justify-center sm:justify-start">
        <GameContext.Provider value={contextValue}>
          <div className="relative w-fit sm:mr-4">
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
        <KeyboardTouch />
      </div>
    </div>
  );
};
