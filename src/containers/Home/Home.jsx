import { useContext, useState } from "react";
import toast from "react-hot-toast";

import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Map from "../../components/Map/Map";
import Select from "../../components/Select/Select";
import useUserLocation from "../../hooks/useUserLocation";
import { GlobalContext } from "../../Context/GlobalContext";
import {
  DEFAULT_CENTER,
  MAXIMUM_NEABY_HOSPITALS_OPTIONS,
  SEARCH_RADIUS_OPTIONS,
} from "../../constants/const";
import styles from "./Home.module.css";

const Home = () => {
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInfoBox, setSelectedInfoBox] = useState(-1);
  const [searchingRadius, setSearchingRadius] = useState(10);
  const [maxHospital, setMaxHospital] = useState(20);

  // console.log({googleId________import: import.meta.env});
  // console.log({googleId________process: process.env});

  const { globalState } = useContext(GlobalContext);
  const { user } = globalState;

  const { location, getUserCurrentLocation, setLocation } = useUserLocation({
    isGetUserLocationOnInitialLoad: false,
  });
  const isLatLngAvailabel = location?.lat && location?.lng;

  const getNearbyHospitals = async (latitute, longitute) => {
    setIsLoading(true);
    try {
      let res = await fetch(
        `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${longitute},${latitute},${searchingRadius*1000}&bias=proximity:${longitute},${latitute}&limit=${maxHospital}&apiKey=${process?.env?.REACT_APP_GEOAPIFY_API_KEY}`
      );
      res = await res?.json();
      setHospitals(res?.features);
      toast?.success("Loaded nearby hospitals");
    } catch (err) {
      toast?.error(err?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getHospitalsOnMap = () => {
    getUserCurrentLocation(getNearbyHospitals);
  };

  return (
    <div className={styles.container}>
      <Heading
        label={`Hi ${user?.name}, wanna find near by Hospitals? go ahead`}
      />
      <Map
        coordinates={isLatLngAvailabel ? location : DEFAULT_CENTER}
        hospitals={hospitals}
        key={`${hospitals?.length} ${selectedInfoBox}`}
        {...{ setLocation, selectedInfoBox, setSelectedInfoBox }}
      />
      <div className={styles.optionsContainer}>
        <Select
          options={MAXIMUM_NEABY_HOSPITALS_OPTIONS}
          label="Max-Hospital to be search for:"
          onChange={(event)=>setMaxHospital(+event?.target?.value)}
          value={maxHospital}
          />
        <Select
          options={SEARCH_RADIUS_OPTIONS}
          label="Searching Area Radius (in km):"
          onChange={(event)=>setSearchingRadius(+event?.target?.value)}
          value={searchingRadius}
        />
      </div>
      <Button
        label="Get nerby Hospitals"
        onClick={getHospitalsOnMap}
        disabled={isLoading}
      />
    </div>
  );
};

export default Home;
