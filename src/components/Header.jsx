import styles from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Header = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const handleClickDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !location.pathname.includes("salestalks")) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },);

  useEffect(() => {
    if (!location.pathname.includes("salestalks")) {
      setDropdownVisible(false);
    }
  }, [location]);

  return (
    <div>
      <header>
        <div className={`${styles.headerContent} container1`}>
          <NavLink to="/">
            <img src="/logo-tagline-wm.svg" alt="Wilson Medeiros logo" />
          </NavLink>
          <nav className={styles.headerNav} data-menu="list">
            <NavLink to="/sobre">Sobre</NavLink>
            <p onClick={handleClickDropdown}>Sales Talks</p>
            <NavLink to="/porquecontratar">Por que contratar?</NavLink>
            <NavLink to="/contato">Contato</NavLink>
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
