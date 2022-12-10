import React from "react";
import { PrimaryButton } from "../buttons";
import rectangleBg from "../../assets/images/rectangle.png";

const PricingPlan = () => {
  return (
    <div className="pricing-plan-container">
      <img src={rectangleBg} alt="Rectangle" />
      <div className="pricing-plan-container-item1">
        <h1>A Price To Suit Everyone</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
      </div>
      <div className="pricing-plan-container-item2">
        <h2>$40</h2>
        <p>UI Design Kit</p>
      </div>
      <div className="pricing-plan-container-item3">
        <p>See, One price. Simple.</p>
        <PrimaryButton>Purchase Now</PrimaryButton>
      </div>
    </div>
  );
};

export default PricingPlan;
