import React from "react";

import styles from "./Select.module.css";

const Select = ({ options, label, onChange, value }) => {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <select className={styles.container} {...{ onChange, value }}>
        {options?.map((option) => {
          return (
            <option value={option} className={styles.option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
