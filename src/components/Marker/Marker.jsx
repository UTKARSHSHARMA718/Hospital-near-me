import React from "react";

import styles from "./Marker.module.css";

const InfoLine = ({ text }) => <p className={styles.text}>{text}</p>;

const Marker = ({ text, onClick, data, isShowInfoBox }) => {
  const { formatted, lat, lon, name, distance, postcode } = data;
  
  return (
    <div {...{ onClick }} className={styles.container}>
      {text}
      {isShowInfoBox && (
        <div className={styles.hoverInfoBox}>
          <InfoLine text={`Name: ${name}`} />
          <InfoLine text={`Address: ${formatted}`} />
          <div className={styles.latLngContainer}>
            <InfoLine text={`lat: ${lat}`} />
            <InfoLine text={`lng: ${lon}`} />
          </div>
          <InfoLine text={`Distance: ${distance}m`} />
          <InfoLine text={`PostCode: ${postcode}`} />
        </div>
      )}
    </div>
  );
};

export default Marker;
