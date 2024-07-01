import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const markdown = `
**Loom**

Loom is a blockchain that can interact with other blockchain.

It more cheaper and faster than Ethereum, as it model is proof of state.

Check it out at **[Loom](https://loomx.io/)**
`;

const Loom: React.FC = () => {
  return (
    <div className="card mb-3">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Loom;
