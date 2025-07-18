import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const SpinningBox = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#1db954" />
    </mesh>
  );
};

const ThreeLogo = () => (
  <div className="three-logo">
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SpinningBox />
    </Canvas>
  </div>
);

export default ThreeLogo;
