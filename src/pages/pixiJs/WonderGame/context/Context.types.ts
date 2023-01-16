import react from 'react';
import { Text } from '../../types';
export interface ContextValue {
  wonder: {
    position: Position;
    setPosition?: react.Dispatch<react.SetStateAction<Position>>;
    action: string;
    setAction?: react.Dispatch<react.SetStateAction<string>>;
    inventaire: {
      costume: boolean;
    };
  };
  text: Text;
}
