import dynamic from 'next/dynamic';
import 'tailwindcss/tailwind.css';

const DynamicHome = dynamic(() => import('puyopuyo/game'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return <DynamicHome />;
}
