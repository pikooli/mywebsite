import dynamic from 'next/dynamic';
import Layout from 'src/components/Layout';
import { WonderGame } from 'src/pages/pixiJs/WonderGame';

const WonderGameComponentWithNoSSR = dynamic<
  React.ComponentProps<typeof WonderGame>
>(
  () => import('src/pages/pixiJs/WonderGame/index').then(mod => mod.WonderGame),
  { ssr: false }
);

export default function BunnyGame() {
  return (
    <Layout className="pixijs" title="PixiJs">
      <WonderGameComponentWithNoSSR />
    </Layout>
  );
}
