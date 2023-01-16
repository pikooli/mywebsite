import { ContextValue } from './index';

export const defaultText = { name: '', text: '' };
export const defaultWonderPosition = { x: 1, y: 1 };
export const defaultAction = '';

export const contextdefaultValue: ContextValue = {
  wonder: {
    position: defaultWonderPosition,
    action: defaultAction,
    inventaire: { costume: false },
  },
  text: defaultText,
};
