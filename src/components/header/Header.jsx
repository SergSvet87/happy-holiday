import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchText } from "../../store/textSlice.js";
import { fetchImage } from '../../store/imageSlice.js';
import { Container } from "../container/Container";
import { Choices } from "./choices/Choices";

import styles from "./Header.module.css";

export const Header = () => {
  const dispatch = useDispatch();
  const { holiday } = useSelector((state) => state.holidays);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              disabled={!holiday}
              onClick={() => {
                dispatch(fetchText(holiday));
              }}
            >
              Поменять поздравление
            </button>
            <button
              className={styles.button}
              onClick={() => {
                dispatch(fetchImage(holiday));
              }}
            >
              Поменять фон
            </button>
          </div>

          <Choices />
        </div>
      </Container>
    </header>
  );
};
