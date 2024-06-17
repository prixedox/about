import React from 'react';
import About from './About';
import Education from './Education'
import Experience from './Experience';
import Skills from './Skills';
import Portfolio from '../Portfolio/Portfolio'
import './Overview.css';

function Overview() {
  return (
    <>
      <div className="overview">
        <hr />
        <About />
        <hr />
        <Education />
        <hr />
        <Experience />
        <hr />
        <Skills />
        <hr />
        <Portfolio />
      </div>
    </>
  );
}

export default Overview;