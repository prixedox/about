import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <>
      <section id="experience">
        <h2 className="text-center m-5">Experience</h2>
        <div className="container">
          <div className="row mb-5">
            <div className="col">
              Software Developer, Siemens s.r.o. / Innomotics s.r.o. August 2022
              - Present
            </div>
            <div className="col justify-content-center d-flex">
              <div class="square">
              </div>
            </div>
            <div className="col">
              <li>Creating solutions based on factory requirements</li>
              <li>Full-stack web development (Angular/C#/Python/SQL)</li>
              <li>
                Data collection, data cleaning, machine learning, visualization
                in a web app
              </li>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col">
              Full-stack developer, ArcelorMittal Ostrava a.s. / Liberty Ostrava
              a.s. February 2019 - July 2022
            </div>
            <div className="col justify-content-center d-flex">
              <div class="square"></div>
            </div>
            <div className="col">
              <li>New web application creation</li>
              <li>Front-end modernization of old existing website</li>
              <li>Management of full-stack website changes</li>
            </div>
          </div>
          <div className="row">
            <div className="col">
              Data analyst, IDC CEMA s.r.o. September 2021 - December 2021
            </div>
            <div className="col justify-content-center d-flex">
              <div class="square"></div>
            </div>
            <div className="col">
              <li>Web scraping information about eshop products</li>
              <li>Subsequent automatization and computation</li>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
