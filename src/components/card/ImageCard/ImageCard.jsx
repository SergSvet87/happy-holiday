import React from "react";
import { useSelector } from "react-redux";

import CardBg from "./img/card-bg.jpg";
// import { imgContext } from "../../../context/imgContext";

export const Image = () => {
  // const { urlImg } = useContext(imgContext);
  const { urlImg } = useSelector((state) => state.image);

  return (
    <img
      src={urlImg || CardBg}
      alt="Фон картки"
      width={840}
      height={520}
    />
  );
};
