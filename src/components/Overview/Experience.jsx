import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <>
      <section id="experience">
        <h2 className="text-center m-5">Experience</h2>
        <div className="container">
          <div>
            <div className="row">
              <div className="col companyPositionText">
                <p>Siemens s.r.o. / Innomotics s.r.o.</p>
                <p className="ms-3">Software Developer</p>
              </div>
              <div className="col dateText">August 2022 - Present</div>
            </div>
            <div className="ms-5 mt-2 mb-5">
              <p>Creating solutions based on factory requirements</p>
              <p>Full-stack web development (Angular/C#/Python/SQL)</p>
              <p>
                Data collection, data cleaning, machine learning, visualization
                in a web app
              </p>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col companyPositionText">
                <p>ArcelorMittal Ostrava a.s. / Liberty Ostrava a.s.</p>
                <p className="ms-3">Full-stack developer</p>
              </div>
              <div className="col dateText">February 2019 - July 2022</div>
            </div>
            <div className="ms-5 mt-2 mb-5">
              <p>New web application creation</p>
              <p>Front-end modernization of old existing website</p>
              <p>Management of full-stack website changes</p>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col companyPositionText">
                <p>IDC CEMA s.r.o.</p>
                <p className="ms-3">Data analyst</p>
              </div>
              <div className="col dateText">September 2021 - December 2021</div>
            </div>
            <div className="ms-5 mt-2 mb-5 vh25">
              <p>Web scraping information about eshop products</p>
              <p>Subsequent automatization and computation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
