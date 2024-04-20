import { FaHospitalAlt } from "react-icons/fa";
import { GiHospitalCross } from "react-icons/gi";
import { TbHospitalCircle } from "react-icons/tb";
import { FaHospitalUser } from "react-icons/fa6";

export const COMPANY_NAME = "Hopital Near Me";
export const MOBILE_SCREEN_BREAK_POINT = 768;
export const USER_CREDENTIAL = "user-credential";

export const INFO_POINTS = [
  {
    text: `"Hospital Near Me" is a web app that allows its users to search for all the nearby hospitals in their area.`,
    icon: FaHospitalAlt,
  },
  {
    text: "Users can also change the radius size for a more concentrated or specific area search.",
    icon: GiHospitalCross,
  },
  {
    text: "Hospital Near Me has helped millions of people by providing aid at the right time by pinpointing the exact locations of hospitals near the user location.",
    icon: TbHospitalCircle,
  },
  {
    text: "Now, we are working to take Hospital Near Me one step ahead by providing aid from doctors to your home in a fast and efficient way without compromising on the quality of treatment.",
    icon: FaHospitalUser,
  },
];
