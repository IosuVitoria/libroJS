import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Lantern from "./components/Lantern";
import Fireworks from "./components/Fireworks";
import Dragon from "./components/Dragon";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000" }}>
      <Canvas camera={{ position: [0, 2, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <Suspense fallback={null}>
          <Lantern position={[0, 5, 0]} />
          <Fireworks />
          <Dragon position={[0, 0, 0]} scale={1.5} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
