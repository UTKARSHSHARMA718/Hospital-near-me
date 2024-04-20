import React from "react";

import Heading from "../../components/Heading/Heading";
import InfoPoint from "../../components/InfoPoint/InfoPoint";
import { INFO_POINTS } from "../../constants/const";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Heading label="About Hospital Near me" />
      <hr className={styles.horizantalLine}/>
      <div className={styles.infoPointsContainer}>
        {INFO_POINTS?.map((point) => (
          <InfoPoint text={point?.text} icon={point?.icon} />
        ))}
      </div>
    </div>
  );
};

export default About;
