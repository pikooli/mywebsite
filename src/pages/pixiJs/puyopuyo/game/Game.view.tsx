export interface GameViewProps {
  boardTextures: () => JSX.Element[];
  playerSlimsTextures: () => JSX.Element[];
}

export const GameView = (props: GameViewProps) => {
  const { boardTextures, playerSlimsTextures } = props;

  return (
    <>
      {boardTextures()}
      {playerSlimsTextures()}
    </>
  );
};
