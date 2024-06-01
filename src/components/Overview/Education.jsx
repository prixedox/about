import React from "react";
import "./Education.css";

function Education() {
  return (
    <>
      <section id="education">
        <h2 className="text-center">Education</h2>
        <div className="container">
          <div class="row">
            <div class="col">
              <p>
                <b>2020-2022</b>
              </p>
              <p>M.Sc. in Computer Science</p>
              <div class="timeline-horizontal-group">
                <div class="square"></div>
                <span class="timeline-horizontal-line"></span>
              </div>
              <p>Technical University of Ostrava</p>
            </div>
            <div class="col">
              <p>
                <b>2017-2020</b>
              </p>
              <p>B.Sc. in Computer Science</p>
              <div class="timeline-horizontal-group">
                <div class="square"></div>
                <span class="timeline-horizontal-line"></span>
              </div>
              <p>Technical University of Ostrava</p>
            </div>
            <div class="col">
              <p>
                <b>2013-2017</b>
              </p>
              <p>Information technology</p>
              <div class="timeline-horizontal-group">
                <div class="square"></div>
                <span class="timeline-horizontal-line"></span>
              </div>
              <p>Secondary industrial school in Frýdek-Místek</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
