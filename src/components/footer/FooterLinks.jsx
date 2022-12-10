import React from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes/routes";

const FooterLinks = () => {
  const { home, about, contact } = appRoutes;

  return (
    <ul className="footer-links-wrapper">
      <li className="footer-links">
        <Link to={home}>Home</Link>
      </li>
      <li className="footer-links">
        <Link to={about}>About</Link>
      </li>
      <li className="footer-links">
        <Link to={contact}>Contact</Link>
      </li>
    </ul>
  );
};

export default FooterLinks;
