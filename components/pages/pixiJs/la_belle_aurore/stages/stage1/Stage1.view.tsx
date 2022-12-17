export type Stage1ViewProps = {
  mapTextures(): JSX.Element[];
};

export const Stage1View = (props: Stage1ViewProps) => {
  const { mapTextures } = props;

  return <>{mapTextures()}</>;
};
