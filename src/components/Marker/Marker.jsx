import React from "react";

import styles from "./Marker.module.css";

const Marker = ({ text }) => <div className={styles.container}>{text}</div>;

export default Marker;
