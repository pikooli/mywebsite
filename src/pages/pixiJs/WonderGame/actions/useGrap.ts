import { useContext, useEffect } from 'react';
import { GameContext } from 'src/pages/pixiJs/WonderGame/context';

export function useGrap() {
  const contextValue = useContext(GameContext);

  const {
    wonder: { parameters: wonderParameters, inventaire, setInventaire },
    map: mapConfiguration,
  } = contextValue;
  const { action } = wonderParameters;

  useEffect(() => {
    if (action === 'action') {
      const { items } = mapConfiguration;
      const item = items.find(
        item =>
          item.position.x === wonderParameters.position.x &&
          item.position.y === wonderParameters.position.y
      );
      if (item && !inventaire[item.name]) {
        setInventaire(prev => ({ ...prev, [item.name]: true }));
      }
    }
  }, [wonderParameters, action]);
}
