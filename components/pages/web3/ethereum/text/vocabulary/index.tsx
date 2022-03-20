import React from "react";
import NFT from "components/pages/web3/ethereum/text/vocabulary/NFT";
import MintNFT from "components/pages/web3/ethereum/text/vocabulary/MintNFT";

type Props = {};

const Vocabulary: React.FC<Props> = () => {
  return (
    <div>
      <NFT />
      <MintNFT />
    </div>
  );
};

export default Vocabulary;
