import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {};
const markdown = `
**Ganache**

Ganache is a testing tools for transaction, smarth contract and more.

It will setup a local private ethereum network and 10 accounts with 100 eth each.

Check it out at **[Ganache](https://trufflesuite.com/docs/ganache/)**
`;

const Ganache: React.FC<Props> = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Ganache;
