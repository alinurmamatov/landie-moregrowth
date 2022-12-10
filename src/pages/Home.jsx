import React from "react";
import { Hero } from "../components/hero";
import PricingPlan from "../components/pricing-plan/PricingPlan";
import { ProductDescription } from "../components/product-description";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductDescription />
      <PricingPlan />
    </>
  );
};

export default Home;
