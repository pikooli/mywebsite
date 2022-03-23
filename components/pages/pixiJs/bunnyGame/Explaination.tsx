import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {};

const markdown = `

A little game using <a className="text-decoration-none text-dark fw-bold" target="tab" href="https://reactpixi.org/">pixiJS</a>.

The goal is to take the rock that apear on the map.

Use arrow keys of the keyboard to play or **click on the arrows on the right**.
`;

const Explanation: React.FC<Props> = () => {
  return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>;
};

export default Explanation;
