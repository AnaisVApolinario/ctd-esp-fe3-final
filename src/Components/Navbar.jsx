//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useState } from "react";
import { Link } from "react-router-dom";
import { ModuleRoutes } from "../routes";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [state, setState] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  const toggleMenu = () => {
    setState(!state);
  };
  return (
    <nav className="navbar">
      <div className="navbar__menu-icon" onClick={toggleMenu}>
        <i className="navbar__icon bx bx-menu"></i>
      </div>

      <Link to={ModuleRoutes.HOME} className="logo">
        <h1 className="navbar__logo">Smiluxe</h1>
      </Link>
      <div className={`navbar__links ${state ? "navbar__links--active" : ""}`}>
        <Link to={ModuleRoutes.HOME} className="navbar__link">
          Home
        </Link>
        <Link to={ModuleRoutes.CONTACT} className="navbar__link">
          Contact
        </Link>
        <Link to={ModuleRoutes.FAV} className="navbar__link">
          Favs
        </Link>
      </div>
      <div className="navbar__theme-toggle"onClick={toggleTheme} role="button">
        <i className={`navbar__icon ${isDarkTheme? "bx bx-sun" : "bx bx-moon" }`} style={{ color: "white" }}></i>
      </div>
    </nav>
  );
};

export default Navbar;
