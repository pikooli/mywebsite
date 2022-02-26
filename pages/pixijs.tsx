import dynamic from "next/dynamic";
import Layout from "components/Layout";
import Canvas from "components/pages/pixiJs/Canvas";

const BunnyComponentWithNoSSR = dynamic(
  () => import("components/pages/pixiJs/Bunny"),
  { ssr: false }
);

export default function PixiJs() {
  return (
    <Layout className="pixijs" title="PixiJs">
      <Canvas />
      <BunnyComponentWithNoSSR />
    </Layout>
  );
}
