import { useContext, useState } from "react";
import toast from "react-hot-toast";

import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Map from "../../components/Map/Map";
import useUserLocation from "../../hooks/useUserLocation";
import { GlobalContext } from "../../Context/GlobalContext";
import { DEFAULT_CENTER } from "../../constants/const";
import styles from "./Home.module.css";

const Home = () => {
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInfoBox, setSelectedInfoBox] = useState(-1);

  const { globalState } = useContext(GlobalContext);
  const { user } = globalState;

  const { location, getUserCurrentLocation, setLocation } = useUserLocation({
    isGetUserLocationOnInitialLoad: false,
  });
  const isLatLngAvailabel = location?.lat && location?.lng;
  const GEOAPIFY_API_KEY = process?.env?.REACT_APP_GEOAPIFY_API_KEY;
  const RADIUS = 10000;
  const LIMIT = 20;

  const getNearbyHospitals = async (latitute, longitute) => {
    setIsLoading(true);
    try {
      let res = await fetch(
        `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${longitute},${latitute},${RADIUS}&bias=proximity:${longitute},${latitute}&limit=${LIMIT}&apiKey=${GEOAPIFY_API_KEY}`
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
      <Button
        label="Get nerby Hospitals"
        onClick={getHospitalsOnMap}
        disabled={isLoading}
      />
    </div>
  );
};

export default Home;
