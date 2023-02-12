import React from "react";

import styles from "./EmptyCard.module.css";

export const EmptyCard = () => {
  return (
    <div className={styles.card}>
      <p>Виберіть свято із категорії святкувань для поздоровлення!</p>
    </div>
  );
};
