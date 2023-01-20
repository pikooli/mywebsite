import { useState } from 'react';
import { contextdefaultValue } from '../context';
import { Text, WonderParameters, Inventaire } from '../../types';

export function useGameState() {
  const [text, setText] = useState<Text>(contextdefaultValue.text);
  const [inventaire, setInventaire] = useState<Inventaire>(
    contextdefaultValue.wonder.inventaire
  );
  const [wonderParameters, setWonderParameters] = useState<WonderParameters>({
    position: contextdefaultValue.wonder.parameters.position,
    action: contextdefaultValue.wonder.parameters.action,
  });

  return {
    text,
    setText,
    wonderParameters,
    setWonderParameters,
    inventaire,
    setInventaire,
  };
}
