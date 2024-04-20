import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavItems.module.css";

const NavItems = ({ label, href, classes }) => {
  return (
    <Link className={[styles.link, classes].join(" ")} to={href}>
      {label}
    </Link>
  );
};

export default NavItems;
