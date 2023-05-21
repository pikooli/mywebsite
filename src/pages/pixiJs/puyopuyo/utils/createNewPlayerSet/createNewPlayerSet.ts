import { STARTING_POSITION, SLIM_COLORS } from 'puyopuyo/constants';
import { PlayerSet, PlayerSlim } from 'puyopuyo/types';

function generatorOfRandom(max: number = 10) {
  return Math.floor(Math.random() * max);
}

export function createNewPlayerSet(): PlayerSet {
  const slim1: PlayerSlim = {
    color: SLIM_COLORS[generatorOfRandom(SLIM_COLORS.length)],
    position: STARTING_POSITION[0],
  };
  const slim2: PlayerSlim = {
    color: SLIM_COLORS[generatorOfRandom(SLIM_COLORS.length)],
    position: STARTING_POSITION[1],
  };

  return [slim1, slim2];
}
