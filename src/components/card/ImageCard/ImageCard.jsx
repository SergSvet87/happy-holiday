import React, { useContext } from "react";

import { imgContext } from "../../../context/imgContext";

export const Image = (props) => {
  const { img } = useContext(imgContext);

  return (
    <img
      src={props.img}
      alt="card-bg"
      width={840}
      height={520}
    />
  );
};
