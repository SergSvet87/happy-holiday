import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

import styles from "./Layout.module.css";

export const Layout = () => {
  // const {
  //   text: { idText },
  //   image: { idImage },
  // } = useSelector((state) => state);

  // console.log("idImage: ", idImage);
  // console.log("idText: ", idText);

  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.page}>
        <Outlet />
      </main>

      {/* {idText && idImage && ( */}
      <Link
        className={styles.btn}
        // to={`singleCard/${idText}/${idImage}`}
        to={`singleCard/`}
      >
        Поділитися карткою
      </Link>
      {/* )} */}

      <Footer />
    </div>
  );
};
