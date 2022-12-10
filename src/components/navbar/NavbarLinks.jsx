import React from "react";
import { NavLink } from "react-router-dom";
import { appRoutes } from "../../routes/routes";

const NavbarLinks = () => {
  const { home, about, contact } = appRoutes;

  return (
    <ul className="navbar-links-wrapper">
      <li className="navbar-links">
        <NavLink
          to={home}
          className={({ isActive }) => (isActive ? "navbar-link-active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="navbar-links">
        <NavLink
          to={about}
          className={({ isActive }) => (isActive ? "navbar-link-active" : "")}
        >
          About
        </NavLink>
      </li>
      <li className="navbar-links">
        <NavLink
          to={contact}
          className={({ isActive }) => (isActive ? "navbar-link-active" : "")}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarLinks;
