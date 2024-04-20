import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import useWindowDimension from "../../hooks/useWindowDimension";
import useNavBar from "./controllers/useNavbar";
import Logo from "../../assets/images/logo.png";
import { MOBILE_SCREEN_BREAK_POINT } from "../../constants/const";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { windowSize } = useWindowDimension();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isMobileScreen = windowSize?.width <= MOBILE_SCREEN_BREAK_POINT;
  const { getRenderedNavItems } = useNavBar();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={Logo} alt="Company Logo" />
      {!isMobileScreen && (
        <div className={styles.navList}>{getRenderedNavItems()}</div>
      )}
      {isMobileScreen && (
        <div className={styles.mobileMenuContainer}>
          <RxHamburgerMenu
            size={30}
            onClick={toggleMobileMenu}
            className={styles.burgerIcon}
          />
          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>{getRenderedNavItems(  )}</div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
