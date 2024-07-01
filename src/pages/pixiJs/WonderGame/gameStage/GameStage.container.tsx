import { GameStageView } from './GameStage.view';
import { useGameStage, UseGameStageProps } from './GameStage.hook';

interface GameStageProps extends Pick<UseGameStageProps, 'textures' | 'map'> {}

export function GameStage(props: GameStageProps) {
  const { textures, map } = props;
  const GameStageHookProps = useGameStage({ textures, map });

  return <GameStageView {...GameStageHookProps} />;
}
