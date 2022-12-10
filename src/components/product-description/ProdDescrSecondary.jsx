import React from "react";
import prodDescrIcon from "../../assets/images/prod-descr-secondary-icon.png";

const ProdDescrSecondary = () => {
  return (
    <div className="prod-descr-secondary-wrapper">
      <div>
        <img src={prodDescrIcon} alt="Prod Desc Icon" />
      </div>
      <h1>Title Goes Here</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.
      </p>
    </div>
  );
};

export default ProdDescrSecondary;
