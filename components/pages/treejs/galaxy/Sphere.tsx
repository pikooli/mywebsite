import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useFrame, Color } from "@react-three/fiber";

type Props = {
  color?: Color;
  positionX?: number;
  grid?: boolean;
  emissive?: Color;
  scale?: number;
};
const material = new THREE.Material();
material.depthTest = false;

export default function Sphere(props: Props) {
  const { scale, color, emissive, positionX, grid } = props;
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (ref.current.rotation.y += 0.012));
  return (
    <mesh ref={ref} position={new THREE.Vector3(positionX, 0, 0)}>
      {grid && <gridHelper renderOrder={1} visible={true} scale={scale} />}
      {grid && <axesHelper renderOrder={1} visible={true} scale={scale} />}
      <sphereGeometry args={[scale, 30, 1]} />
      <meshPhongMaterial emissive={emissive} color={color} />
    </mesh>
  );
}
