import React from "react";

import { Image } from "./ImageCard/ImageCard";
import { Felicitation } from "./Felicitation/Felicitation";

import styles from "./Card.module.css";

export const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image />
          <Felicitation />
        </div>
      </div>
    </div>
  );
};
