import React from 'react';
import type { ContextValue } from 'puyopuyo/types';

export const ContextBridge = (props: React.PropsWithChildren<any>) => {
  const { children, Context, render } = props;
  return (
    <Context.Consumer>
      {(value: ContextValue) =>
        render(<Context.Provider value={value}>{children}</Context.Provider>)
      }
    </Context.Consumer>
  );
};
