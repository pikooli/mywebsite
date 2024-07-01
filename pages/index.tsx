import type { NextPage } from 'next';

import Layout from 'src/components/Layout';
import Me from 'src/pages/me';

export const Home: NextPage = () => {
  return (
    <Layout>
      <Me />
    </Layout>
  );
};

export default Home;
