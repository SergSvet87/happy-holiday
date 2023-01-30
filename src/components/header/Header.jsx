import React from "react";

import { Container } from "../container/Container";
import { Choices } from "./choices/Choices";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.buttons}>
            <button className={styles.button}>Поменять поздравление</button>
            <button className={styles.button}>Поменять фон</button>
          </div>

          <Choices />
        </div>
      </Container>
    </header>
  );
};
