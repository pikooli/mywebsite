import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {};
const markdown = `
**Loom**

Loom is a blockchain that can interact with other blockchain.
It more cheaper and faster than Ethereum, as it model is proof of state.

Check it out at **[Loom](https://loomx.io/)**
`;

const Loom: React.FC<Props> = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Loom;
