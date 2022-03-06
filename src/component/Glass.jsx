import React from "react";
import { Cylinder } from "@react-three/drei";

const Glass = (props) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.position.y = 0.2;
  }, []);
  return (
    <>
      <Cylinder {...props} args={[1, 1, 1.5, 12, 1, true]}>
        <meshPhongMaterial color="white" transparent opacity={0.5} side={2} />
      </Cylinder>
      <Cylinder
        ref={ref}
        position-y={0.2}
        {...props}
        args={[1, 1, 0.2, 12, 1, false]}
      >
        <meshPhongMaterial color="white" transparent opacity={0.7} />
      </Cylinder>
    </>
  );
};

export default Glass;
