import { useContext } from 'react';
import { PuyoPuyoContext } from 'puyopuyo/context';

export function Combo() {
  const { combo } = useContext(PuyoPuyoContext);

  return <p>Combo: {combo} </p>;
}
