import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const Cat = () => {
  const model = useGLTF('../../cat.glb');

  useFrame((_, delta) => {
    model.nodes.mesh_0.rotation.y += delta;
  });

  return <primitive scale={3} object={model.scene} />;
};
