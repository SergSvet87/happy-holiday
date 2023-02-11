import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import { URI_API } from "../../../const/const";
import { holidaysContext } from "../../../context/holidaysContext";

import styles from "./Choices.module.css";

// const holidays = {
//   newyear: "Новый год",
//   bithdayWomen: "День рождения  Ж",
//   bithdayMen: "День рождения  М",
//   womenday: "8 марта",
//   knowledgeday: "День знаний",
// };

export const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const { holiday, setHoliday } = useContext(holidaysContext);

  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    axios
      .get(URI_API)
      // .then((response) => {
      //   if (response.status !== 200) {
      //     throw new Error(response.status);
      //   }
      // })
      .then(({data}) => setHolidays(data))
      .catch( (error) => {
        console.log(error);
      });
  }, []);

  const toggleChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  };

  const changeHolidayText = (title) => {
    setHoliday(title);
    toggleChoices();
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={toggleChoices}
      >
        {holiday}
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
                  changeHolidayText(item[1]);
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
