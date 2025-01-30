import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Dragon({ position, scale }) {
  const { scene } = useGLTF("/models/dragon.glb");
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.5;
    ref.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.3;
  });

  return <primitive object={scene} ref={ref} position={position} scale={scale * 2} />;
}

export default Dragon;
