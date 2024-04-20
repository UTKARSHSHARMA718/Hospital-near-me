import { googleLogout } from "@react-oauth/google";
import { ABOUT, AUTH, HOME } from "../../../constants/routeNames";
import { USER_CREDENTIAL } from "../../../constants/const";

const useNavBar = () => {
  const NAVLINKS = [
    { label: "Home", href: HOME, isProtected: true },
    { label: "About", href: ABOUT, isShowAlways:true},
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

  return {
    NAVLINKS,
  };
};

export default useNavBar;
