import dynamic from 'next/dynamic';
import Layout from 'src/components/Layout';
import { Puyopuyo } from 'src/pages/pixiJs/puyopuyo';

const PuyopuyoGameComponentWithNoSSR = dynamic<
  React.ComponentProps<typeof Puyopuyo>
>(
  async () =>
    await import('src/pages/pixiJs/puyopuyo').then(mod => mod.Puyopuyo),
  {
    ssr: false,
  }
);

export default function PuyopuyoGame() {
  return (
    <Layout className="pixijs" title="PixiJs">
      <PuyopuyoGameComponentWithNoSSR />
    </Layout>
  );
}
