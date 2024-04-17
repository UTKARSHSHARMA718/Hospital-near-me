import React, { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import Button from "../../components/Button/Button";
import NavItems from "../../components/NavItems/NavItems";
import useWindowDimension from "../../hooks/useWindowDimension";
import { GlobalContext } from "../../Context/GlobalContext";
import {
  COMPANY_NAME,
  MOBILE_SCREEN_BREAK_POINT,
  NAVLINKS,
} from "../../constants/const";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { windowSize } = useWindowDimension();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { globalState } = useContext(GlobalContext);
  const { user } = globalState;
  const isMobileScreen = windowSize?.width <= MOBILE_SCREEN_BREAK_POINT;

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  return (
    <nav className={styles.nav}>
      <p className={styles.logo}>{COMPANY_NAME}</p>
      {!isMobileScreen && (
        <div className={styles.navList}>
          {NAVLINKS?.map((item) => {
            if (item?.isProtected && !user) {
              return null;
            }
            if (item?.isButton) {
              return (
                <Button
                  label={item?.label}
                  onClick={item?.onClick}
                  classes={styles.logoutButton}
                  key={item?.label}
                />
              );
            }
            return (
              <NavItems
                label={item?.label}
                href={item?.href}
                key={item?.label}
              />
            );
          })}
        </div>
      )}
      {isMobileScreen && (
        <div className={styles.mobileMenuContainer}>
          <RxHamburgerMenu
            size={30}
            onClick={toggleMobileMenu}
            className={styles.burgerIcon}
          />
          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              {NAVLINKS?.map((item) => {
                return (
                  <NavItems
                    label={item?.label}
                    href={item?.href}
                    key={item?.label}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
