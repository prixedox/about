import React from 'react';
import Education from './Education'
import Experience from './Experience';
import Skills from './Skills';
import Portfolio from '../Portfolio/Portfolio'

function Overview() {
  return (
    <>
      <div>
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
      </div>
    </>
  );
}

export default Overview;