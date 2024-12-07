//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext, useState } from "react";
import { ContextGlobal } from "../Context/global.context";
import { Link } from "react-router-dom";
import { ModuleRoutes } from "../routes";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const [isMenu, setMenu] = useState(false);
  const { theme } = state;
 const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const toggleMenu = () => {
    setMenu(!isMenu);
  };
  return (
    <nav className="navbar">
      <div className="navbar__menu-icon" onClick={toggleMenu}>
        <i className="navbar__icon bx bx-menu"></i>
      </div>

      <Link to={ModuleRoutes.HOME} className="logo">
        <h1 className="navbar__logo">Smiluxe</h1>
      </Link>
      <div className={`navbar__links ${isMenu ? "navbar__links--active" : ""}`}>
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
        <i className={`navbar__icon ${theme? "bx bx-sun" : "bx bx-moon" }`} style={{ color: "white" }}></i>
      </div>
    </nav>
  );
};

export default Navbar;
