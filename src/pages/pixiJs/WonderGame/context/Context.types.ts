import react from 'react';
import { Text, MapConfiguration, WonderParameters } from '../../types';

export interface ContextValue {
  wonder: {
    parameters: WonderParameters;
    setParameters: React.Dispatch<React.SetStateAction<WonderParameters>>;
    inventaire: {
      costume: boolean;
    };
  };
  text: Text;
  setText?: react.Dispatch<react.SetStateAction<Text>>;
  map: MapConfiguration;
}
