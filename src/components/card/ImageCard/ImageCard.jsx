import React, { useContext } from "react";

import CardBg from "../../../assets/img/card-bg.jpg";
import { imgContext } from "../../../context/imgContext";

export const Image = () => {
  const { urlImg } = useContext(imgContext);

  return (
    <img
      src={urlImg || CardBg}
      alt="Фон открытки"
      width={840}
      height={520}
    />
  );
};
