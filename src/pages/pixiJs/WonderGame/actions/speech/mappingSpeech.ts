import { speech } from './speech';
import { defaultTextArea } from '../../utils';
export const mappingSpeech = ({
  mapName,
  coordoner,
}: {
  mapName: string;
  coordoner: Position;
}) => {
  if (mapName === 'map1' && coordoner.x === 1 && coordoner.y === 1) {
    return speech[1];
  }
  return defaultTextArea;
};
