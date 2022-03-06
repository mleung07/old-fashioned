import React from "react";
import { Cone, Cylinder, Sphere } from "@react-three/drei";

const Cherry = (props) => {
  return (
    <>
      <Cylinder rotation-z={Math.PI / 2} {...props} args={[0.03, 0.03, 2]}>
        <meshPhongMaterial color="grey" side={2} />
      </Cylinder>
      <Sphere position={[1, 1.8, -0.5]} args={[0.06]}>
        <meshPhongMaterial color="grey" />
      </Sphere>
      <Cone
        rotation-z={Math.PI / 2}
        position={[-1, 1.8, -0.5]}
        args={[0.03, 0.2]}
      >
        <meshPhongMaterial color="grey" />
      </Cone>
      <Sphere position={[0.3, 1.8, -0.5]} args={[0.2]}>
        <meshPhongMaterial color="darkred" />
      </Sphere>
      <Sphere position={[-0.3, 1.8, -0.5]} args={[0.2]}>
        <meshPhongMaterial color="darkred" />
      </Sphere>
    </>
  );
};

export default Cherry;
