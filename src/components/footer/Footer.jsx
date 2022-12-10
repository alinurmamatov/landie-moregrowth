import React from "react";
import FooterLinks from "./FooterLinks";
import FooterMainPart from "./FooterMainPart";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="footer-container">
      <FooterMainPart />

      <div className="footer-bottom-part-wrapper">
        <FooterLinks />
        <SocialMediaIcons />
      </div>
    </footer>
  );
};

export default Footer;
