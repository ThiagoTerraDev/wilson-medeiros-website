import styles from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Header = () => {

  const [isMenuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const handleClickMenu = () => {
    setMenuActive(!isMenuActive);
  };

  const handleCloseMenuOnNavLinkClick = () => {
    setMenuActive(false);
  };

  const handleClickDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !location.pathname.includes("salestalks")) {
      setDropdownVisible(false);
    }

    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },);

  useEffect(() => {
    const handleResize = () => {
      if (location.pathname.includes("salestalks") && window.innerWidth > 1100 || isMenuActive) {
        setDropdownVisible(true);
      } else {
        setDropdownVisible(false);
      }
    };
  
    handleResize();
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location, isMenuActive]);

  return (
    <div>
      <header>
        <div className={`${styles.headerContent} container1`}>
          <NavLink to="/">
            <img className={styles.mainLogo} src="/logo-tagline-wm.svg" alt="Wilson Medeiros logo" />
          </NavLink>

          <button
            className={`${styles.menuButton} ${isMenuActive ? styles.menuActive : ""}`}
            onClick={handleClickMenu}
            aria-expanded={isMenuActive ? "true" : "false"}
          >
            <img src="/menu-mobile.svg" alt="" />
          </button>

          <div className={`${styles.overlay} ${isMenuActive ? styles.showOverlay : ""}`} onClick={handleClickMenu}></div>

          <nav
            className={`${styles.headerNav} ${isMenuActive ? styles.active : ""}`}
            ref={menuRef}
          >
            <NavLink onClick={handleCloseMenuOnNavLinkClick} to="/sobre">Sobre</NavLink>
            <p onClick={handleClickDropdown}>Sales Talks</p>
            <NavLink onClick={handleCloseMenuOnNavLinkClick} to="/porquecontratar">Por que contratar?</NavLink>
            <NavLink onClick={handleCloseMenuOnNavLinkClick} to="/contato">Contato</NavLink>
          </nav>

          <div ref={dropdownRef}
            className={`${styles.dropdownMenu} ${dropdownVisible ? styles.active : ""}`}>
            <NavLink to="/salestalksoque">O que é?</NavLink>
            <NavLink to="/salestalksmanifesto">Manifesto</NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
