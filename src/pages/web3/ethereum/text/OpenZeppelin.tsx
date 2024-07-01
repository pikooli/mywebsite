import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const markdown = `
**OpenZeppelin**

OpenZeppelin provides secure code for descentralized aoplications.

It have base code for token, NFT and more.

Check it out at **[OpenZeppelin](https://openzeppelin.com/)**
`;

const OpenZeppelin: React.FC = () => {
  return (
    <div className="card mb-3">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default OpenZeppelin;
