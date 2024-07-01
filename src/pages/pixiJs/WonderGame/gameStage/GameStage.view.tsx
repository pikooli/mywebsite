export interface GameStageViewProps {
  mapTextures: () => JSX.Element[];
}

export const GameStageView = (props: GameStageViewProps) => {
  const { mapTextures } = props;

  return <>{mapTextures()}</>;
};
