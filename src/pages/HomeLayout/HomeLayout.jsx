import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "../../containers/NavBar/Navbar";
import styles from "./HomeLayout.module.css";

const HomeLayout = () => {
  
  return (
    <>
      <Toaster />
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
