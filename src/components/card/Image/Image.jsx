import React from "react";

import Img from '../../../assets/img/card-bg.jpg'
import styles from "./Image.module.css";

export const Image = () => {
  return (
    <div className={styles.image}>
      <img
        className={styles.img}
        src={Img}
        alt="card-bg"
      />
    </div>
  );
};
