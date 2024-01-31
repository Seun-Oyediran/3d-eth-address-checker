import React, { useRef, useState } from "react";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Euler, Vector3 } from "three";

interface IProps {
  position?: Vector3;
  rotation?: Euler;
}

const FloatingBox = (props: IProps) => {
  const { position, rotation } = props;
  const boxRef = useRef<THREE.Mesh>(null);

  const [xRotSpeed] = useState(() => Math.random());
  const [yRotSpeed] = useState(() => Math.random());
  const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05);

  useFrame((_state, delta) => {
    if (boxRef.current) {
      // boxRef.current.rotation.x += 0.01;
      // boxRef.current.rotation.y += 0.01;
      // boxRef.current.rotation.z += 0.01;

      boxRef.current.rotation.x += delta * xRotSpeed;
      boxRef.current.rotation.y += delta * yRotSpeed;
      // boxRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
    }
  });

  return (
    <Box
      ref={boxRef}
      position={position}
      rotation={rotation}
      args={[0.4, 0.4, 0.4]}
      scale={scale}
    >
      <meshStandardMaterial
        attach="material"
        color={0xffffff * Math.random()}
        envMapIntensity={0.15}
      />
    </Box>
  );
};

export default FloatingBox;
