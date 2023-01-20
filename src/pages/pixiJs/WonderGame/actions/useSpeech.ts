import { useContext, useEffect } from 'react';
import { GameContext } from 'src/pages/pixiJs/WonderGame/context';

export function useSpeech() {
  const contextValue = useContext(GameContext);

  const {
    wonder: {
      setParameters: setWonderParameters,
      parameters: wonderParameters,
    },
    map: mapConfiguration,
    setText,
  } = contextValue;
  const { action } = wonderParameters;

  useEffect(() => {
    if (action === 'action') {
      const { speeches } = mapConfiguration;
      const speech = speeches.find(
        speech =>
          speech.position.x === wonderParameters.position.x &&
          speech.position.y === wonderParameters.position.y
      );
      if (speech) {
        setText && setText(speech);
      } else {
        setWonderParameters(prev => ({ ...prev, action: '' }));
      }
    }
  }, [wonderParameters, action]);
}
