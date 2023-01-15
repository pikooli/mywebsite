import Layout from 'src/components/Layout';

import Ethereum from 'src/pages/web3/ethereum';

export const EthereumPage = () => {
  return (
    <Layout className="ethereum" title="Ethereum">
      <Ethereum />
    </Layout>
  );
};

export default EthereumPage;
