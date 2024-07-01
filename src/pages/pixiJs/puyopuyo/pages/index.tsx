import dynamic from 'next/dynamic';
import 'tailwindcss/tailwind.css';
// @ts-expect-error
const DynamicHome = dynamic(async () => await import('puyopuyo/game'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return <DynamicHome />;
}
