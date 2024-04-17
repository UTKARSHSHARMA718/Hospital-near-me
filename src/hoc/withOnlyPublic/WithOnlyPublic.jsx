import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import { USER_CREDENTIAL } from "../../constants/const";
import { HOME } from "../../constants/routeNames";

function WithOnlyPublic(Component) {
  const PublicOnlyComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const user = localStorage?.getItem(USER_CREDENTIAL);
      if (user) {
        navigate(HOME);
      }
    }, []);

    return <Component />;
  };

  return PublicOnlyComponent;
}

export default WithOnlyPublic;
