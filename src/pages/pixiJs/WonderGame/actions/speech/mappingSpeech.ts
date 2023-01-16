import { speech } from './speech';
import { contextdefaultValue } from '../../context';
export const mappingSpeech = ({
  mapName,
  coordoner,
}: {
  mapName: string;
  coordoner: Position;
}) => {
  if (mapName === 'map1' && coordoner.x === 12 && coordoner.y === 3) {
    return speech[1];
  }
  return contextdefaultValue.text;
};
