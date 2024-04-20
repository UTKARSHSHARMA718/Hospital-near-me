import React from "react";
import GoogleMapReact from "google-map-react";

import Marker from "../Marker/Marker";
import styles from "./Map.module.css";

const Map = ({ coordinates, hospitals }) => {
  const GOOGLE_MAP_API_KEY = process?.env?.REACT_APP_GOOGLE_MAP_API_KEY;

  return (
    <div className={styles.container}>
      {/* {hospitals?.length && ( */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        // options={""}
        // onChange={""}
        // onChildClick={""}
      >
        <Marker lat={28.6511181} lng={77.4459297} text={"H"} />
        {hospitals?.map((hospital, index) => {
          return (
            <Marker
              key={index}
              lat={hospital?.geometry?.coordinates[1]}
              lng={hospital?.geometry?.coordinates[0]}
              text={"H"}
            />
          );
        })}
      </GoogleMapReact>
      {/* )} */}
    </div>
  );
};

export default Map;
