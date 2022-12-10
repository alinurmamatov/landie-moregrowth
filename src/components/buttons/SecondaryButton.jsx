import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <div>
      <button className="secondary-button">{children}</button>
    </div>
  );
};

export default SecondaryButton;
