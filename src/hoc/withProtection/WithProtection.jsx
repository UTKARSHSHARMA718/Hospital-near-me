import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { USER_CREDENTIAL } from "../../constants/const";
import { AUTH } from "../../constants/routeNames";
import styles from "./WithProtection.module.css"

function WithProtection(Component) {
  const ProtectedComponent = () => {
    const navigate = useNavigate();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      const user = localStorage?.getItem(USER_CREDENTIAL);
      if (!user) {
        setIsMounted(true);
        navigate(AUTH);
        return;
      }
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return <p className={styles.loading}>Loading....</p>;
    }

    return <Component />;
  };


  return ProtectedComponent;
}

export default WithProtection;
