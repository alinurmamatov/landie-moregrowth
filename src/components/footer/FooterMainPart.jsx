import React from "react";
import { PrimaryButton } from "../buttons";

const FooterMainPart = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-main-part">
      <p>&copy;{year} Your Company</p>
      <h1>Landie</h1>
      <PrimaryButton>Purchase now</PrimaryButton>
    </div>
  );
};

export default FooterMainPart;
