import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { USER_CREDENTIAL } from "../../constants/const";
import { HOME } from "../../constants/routeNames";
import styles from "./WithOnlyPublic.module.css"

function WithOnlyPublic(Component) {
  const PublicOnlyComponent = () => {
    const navigate = useNavigate();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      const user = localStorage?.getItem(USER_CREDENTIAL);
      if (user) {
        setIsMounted(true);
        navigate(HOME);
        return;
      }
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return <p className={styles.loading}>Loading....</p>;
    }

    return <Component />;
  };

  return PublicOnlyComponent;
}

export default WithOnlyPublic;
