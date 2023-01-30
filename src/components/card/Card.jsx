import React from "react";

import { Image } from "./Image/Image";
import { Felicitation } from "./Felicitation/Felicitation";

import styles from "./Card.module.css";

export const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <Image></Image>
        <Felicitation></Felicitation>
      </div>
    </div>
  );
};
