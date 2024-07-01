import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Cube from 'src/pages/treejs/cube/Cube';
import CubeComponent from 'src/pages/treejs/cube/CubeComponent';

const markdown = `
### **Cube**

Some cubes with the treejs library.
`;
const Index: React.FC = () => {
  return (
    <div className="cube">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      <Cube />
      <CubeComponent />
    </div>
  );
};

export default Index;
