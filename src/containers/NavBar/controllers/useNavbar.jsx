import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

import Button from "../../../components/Button/Button";
import NavItems from "../../../components/NavItems/NavItems";
import { GlobalContext } from "../../../Context/GlobalContext";
import { ABOUT, AUTH, HOME } from "../../../constants/routeNames";
import { USER_CREDENTIAL } from "../../../constants/const";
import styles from "../Navbar.module.css";

const useNavBar = () => {
  const navigate = useNavigate();
  const { globalState, setGlobalState } = useContext(GlobalContext);
  const navigateToAuthAndClearGlobalState = () => {
    setGlobalState((prev) => {
      return {
        ...prev,
        user: null,
      };
    });
    navigate(AUTH);
  };

  const { user } = globalState;
  const NAVLINKS = [
    { label: "Home", href: HOME, isProtected: true },
    { label: "About", href: ABOUT, isShowAlways: true },
    { label: "Login", href: AUTH, isProtected: false },
    {
      label: "Logout",
      onClick: (callBack) => {
        googleLogout();
        localStorage?.removeItem(USER_CREDENTIAL);
        callBack?.();
      },
      isButton: true,
      isProtected: true,
    },
  ];

  const getRenderedNavItems = () => {
    return NAVLINKS?.map((item) => {
      if (item?.isProtected && !user && !item?.isShowAlways) {
        return null;
      }
      if (!item?.isProtected && user && !item?.isShowAlways) {
        return null;
      }
      if (item?.isButton) {
        return (
          <Button
            label={item?.label}
            onClick={() =>
              item?.onClick(
                item?.label === "Logout"
                  ? navigateToAuthAndClearGlobalState
                  : () => {}
              )
            }
            classes={styles.logoutButton}
            key={item?.label}
          />
        );
      }
      return (
        <NavItems label={item?.label} href={item?.href} key={item?.label} />
      );
    });
  };

  return {
    getRenderedNavItems,
  };
};

export default useNavBar;
