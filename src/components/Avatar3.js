import React from "react";
import Image from "react-bootstrap/Image";

function Avatar3(props) {
  const { size, ...otherProps } = props;

  return (
    <Image
      {...otherProps}
      roundedCircle={true}
      style={{
        width: size,
        height: size,
      }}
    ></Image>
  );
}

export default Avatar3;
