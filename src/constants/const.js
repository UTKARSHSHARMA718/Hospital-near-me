import { ABOUT, HOME } from "./routeNames";
import { googleLogout } from "@react-oauth/google";

export const NAVLINKS = [
  { label: "Home", href: HOME, isProtected: true },
  { label: "About", href: ABOUT, isProtected: false },
  {
    label: "Logout",
    onClick: () => {
      googleLogout();
      localStorage?.removeItem(USER_CREDENTIAL);
    },
    isButton: true,
    isProtected: true,
  },
];

export const COMPANY_NAME = "Hopital Near Me";
export const MOBILE_SCREEN_BREAK_POINT = 768;
export const USER_CREDENTIAL = "user-credential";
