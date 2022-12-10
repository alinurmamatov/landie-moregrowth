import React from "react";
import { PrimaryButton, SecondaryButton } from "../buttons";

const HeroText = () => {
  return (
    <div className="hero-text-container">
      <h1>Introduce Your Product Quickly & Effectively</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
      <div className="hero-buttons-wrapper">
        <PrimaryButton>Purchase UI Kit</PrimaryButton>
        <SecondaryButton>Learn More</SecondaryButton>
      </div>
    </div>
  );
};

export default HeroText;
