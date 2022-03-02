import dynamic from "next/dynamic";
import Layout from "components/Layout";

const BunnyGameComponentWithNoSSR = dynamic(
  () => import("components/pages/pixiJs/bunnyGame/BunnyGame"),
  { ssr: false }
);

export default function PixiJs() {
  return (
    <Layout className="pixijs" title="PixiJs">
      {/* <Canvas /> */}
      <BunnyGameComponentWithNoSSR />
    </Layout>
  );
}
