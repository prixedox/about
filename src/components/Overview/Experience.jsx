import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <>
      <section id='experience'>
        <div className='vertical-line'></div>
        <div className='header-center'>
          <h2>Experience</h2>
        </div>
        <div className='vertical-list'>
          <div className='horizontal-triplet'>
            <div className='triplet-item'>
              Software Developer, Siemens s.r.o. / Innomotics s.r.o.
              August 2022 - Present
            </div>
            <div className='triplet-item'>
              <li>Creating solutions based on factory requirements</li>
              <li>Full-stack web development (Angular/C#/Python/SQL)</li>
              <li>Data collection, data cleaning, machine learning, visualization in a web app</li>
            </div>
          </div>
          <div className='horizontal-triplet'>
            <div className='triplet-item'>
              Full-stack developer, ArcelorMittal Ostrava a.s. / Liberty Ostrava a.s.
              February 2019 - July 2022
            </div>
            <div className='triplet-item'>
              <li>New web application creation</li>
              <li>Front-end modernization of old existing website</li>
              <li>Management of full-stack website changes</li>
            </div>
          </div>
          <div className='horizontal-triplet'>
            <div className='triplet-item'>
              Data analyst, IDC CEMA s.r.o.
              September 2021 - December 2021
            </div>
            <div className='triplet-item'>
              <li>Web scraping information about eshop products</li>
              <li>Subsequent automatization and computation</li>
            </div>
          </div>
        </div>
        {/* <ul>
            <li>Software Developer, Siemens s.r.o. / Innomotics s.r.o., August 2022 - Present</li>
            <ul>
              <li>Creating solutions based on factory requirements</li>
              <li>Full-stack web development (Angular/C#/Python/SQL)</li>
              <li>Data collection, data cleaning, machine learning, visualization in a web app</li>
            </ul>
            <li>Full-stack developer, ArcelorMittal Ostrava a.s. / Liberty Ostrava a.s., February 2019 - July 2022</li>
            <ul>
              <li>New web application creation</li>
              <li>Front-end modernization of old existing website</li>
              <li>Management of full-stack website changes</li>
            </ul>
            <li>Data analyst, IDC CEMA s.r.o., September 2021 - December 2021</li>
            <ul>
              <li>Web scraping information about eshop products</li>
              <li>Subsequent automatization and computation</li>
            </ul>
          </ul> */}
      </section>
    </>
  );
}

export default Experience;