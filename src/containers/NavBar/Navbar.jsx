import React, { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import Button from "../../components/Button/Button";
import NavItems from "../../components/NavItems/NavItems";
import useWindowDimension from "../../hooks/useWindowDimension";
import useNavBar from "./controllers/useNavbar";
import Logo from "../../assets/images/logo.png";
import { GlobalContext } from "../../Context/GlobalContext";
import { MOBILE_SCREEN_BREAK_POINT } from "../../constants/const";
import { useNavigate } from "react-router";
import { AUTH } from "../../constants/routeNames";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { windowSize } = useWindowDimension();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { globalState } = useContext(GlobalContext);
  const navigate = useNavigate();

  const { user } = globalState;
  const isMobileScreen = windowSize?.width <= MOBILE_SCREEN_BREAK_POINT;
  const { NAVLINKS } = useNavBar();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const navigateToAuth = () => navigate(AUTH);
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={Logo} alt="Company Logo" />
      {!isMobileScreen && (
        <div className={styles.navList}>
          {NAVLINKS?.map((item) => {
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
                      item?.label === "Logout" ? navigateToAuth : () => {}
                    )
                  }
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
                if (item?.isProtected && !user && !item?.isShowAlways) {
                  return null;
                }
                if (!item?.isProtected && user && !item?.isShowAlways) {
                  return null;
                }
                if (item?.isButton) {
                  return (
                    <>
                      <hr className={styles.horizontalLine} />
                      <Button
                        label={item?.label}
                        onClick={() =>
                          item?.onClick(
                            item?.label === "Logout" ? navigateToAuth : () => {}
                          )
                        }
                        key={item?.label}
                        classes={styles.logoutButton}
                      />
                    </>
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
