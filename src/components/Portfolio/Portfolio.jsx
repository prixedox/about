import React from 'react';
import PortfolioTRC from './PortfolioTRC';
import PortfolioIMS from './PortfolioIMS';
import PortfolioPP from './PortfolioPP';
import PortfolioSP1 from './PortfolioSP1';
import PortfolioSP2 from './PortfolioSP2';
import PortfolioSP3 from './PortfolioSP3';

function Portfolio() {
  return (
    <>
      <section id='portfolio'>
        <h2 className='text-center'>Job projects</h2>
        <div className='container'>
        <PortfolioTRC />
        <PortfolioIMS />
        <PortfolioPP />
        </div>
        {/* <h2>Personal projects</h2>
      <PortfolioSP1 />
      <PortfolioSP2 />
      <PortfolioSP3 /> */}
      </section>
    </>
  );
}

export default Portfolio;