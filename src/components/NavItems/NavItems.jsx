import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavItems.module.css"

const NavItems = ({ label, href }) => {
  return <Link className={styles.link} to={href}>{label}</Link>;
};

export default NavItems;
