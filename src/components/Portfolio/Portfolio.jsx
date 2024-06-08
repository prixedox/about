import React from "react";
import PortfolioTRC from "./PortfolioTRC";
import PortfolioIMS from "./PortfolioIMS";
import PortfolioPP from "./PortfolioPP";

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <h2 className="text-center m-5">Job projects</h2>
        <div className="container">
          <PortfolioTRC />
          <PortfolioIMS />
          <PortfolioPP />
        </div>
      </section>
    </>
  );
}

export default Portfolio;
