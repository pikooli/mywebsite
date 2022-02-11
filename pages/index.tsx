import type { NextPage, GetServerSideProps } from "next";
import Layout from "components/Layout";

import i18n from "lib/i18n";

export const getServerSideProps: GetServerSideProps = i18n.getTranslations();

type Props = {};

export const Home: NextPage<Props> = ({}) => {
  return <Layout></Layout>;
};

export default Home;
