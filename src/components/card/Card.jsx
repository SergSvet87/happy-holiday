import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchTextId } from "../../store/textSlice.js";
import { fetchImageId } from "../../store/imageSlice.js";
import { Image } from "./ImageCard/ImageCard";
import { Felicitation } from "./Felicitation/Felicitation";

import styles from "./Card.module.css";

export const Card = () => {
  const { idText, idImage } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (idText && idImage) {
      dispatch(fetchTextId(idText));
      dispatch(fetchImageId(idImage));
    }
  });

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
