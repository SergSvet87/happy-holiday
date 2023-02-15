import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import { fetchHolidays } from "../../../store/holidaysSlice.js";
import { fetchText } from "../../../store/textSlice.js";
import { fetchImage } from "../../../store/imageSlice.js";
// import { holidaysContext } from "../../../context/holidaysContext.js";

import styles from "./Choices.module.css";

export const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const { holidays, loading } = useSelector((state) => state.holidays);
  // const { holidays } = useContext(holidaysContext);
  const dispatch = useDispatch();
  const { holiday } = useParams();
  

  const toggleChoices = () => {
    if (loading !== "success") return;
    setIsOpenChoices(!isOpenChoices);
  };

  useEffect(() => {
    dispatch(fetchHolidays());

    if (holiday) {
      dispatch(fetchText(holiday));
      dispatch(fetchImage(holiday));
    }
  }, [dispatch, holiday]);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={toggleChoices}
      >
        {loading !== "success"
          ? "Завантаження..."
          : holidays[holiday] || "Виберіть святкування"}
      </button>
      {isOpenChoices && (
        <ul className={styles.list}>
          {Object.entries(holidays).map((item) => (
            <li
              className={styles.item}
              key={item[0]}
              onClick={() => {
                // dispatch(setHoliday(item[0]));
                // dispatch(fetchText(item[0]));
                // dispatch(fetchImage(item[0]));
                toggleChoices();
              }}
            >
              <NavLink
                to={`card/${item[0]}`}
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
              >
                {item[1]}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
