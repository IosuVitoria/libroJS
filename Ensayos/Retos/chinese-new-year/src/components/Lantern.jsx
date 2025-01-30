import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, useTexture } from "@react-three/drei";

function Lantern({ position }) {
  const ref = useRef();
  const texture = useTexture("/textures/lantern-pattern.jpg"); // 🏮 Cargamos una textura con patrones

  useFrame(({ clock }) => {
    ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.3;
  });

  return (
    <mesh ref={ref} position={position} scale={[1.5, 1.5, 1.5]}>
      <cylinderGeometry args={[0.4, 0.4, 1.2, 32]} />
      <meshStandardMaterial map={texture} emissive="red" emissiveIntensity={0.5} />
      <pointLight color="orange" intensity={2} position={[0, -0.5, 0]} />
    </mesh>
  );
}

export default Lantern;
