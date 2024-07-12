import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div className={`${styles.headerContent} container1`}>
          <NavLink to="/">
            <img src="/logo-tagline-wm.svg" alt="Wilson Medeiros logo" />
          </NavLink>
          <nav className={styles.headerNav} data-menu="list">
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/salestalks">Sales Talks</NavLink>
            <NavLink to="/porquecontratar">Por que contratar?</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
