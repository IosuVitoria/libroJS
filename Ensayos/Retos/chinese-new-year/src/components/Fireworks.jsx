import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function getRandomColor() {
  const colors = ["red", "yellow", "blue", "green", "purple", "orange"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function Fireworks() {
  const particles = Array.from({ length: 150 }, () => ({
    position: [Math.random() * 4 - 2, Math.random() * 2, Math.random() * 4 - 2],
    velocity: [Math.random() * 0.05 - 0.025, Math.random() * 0.05, Math.random() * 0.05 - 0.025], // 🔥 Ahora son más lentos
    color: getRandomColor(),
  }));

  const ref = useRef([]);

  useFrame(() => {
    ref.current.forEach((p, i) => {
      p.position.x += particles[i].velocity[0];
      p.position.y += particles[i].velocity[1];
      p.position.z += particles[i].velocity[2];

      if (p.position.y > 3) {
        p.position.set(...particles[i].position);
      }
    });
  });

  return (
    <group>
      {particles.map((p, i) => (
        <mesh key={i} ref={(el) => (ref.current[i] = el)} position={p.position}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color={p.color} emissive={p.color} />
        </mesh>
      ))}
    </group>
  );
}

export default Fireworks;
