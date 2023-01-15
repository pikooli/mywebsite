import type { NextPage } from 'next';

import Layout from 'src/components/Layout';
import Me from 'src/pages/me';

type Props = {};

export const Home: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <Me />
    </Layout>
  );
};

export default Home;
