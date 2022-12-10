import React from "react";
import ProdDescrSecondary from "./ProdDescrSecondary";
import ProdDescrText from "./ProdDescrText";
import girlMobile from "../../assets/images/girl-mobile-img.png";
import girlMail from "../../assets/images/girl-mail-img.png";

const ProductDescription = () => {
  return (
    <>
      <div className="prod-description-container">
        <div className="prod-description-top">
          <img
            src={girlMobile}
            alt="Girl mobile"
            className="prod-descr-topBg"
          />
          <ProdDescrText />
          <div className="prod-description-top-bottom">
            <ProdDescrSecondary />
            <ProdDescrSecondary />
          </div>
        </div>
        <div className="prod-description-bottom">
          <img src={girlMail} alt="Girl Mail" />
          <ProdDescrText />
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
