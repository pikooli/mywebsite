import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const markdown = `
**MintNFT**

Minting a NFT mean that you create the NFT, it will put the NFT on the blockchain.

E.g: If you get a NFT on a website, it will be the act of purchasing it.
`;

const MintNFT: React.FC = () => {
  return (
    <div className="card mb-3">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MintNFT;
