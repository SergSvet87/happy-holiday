import React from "react";
import { useSelector } from "react-redux";

import styles from "./Felicitation.module.css";

export const Felicitation = () => {
  const { text, loading } = useSelector((state) => state.text);

  return (
    <p className={styles.felicitation}>
      {loading === "loading"
        ? "Завантаження..."
        : text === ""
        ? "Виберіть свято із категорії для поздоровлення!"
        : text}
    </p>
  );
};
