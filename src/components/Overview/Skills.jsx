import React from "react";
import "./Skills.css";
import ProgressBar from "../Shared/ProgressBar/ProgressBar";

function Skills() {
  const progressBarStyle = {
    width: 25 + "%",
    backgroundColor: "#ea00d9",
    borderRadius: "",
  };

  const progressStyle = { background: "white", borderRadius: "0" };

  return (
    <>
      <section id="skills">
        <h2 className="text-center m-5">Skills</h2>
        <div className="container text-white">
          <div className="row">
            <div className="col-6">
              <div className="h5 mt-4">Languages/Frameworks</div>
              <div className="mb-4">
                Python
                <ProgressBar value="90" />
              </div>
              <div className="mb-4">
                C#
                <ProgressBar value="80" />
              </div>
              <div className="mb-4">
                Angular
                <ProgressBar value="60" />
              </div>
              <div className="mb-4">
                C++
                <ProgressBar value="51" />
              </div>
            </div>
            <div className="col-6">
              <div className="h5 mt-4">DevOps</div>
              <div className="mb-4">
                Git
                <ProgressBar value="60" />
              </div>
              <div className="mb-4">
                Docker
                <ProgressBar value="55" />
              </div>
              <div className="mb-4">
                CI/CD
                <ProgressBar value="45" />
              </div>
              <div className="mb-4">
                Linux
                <ProgressBar value="65" />
              </div>
            </div>
            <div className="col-6">
              <div className="h5 mt-4">Data</div>
              <div className="mb-4">
                SQL
                <ProgressBar value="80" />
              </div>
              <div className="mb-4">
                Data cleaning
                <ProgressBar value="75" />
              </div>
              <div className="mb-4">
                Machine learning
                <ProgressBar value="85" />
              </div>
              <div className="mb-4">
                Data visualization
                <ProgressBar value="70" />
              </div>
            </div>
            <div className="col-6">
              <div className="h5 mt-4">Python libraries</div>
              <div className="mb-4">
                Numpy
                <ProgressBar value="85" />
              </div>
              <div className="mb-4">
                Pandas
                <ProgressBar value="95" />
              </div>
              <div className="mb-4">
                Scikit-learn
                <ProgressBar value="82" />
              </div>
              <div className="mb-4">
                Tensorflow/keras
                <ProgressBar value="78" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
