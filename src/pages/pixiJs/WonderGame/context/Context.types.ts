import react from 'react';
import {
  Text,
  MapConfiguration,
  WonderParameters,
  Inventaire,
} from '../../types';

export interface ContextValue {
  wonder: {
    parameters: WonderParameters;
    setParameters: React.Dispatch<React.SetStateAction<WonderParameters>>;
    inventaire: Inventaire;
    setInventaire: React.Dispatch<React.SetStateAction<Inventaire>>;
  };
  text: Text;
  setText?: react.Dispatch<react.SetStateAction<Text>>;
  map: MapConfiguration;
}
