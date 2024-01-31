import React from "react";

const Lights = () => {
  // const dirLight = useRef<any>(null);
  // const dirLight2 = useRef<any>(null);
  // const dirLight3 = useRef<any>(null);
  // const dirLight4 = useRef<any>(null);

  // useHelper(dirLight, DirectionalLightHelper, 1, "red");
  // useHelper(dirLight2, DirectionalLightHelper, 1, "blue");
  // useHelper(dirLight3, DirectionalLightHelper, 1, "green");
  // useHelper(dirLight4, DirectionalLightHelper, 1, "black");

  return (
    <mesh>
      <ambientLight intensity={1} />

      <directionalLight position={[2, 0, 0.866]} />

      <directionalLight position={[-2, 0, 0.866]} />

      <directionalLight intensity={0.3} position={[0, 4, 3]} />

      <directionalLight intensity={0.3} position={[0, 4, -3]} />

      <ambientLight intensity={0.25} />
      <directionalLight
        position={[-8, 12, 8]}
        intensity={0.6}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      <directionalLight
        position={[10, 10, 5]}
        intensity={0.6}
        shadow-mapSize={[1024, 1024]}
      />
      <spotLight intensity={0.3} position={[-8, 1000, 8]} />
    </mesh>
  );
};

export default Lights;
