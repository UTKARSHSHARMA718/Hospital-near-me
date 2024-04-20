import { useEffect, useState } from "react";

const useUserLocation = ({ isGetUserLocationOnInitialLoad = false }) => {
  const [location, setLocation] = useState({
    lat: null,
    lng: null,
  });

  const getUserCurrentLocation = (callBack) => {
    navigator?.geolocation?.getCurrentPosition((position) => {
      setLocation({
        lat: position?.coords?.latitude,
        lng: position?.coords?.longitude,
      });
      callBack?.(position?.coords?.latitude, position?.coords?.longitude);
    });
  };

  useEffect(() => {
    if (isGetUserLocationOnInitialLoad) {
      getUserCurrentLocation();
    }
  }, []);

  return { location, getUserCurrentLocation, setLocation };
};

export default useUserLocation;
