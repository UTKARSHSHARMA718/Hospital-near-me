import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../containers/NavBar/Navbar";
import styles from "./CenterBoxLayout.module.css";

const CenterBoxLayout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.OuterBox}>
        <div className={styles.innerBox}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CenterBoxLayout;
