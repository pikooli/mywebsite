import { GameView } from './Game.view';
import { useGame } from './Game.hook';

export const Game = () => {
  const gameViewProps = useGame();

  return <GameView {...gameViewProps} />;
};
