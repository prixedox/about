import React from 'react';
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