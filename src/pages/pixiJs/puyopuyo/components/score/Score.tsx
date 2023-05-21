import { useContext } from 'react';
import { PuyoPuyoContext } from 'puyopuyo/context';

export function Score() {
  const { score } = useContext(PuyoPuyoContext);

  return <p>Score: {score} </p>;
}
