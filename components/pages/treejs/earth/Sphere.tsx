import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Sphere = (props: {
  radius?: number;
  widthSegments?: number;
  heightSegments?: number;
  texture: THREE.Texture;
  transparent?: boolean;
  rotationY?: number;
}) => {
  const {
    texture,
    transparent,
    rotationY,
    radius,
    widthSegments,
    heightSegments,
  } = props;
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.y += rotationY || 0));
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, widthSegments, heightSegments]} />
      <meshBasicMaterial map={texture} transparent={transparent} />
    </mesh>
  );
};

export default Sphere;
