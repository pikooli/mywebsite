import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";


export default function Portal() {
  return (
    <div className="w-96 h-96">
    <Canvas
      flat
      camera={{
        fov: 45,
      near: 0.1,
      far: 200,
      position: [1, 2, 6],
      }}
    >
      <Experience />
    </Canvas>
    </div>
  );
}
