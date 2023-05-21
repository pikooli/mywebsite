import {
  NextPlayerSet,
  Score,
  Combo,
  Lvl,
  GameState,
  ResetBtn,
} from 'puyopuyo/components';

export function InformationBoard() {
  return (
    <div>
      <GameState />
      <div style={style.container}>
        <Lvl />
        <Score />
        <Combo />
        <NextPlayerSet />
        <ResetBtn />
      </div>
    </div>
  );
}

const style = {
  container: {
    display: 'grid',
    placeItems: 'center',
    color: 'black',
  },
};
