import dynamic from "next/dynamic";
import Layout from "components/Layout";

const BunnyGameComponentWithNoSSR = dynamic(
  () => import("components/pages/pixiJs/bunnyGame/BunnyGame"),
  { ssr: false }
);

export default function BunnyGame() {
  return (
    <Layout className="pixijs" title="PixiJs">
      <BunnyGameComponentWithNoSSR />
    </Layout>
  );
}
