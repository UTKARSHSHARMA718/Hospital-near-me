import { useState } from "react";
import toast from "react-hot-toast";

import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Map from "../../components/Map/Map";
import useUserLocation from "../../hooks/useUserLocation";
import styles from "./Home.module.css";

const Home = () => {
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { location, getUserCurrentLocation } = useUserLocation({
    isGetUserLocationOnInitialLoad: true,
  });
  const isLatLngAvailabel = location?.lat && location?.lng;
  const GEOAPIFY_API_KEY = process?.env?.REACT_APP_GEOAPIFY_API_KEY;
  const RADIUS = 10000;
  const LIMIT = 20;

  const getNearbyHospitals = async () => {
    setIsLoading(true);
    try {
      let res = await fetch(
        `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${location?.lng},${location?.lat},${RADIUS}&bias=proximity:${location?.lng},${location?.lat}&limit=${LIMIT}&apiKey=${GEOAPIFY_API_KEY}`
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

  return (
    <div className={styles.container}>
      <Heading label="Home"/>
      {!!hospitals?.length && <Map coordinates={{lat: 28.6511181, lng: 77.4459297 }} hospitals={hospitals}/>}
      <Button label="Get nerby Hospitals" onClick={getNearbyHospitals} disabled={isLoading}/>
    </div>
  );
};

export default Home;
