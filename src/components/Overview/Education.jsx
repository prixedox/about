import React from "react";
import "./Education.css";

function Education() {
  return (
    <>
      <section id="education">
        <h2 className="text-center m-5">Education</h2>
        <div className="container">
          <div class="row">
            <div class="col">
              <p className="dateText">2020-2022</p>
              <p>M.Sc. in Computer Science</p>
              <div class="timeline-horizontal-group mb-3">
                <div class="square"></div>
                <span class="timeline-horizontal-line"></span>
              </div>
              <p>Technical University of Ostrava</p>
            </div>
            <div class="col">
              <p className="dateText">2017-2020</p>
              <p>B.Sc. in Computer Science</p>
              <div class="timeline-horizontal-group mb-3">
                <div class="square"></div>
                <span class="timeline-horizontal-line"></span>
              </div>
              <p>Technical University of Ostrava</p>
            </div>
            <div class="col">
              <p className="dateText">2013-2017</p>
              <p>Information technology</p>
              <div class="timeline-horizontal-group mb-3">
                <div class="square"></div>
                <span class="timeline-horizontal-line"></span>
              </div>
              <p>Secondary industrial school in Frýdek-Místek</p>
            </div>
          </div>
          <div className="vh25"></div>
        </div>
      </section>
    </>
  );
}

export default Education;
