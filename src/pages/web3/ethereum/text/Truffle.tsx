import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const markdown = `
**Truffle**

Truffle is a tools for development on blockchain, it can setup project, compile, make test, deploy and much more.

Check it out at **[Truffle](https://trufflesuite.com/truffle/)**
`;

const Truffle: React.FC = () => {
  return (
    <div className="card mb-3">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Truffle;
