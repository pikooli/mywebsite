import react from 'react';
export interface ContextValue {
  wonderPosition: Position;
  setWonderPosition?: react.Dispatch<react.SetStateAction<Position>>;
  action: string;
  setAction?: react.Dispatch<react.SetStateAction<string>>;
}
