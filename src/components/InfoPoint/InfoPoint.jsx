import React from "react";

import styles from "./InfoPoint.module.css";

const InfoPoint = ({ text, icon: Icon }) => {
  return (
    <div className={styles.container}>
      <Icon size={20} className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default InfoPoint;
