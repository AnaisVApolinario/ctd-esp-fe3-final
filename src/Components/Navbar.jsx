//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useState } from "react";
import { Link } from "react-router-dom";
import { ModuleRoutes } from "../routes";

const Navbar = () => {
  const [state, setState] = useState(false);

  const toggleMenu = () => {
    setState(!state);
  };
  return (
    // <nav>
    //   {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
    //   {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    //   <button>Change theme</button>
    // </nav>
    <nav className="navbar">
      <div className="navbar__menu-icon" onClick={toggleMenu}>
        <i className="navbar__icon bx bx-menu"></i>
      </div>

      <h1 className="navbar__logo">Smiluxe</h1>
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
      <div className="navbar__theme-toggle">
        <i className="navbar__icon bx bx-moon" style={{ color: "white" }}></i>
      </div>
    </nav>
  );
};

export default Navbar;
