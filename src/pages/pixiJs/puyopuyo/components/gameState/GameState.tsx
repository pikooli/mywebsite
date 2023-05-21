import { useContext } from 'react';
import { PuyoPuyoContext } from 'puyopuyo/context';

export function GameState() {
  const { isGameOver } = useContext(PuyoPuyoContext);

  if (isGameOver) {
    return (
      <div style={style.gameOver}>
        <p>GAME OVER</p>
      </div>
    );
  }

  return (
    <div style={style.playTime}>
      <p>PUYO PUYO</p>
    </div>
  );
}

const style = {
  gameOver: {
    width: '10rem',
    color: 'red',
    fontSize: '24px',
  },
  playTime: {
    width: '10rem',
    color: 'green',
    fontSize: '24px',
  },
};
