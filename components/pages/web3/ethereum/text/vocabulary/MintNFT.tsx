import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {};
const markdown = `
**MintNFT**

Minting a NFT mean that you create the NFT, it will put the NFT on the blockchain.

E.g: If you get a NFT on a website, it will be the act of purchasing it.
`;

const MintNFT: React.FC<Props> = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MintNFT;
