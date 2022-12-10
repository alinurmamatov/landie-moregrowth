import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div className="primary-button-wrapper">
      <button className="primary-button">{children}</button>
    </div>
  );
};

export default PrimaryButton;
