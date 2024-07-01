import dynamic from 'next/dynamic';
import Layout from 'src/components/Layout';

const BunnyGameComponentWithNoSSR = dynamic(
  async () => await import('src/pages/pixiJs/bunnyGame/BunnyGame'),
  { ssr: false }
);

export default function BunnyGame() {
  return (
    <Layout className="pixijs" title="PixiJs">
      <BunnyGameComponentWithNoSSR />
    </Layout>
  );
}
