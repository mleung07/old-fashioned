import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Cherry, Ice, Glass, Liquid, Pill } from "./component";

const App = () => {
  return (
    <Canvas
      shadows
      camera={{ position: (3, 2, 3), fov: 75, near: 1, far: 100 }}
      dpr={window.devicePixelRatio}
      style={{
        backgroundColor: "burlywood",
      }}
    >
      <PerspectiveCamera />
      <ambientLight intensity={1} />
      <pointLight intensity={1} position={[0, 4, 0]} />
      <React.Suspense fallback={null}>
        <Ice position={[0, 0.85, 0]} />
        <Glass position={[0, 1, 0]} />
        <Liquid position={[0, 0.76, 0]} />
        <Pill position={[-0.05, 0.85, 0]} />
        <Cherry position={[0, 1.8, -0.5]} />
      </React.Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default App;
