import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import Marker from "../Marker/Marker";
import mapStyles from "./mapStyles";
import styles from "./Map.module.css";

const Map = ({
  coordinates,
  hospitals,
  selectedInfoBox,
  setSelectedInfoBox,
}) => {
  const [mapCenter, setMapCenter] = useState(coordinates);

  return (
    <div className={styles.container} onBlur={() => setSelectedInfoBox(-1)}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process?.env?.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={mapCenter}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(value) => {
          setMapCenter({
            lat: value?.center?.lat,
            lng: value?.center?.lng,
          });
        }}
      >
        {hospitals?.map((hospital, index) => {
          return (
            <Marker
              onClick={() => {
                setMapCenter({
                  lat: hospital?.geometry?.lat,
                  lng: hospital?.geometry?.lng,
                });
                setSelectedInfoBox(index);
              }}
              data={hospital?.properties}
              key={index}
              lat={hospital?.geometry?.coordinates[1]}
              lng={hospital?.geometry?.coordinates[0]}
              text={"H"}
              isShowInfoBox={selectedInfoBox === index}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
