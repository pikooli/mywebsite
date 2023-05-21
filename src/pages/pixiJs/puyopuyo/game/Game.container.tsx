import { GameView } from "./Game.view";
import { useGame } from "./Game.hook";

export function Game() {
  const GameStageHookProps = useGame();

  return <GameView {...GameStageHookProps} />;
}
