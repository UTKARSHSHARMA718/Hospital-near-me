import React from "react";

import styles from "./Button.module.css";

const Button = ({ label, onClick, classes, disabled }) => {
  return (
    <button
      {...{ onClick, disabled }}
      className={[styles.button, disabled ? styles.disable : "", classes].join(
        " "
      )}
    >
      {label}
    </button>
  );
};

export default Button;
