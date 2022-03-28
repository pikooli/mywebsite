import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Cube from "components/pages/treejs/cube/Cube";
import CubeComponent from "components/pages/treejs/cube/CubeComponent";

type Props = {};
const markdown = `
### **Cube**

Some cubes with the treejs library.
`;
const Index: React.FC<Props> = () => {
  return (
    <div className="cube">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      <Cube />
      <CubeComponent />
    </div>
  );
};

export default Index;
