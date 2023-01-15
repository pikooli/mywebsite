import type { NextPage, GetStaticProps } from 'next';
import Layout from 'src/components/Layout';
import readFile from 'utils/ft_linear_regression/readFile';

import Ft_linear_regression from 'src/pages/ft_linear_regression';

export const getStaticProps: GetStaticProps = async () => {
  const content = readFile('public/ressource/ft_linear_regression/data.csv');
  let error = '';
  if (typeof content === 'string') {
    error = content;
  }
  return {
    props: { content: error ? [] : content, error },
  };
};

type Props = {
  content: string[][];
  error: string;
};

export const Home: NextPage<Props> = ({ content, error }) => {
  return (
    <Layout className="ft_linear_regression" title="ft_linear_regression">
      <Ft_linear_regression content={content} error={error} />
    </Layout>
  );
};

export default Home;
