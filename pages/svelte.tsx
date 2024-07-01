import dynamic from 'next/dynamic';
import Layout from 'src/components/Layout';

const SvelteComponentWithNoSSR = dynamic(() => import('src/pages/svelte'), {
  ssr: false,
});

export default function Svelte() {
  return (
    <Layout className="svelte" title="Svelte">
      <SvelteComponentWithNoSSR />
    </Layout>
  );
}
