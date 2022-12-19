import dynamic from "next/dynamic";
import Layout from "components/Layout";
import { WonderGame } from "components/pages/pixiJs/WonderGame";

const WonderGameComponentWithNoSSR = dynamic<
  React.ComponentProps<typeof WonderGame>
>(
  () =>
    import("components/pages/pixiJs/WonderGame/index").then(
      (mod) => mod.WonderGame
    ),
  { ssr: false }
);

export default function BunnyGame() {
  return (
    <Layout className="pixijs" title="PixiJs">
      <WonderGameComponentWithNoSSR />
    </Layout>
  );
}
