import { useContext, useCallback } from 'react';
import { PuyoPuyoContext } from 'puyopuyo/context';

export function ResetBtn() {
  const { setGameReset } = useContext(PuyoPuyoContext);

  const onClick = useCallback(() => {
    setGameReset(true);
  }, [setGameReset]);

  return (
    <button onClick={onClick} style={style}>
      Reset
    </button>
  );
}

const style = {
  padding: '6px',
  margin: '6px',
  border: '2px solid #5BD3FF',
  backgroundColor: '#5BD3FF',
};
