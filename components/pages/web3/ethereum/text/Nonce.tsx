import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {};
const markdown = `
**Nonce**

In Ethereum every transaction has a nonce.

This is so that each transaction can only be processed by the blockchain once. Additionally, to be a valid transaction, the nonce must either be 0, or a transaction with the previous number must have already been processed.

That means that transactions are always processed in order for a given account, and so incrementing nonces is a very sensitive matter that is easy to mess up, especially when a user is interacting with multiple applications with pending transactions using the same account, potentially across multiple devices.
`;

const Nonce: React.FC<Props> = () => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Nonce;
