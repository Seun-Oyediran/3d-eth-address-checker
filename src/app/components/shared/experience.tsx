"use client";

import React, { Fragment } from "react";
import { Lights } from ".";
import { AjCharacter } from "../models";

interface IProps {
  activeAction: string;
}

const Experience = (props: IProps) => {
  const { activeAction } = props;

  return (
    <Fragment>
      {/* <OrbitControls /> */}

      <Lights />

      <mesh position={[0, -1.2, 0]} castShadow>
        <AjCharacter activeAction={activeAction} />
      </mesh>

      <mesh
        receiveShadow
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1.21, 0]}
      >
        <planeGeometry args={[1000, 1000, 1, 1]} />
        <meshStandardMaterial color="#A397E7" attach="material" />
      </mesh>
    </Fragment>
  );
};

export default Experience;
