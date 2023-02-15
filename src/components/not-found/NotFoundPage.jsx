import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import image from "../../assets/img/dubl.png";

import styles from "./not-found.module.css";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <section
      id="not-found-page"
      className={styles.notFound}
    >
      <div className="container">
        <div className={styles.image}>
          <img
            src={image}
            alt="not found page"
            width={600}
            height={600}
          />

          <h5 className={styles.title}>404</h5>
        </div>

        <div className={styles.text}>
          <h3>Oops!</h3>
          <p>Sorry, there was a transition to a non-existent address.</p>

          <p>
            Please return to the main page via the
            <NavLink
              className={styles.link}
              to="/"
            >
              Home
            </NavLink>
            !{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
