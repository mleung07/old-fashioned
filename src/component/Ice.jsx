import React from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

const Ice = (props) => {
  const ref = React.useRef();
  useFrame((state, delta) => (ref.current.rotation.y -= 0.01));

  return (
    <RoundedBox {...props} ref={ref} args={[1.1, 1.1, 1.1]} radius={0.1}>
      <meshPhongMaterial color="aqua" />
    </RoundedBox>
  );
};

export default Ice;
