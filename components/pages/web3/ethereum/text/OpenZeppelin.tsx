import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {};
const markdown = `
**OpenZeppelin**

OpenZeppelin provides secure code for descentralized aoplications.

It have base code for token, NFT and more.

Check it out at **[OpenZeppelin](https://openzeppelin.com/)**
`;

const OpenZeppelin: React.FC<Props> = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default OpenZeppelin;
