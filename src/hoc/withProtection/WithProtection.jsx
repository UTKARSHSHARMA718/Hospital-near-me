import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { USER_CREDENTIAL } from "../../constants/const";
import { AUTH } from "../../constants/routeNames";

function WithProtection(Component) {
  const ProtectedComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const user = localStorage?.getItem(USER_CREDENTIAL);
      if (!user) {
        navigate(AUTH);
      }
    }, []);

    return <Component />;
  };

  return ProtectedComponent;
}

export default WithProtection;
