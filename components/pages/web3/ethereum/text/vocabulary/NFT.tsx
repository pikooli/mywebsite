import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {};
const markdown = `
**NFT**

A NFT is a **Non-fungible token**.

A token that, when create, cannot change value later.
`;

const NFT: React.FC<Props> = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default NFT;
