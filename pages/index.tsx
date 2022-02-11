import type { NextPage, GetServerSideProps } from "next";

import Layout from "components/Layout";
import Me from "components/me/Me";

type Props = {};

export const Home: NextPage<Props> = ({}) => {
  return (
    <Layout>
      <Me />
    </Layout>
  );
};

export default Home;
