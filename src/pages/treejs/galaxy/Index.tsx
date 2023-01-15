import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import * as THREE from 'three';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Canvas, useFrame } from '@react-three/fiber';
import Sphere from 'src/pages/treejs/galaxy/Sphere';
import GUI from 'lil-gui';

type Props = {};
const markdown = `
### **Galaxy**

Trying to do the solar system, got the sun, earth and moon for now 
`;

function Group(props: { children: React.ReactNode; positionX?: number }) {
  const ref = useRef<THREE.Group>(null!);
  const { children, positionX } = props;
  useFrame((state, delta) => (ref.current.rotation.y += 0.012));
  return (
    <group position={new THREE.Vector3(positionX)} ref={ref}>
      {children}
    </group>
  );
}

const Index: React.FC<Props> = () => {
  const router = useRouter();
  const [gui, setGrui] = useState<any>();
  const [state, setState] = useState({
    sunGrid: false,
    earthGrid: false,
    moonGrid: false,
  });

  const myObject = {
    sungrid: () => setState(prev => ({ ...prev, sunGrid: !prev.sunGrid })),
    earthgrid: () =>
      setState(prev => ({ ...prev, earthGrid: !prev.earthGrid })),
    moongrid: () => setState(prev => ({ ...prev, moonGrid: !prev.moonGrid })),
  };

  useEffect(() => {
    if (!gui) setGrui(new GUI());
  }, []);

  useEffect(() => {
    const quiPage = () => {
      gui?.destroy();
    };
    if (gui) {
      gui.add(myObject, 'sungrid');
      gui.add(myObject, 'earthgrid');
      gui.add(myObject, 'moongrid');
      router.events.on('routeChangeStart', quiPage);
      return () => {
        router.events.off('routeChangeStart', quiPage);
      };
    }
  }, [gui]);

  return (
    <div className="galaxy h-96 lg:w-2/3 ">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      <Canvas
        className="bg-black"
        camera={{
          position: [0, 40, 0],
          up: [0, 0, 1],
        }}
      >
        <pointLight color={0xffffff} intensity={3} />
        <Group>
          <Sphere scale={5} emissive={0xffff00} grid={state.sunGrid}></Sphere>
          <Group positionX={13}>
            <Sphere
              color={0x2233ff}
              emissive={0x112244}
              scale={2}
              grid={state.earthGrid}
            />
            <Sphere
              color={0x888888}
              emissive={0x222222}
              positionX={5}
              grid={state.moonGrid}
            />
          </Group>
        </Group>
        {/* <Sphere color={0xffff00} /> */}
      </Canvas>
    </div>
  );
};

export default Index;
