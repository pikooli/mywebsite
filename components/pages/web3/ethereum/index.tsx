import React from "react";
import Title2 from "components/text/Title3";

import Truffle from "components/pages/web3/ethereum/text/Truffle";
import Loom from "components/pages/web3/ethereum/text/Loom";
import Ganache from "components/pages/web3/ethereum/text/Ganache";
import Nonce from "components/pages/web3/ethereum/text/Nonce";

type Props = {};

const Ethereum: React.FC<Props> = () => {
  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <Title2 title="Tools :" />
          <Truffle />
          <Loom />
          <Ganache />
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <Title2 title="Eth transaction :" />
          <Nonce />
        </div>
      </div>
    </div>
  );
};

export default Ethereum;
