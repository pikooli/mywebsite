import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Canvas } from '@react-three/fiber';
import Sphere from 'src/pages/treejs/earth/Sphere';
import CameraController from 'src/pages/treejs/earth/Camera';

const markdown = `
### **Earth**

I live on earth so i create an earth 👽, you can rotate it.
`;

type Props = {};

const Index: React.FC<Props> = () => {
  const [worldTexture, setWorldTexture] = useState<THREE.Texture>();
  const [cloudTexture, setCloudTexture] = useState<THREE.Texture>();

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load('https://assets.codepen.io/141041/small-world.jpg', texture =>
      setWorldTexture(texture)
    );
    loader.load(
      'https://assets.codepen.io/141041/small-world-clouds.png',
      texture => setCloudTexture(texture)
    );
  }, []);

  if (!worldTexture || !cloudTexture) return <></>;

  return (
    <div className="earth h-96 lg:w-2/3 ">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      <Canvas
        className="rounded"
        style={{
          background:
            'radial-gradient(circle at center, white, rgba(113,129,191,0.5) 50%)',
        }}
        camera={{
          fov: 30,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 60,
          position: [6, 0, 0],
        }}
      >
        <ambientLight />
        <CameraController />
        <pointLight color={0xffffff} intensity={3} />
        <Sphere
          texture={worldTexture}
          rotationY={0.0005}
          radius={1}
          widthSegments={40}
          heightSegments={40}
        />
        <Sphere
          texture={cloudTexture}
          transparent={true}
          rotationY={-0.001}
          radius={1.01}
          widthSegments={40}
          heightSegments={40}
        />
      </Canvas>
    </div>
  );
};

export default Index;
