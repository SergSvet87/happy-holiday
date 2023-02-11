import React, { useState, useContext } from "react";

import { holidaysContext } from "../../../context/holidaysContext";

import styles from "./Choices.module.css";

export const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const { holidays, holiday, changeHolidayText } = useContext(holidaysContext);

  const toggleChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={toggleChoices}
      >
        {holidays[holiday] || "Выбрать праздник"}
      </button>
      {isOpenChoices && (
        <ul className={styles.list}>
          {Object.entries(holidays).map((item) => (
            <li
              className={styles.item}
              key={item[0]}
            >
              <button
                className={styles.btn}
                onClick={() => {
                  changeHolidayText(item[0]);
                  toggleChoices();
                }}
              >
                {item[1]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
