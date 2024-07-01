import { Game } from './Game.container';
import React, { useState } from 'react';
import { PuyoPuyoContext, ContextBridge } from 'puyopuyo/context';
import { useGameContext } from 'puyopuyo/hooks';
import { MAP_HEIGHT, MAP_WIDTH } from 'puyopuyo/constants';
import { Stage } from '@pixi/react';
import { InformationBoard } from 'puyopuyo/containers';
import { Arrows } from 'puyopuyo/components';

export function Puyopuyo() {
  const contextValue = useGameContext();

  return (
    <PuyoPuyoContext.Provider value={contextValue}>
      <main style={mainStyle} className="flex flex-col">
        <div className="flex">
          <InformationBoard />
          <ContextBridge
            Context={PuyoPuyoContext}
            render={(children: React.ReactNode) => (
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
            <Game />
          </ContextBridge>
        </div>
        <Arrows />
      </main>
    </PuyoPuyoContext.Provider>
  );
}

const mainStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '24px',
};

const stageStyle = {
  backgroundColor: 'white',
  border: '1px solid black',
};
