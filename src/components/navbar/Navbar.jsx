import React from "react";
import { PrimaryButton } from "../buttons";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarLinks />

      <h1>Landie</h1>

      <PrimaryButton>Buy Now</PrimaryButton>
    </nav>
  );
};

export default Navbar;
