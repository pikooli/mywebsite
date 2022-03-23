import React from "react";
import Title2 from "components/text/Title3";

import Truffle from "components/pages/web3/ethereum/text/Truffle";
import Loom from "components/pages/web3/ethereum/text/Loom";
import Ganache from "components/pages/web3/ethereum/text/Ganache";
import OpenZeppelin from "components/pages/web3/ethereum/text/OpenZeppelin";
import Nonce from "components/pages/web3/ethereum/text/Nonce";
import Vocabulary from "components/pages/web3/ethereum/text/vocabulary";

type Props = {};

const Ethereum: React.FC<Props> = () => {
  return (
    <div>
      <div className="mb-3">
        <Title2 title="Vocabulary :" className="mb-3" />
        <div className="ml-3">
          <Vocabulary />
        </div>
      </div>
      <div className="mb-3">
        <Title2 title="Tools :" className="mb-3" />
        <div className="ml-3">
          <Truffle />
          <Loom />
          <Ganache />
          <OpenZeppelin />
        </div>
      </div>
      <div className="mb-3">
        <Title2 title="Eth transaction :" className="mb-3" />
        <div className="ml-3">
          <Nonce />
        </div>
      </div>
    </div>
  );
};

export default Ethereum;
