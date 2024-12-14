import {
  OrbitControls,
  useGLTF,
  useTexture,
  Center,
  Sparkles,
  shaderMaterial,
} from "@react-three/drei";
import { useControls } from "leva";
import portalVertexShader from "./shaders/vertex.glsl";
import portalFragmentShader from "./shaders/fragment.glsl";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";

import { useRef } from "react";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#ffffff"),
    uColorEnd: new THREE.Color("#000000"),
  },
  portalVertexShader,
  portalFragmentShader
);
extend({ PortalMaterial });

export default function Experience() {
  const model = useGLTF("../../model/portal.glb");
  const bakedTexture = useTexture("../..//model/baked.jpg");
  // const controls = useControls({
  //   x: { value: 0 },
  //   y: { value: 0 },
  //   z: { value: 0 },
  // });
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.uTime += delta;
  });

  console.log(model.nodes);
  return (
    <>
      <color args={["#030202"]} attach={"background"} />
      <OrbitControls makeDefault />

      <Center>
        <group scale={0.2} rotation-y={1}>
          <mesh geometry={model.nodes.Cube022.geometry}>
            <meshBasicMaterial
              map={bakedTexture}
              map-flipY={false}
              side={THREE.DoubleSide}
            />
          </mesh>

          <mesh
            geometry={model.nodes.lantern_1.geometry}
            position={[2.73, -0.75, -3.2]}
          >
            <meshBasicMaterial color="#FFCA89" />
          </mesh>

          <mesh
            geometry={model.nodes.lantern_2.geometry}
            position={[1.26, -0.75, -8.55]}
          >
            <meshBasicMaterial color="#FFCA89" />
          </mesh>
          <mesh
            geometry={model.nodes.PortalCircle.geometry}
            position={[9.3, 3.25, -2.8]}
            rotation={model.nodes.PortalCircle.rotation}
            scale={model.nodes.PortalCircle.scale}
          >
            {/* <shaderMaterial
              vertexShader={portalVertexShader}
              fragmentShader={portalFragmentShader}
              uniforms={{
                uTime: { value: 0 },
                uColorStart: { value: new THREE.Color("#ffffff") },
                uColorEnd: { value: new THREE.Color("#000000") },
              }}
              side={THREE.DoubleSide}
            /> */}
            <portalMaterial ref={ref} side={THREE.DoubleSide} />
          </mesh>

          <Sparkles size={10} scale={[20, 7, 20]} position={[1.5, 3, -3]} />
        </group>
      </Center>
    </>
  );
}
