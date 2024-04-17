import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick, classes }) => {
    
  return (
    <button {...{ onClick }} className={[styles.button, classes].join(" ")}>
      {label}
    </button>
  );
};

export default Button;
