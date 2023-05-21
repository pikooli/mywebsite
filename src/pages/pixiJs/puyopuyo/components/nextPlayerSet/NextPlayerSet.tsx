import { useContext } from 'react';
import { PuyoPuyoContext } from 'puyopuyo/context';
import { Slim } from 'puyopuyo/components';
import { conversionImage } from 'puyopuyo/utils';

export function NextPlayerSet() {
  const { nextPlayerSet } = useContext(PuyoPuyoContext);

  return (
    <div>
      <p>Next Set : </p>
      <div style={style.slimsContainer}>
        <Slim url={conversionImage[nextPlayerSet[0].color]} />
        <Slim url={conversionImage[nextPlayerSet[1].color]} />
      </div>
    </div>
  );
}

const style = {
  slimsContainer: {
    display: 'grid',
    placeItems: 'center',
  },
};
