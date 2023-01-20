import { ContextValue } from './index';
import { MapConfiguration } from '../../types';

export const defaultText = { name: '', text: '' };
export const defaultWonderPosition = { x: 1, y: 1 };
export const defaultAction = '';
export const defaultMap: MapConfiguration = {
  name: 'default',
  backgroundColor: 'default',
  map: [],
  speeches: [],
  items: [],
};

export const contextdefaultValue: ContextValue = {
  wonder: {
    parameters: { position: defaultWonderPosition, action: '' },
    setParameters: () => null,
    inventaire: { cat_costume: false },
    setInventaire: () => null,
  },
  text: defaultText,
  map: defaultMap,
};
