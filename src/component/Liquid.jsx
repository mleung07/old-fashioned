import React from "react";
import { Cylinder } from "@react-three/drei";

const Glass = (props) => {
  return (
    <Cylinder {...props} args={[0.99, 0.99, 0.9, 12, 1, false]}>
      <meshPhongMaterial color="maroon" transparent opacity={0.7} />
    </Cylinder>
  );
};

export default Glass;
