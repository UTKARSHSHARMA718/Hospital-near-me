import React from "react";
import { Outlet } from "react-router-dom"; //TODO: use this outlets

import Navbar from "../../containers/NavBar/Navbar";
import styles from "./CenterBoxLayout.module.css";
import Login from "../../containers/Login/Login";

const CenterBoxLayout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.OuterBox}>
        <div className={styles.innerBox}>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default CenterBoxLayout;
