import React from "react";

import styles from "./Heading.module.css";

const Heading = ({ label }) => {
  return <p className={styles.heading}>{label}</p>;
};

export default Heading;
