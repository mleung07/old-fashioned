import React from "react";
import { Sphere } from "@react-three/drei";

const Pill = (props) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.rotation.x = -Math.PI / 3;
  }, []);
  return (
    <Sphere {...props} args={[0.9, 8, 16, 0, Math.PI / 3]} ref={ref}>
      <meshLambertMaterial color="orange" side={2} />
    </Sphere>
  );
};

export default Pill;
