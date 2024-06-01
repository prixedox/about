import React from "react";

function Skills() {
  return (
    <>
      <section id="skills">
        <h2 className="text-center m-5">Skills</h2>
        <div className="container">
          <table className="table">
            <tr>
              <th>Languages/Frameworks</th>
              <th>DevOps</th>
              <th>Data</th>
              <th>Python libraries</th>
              <th>Others</th>
            </tr>
            <tr>
              <td>Python</td>
              <td>Git</td>
              <td>SQL</td>
              <td>Numpy</td>
              <td>Parallel programming</td>
            </tr>
            <tr>
              <td>C#</td>
              <td>Docker</td>
              <td>Data cleaning</td>
              <td>Pandas</td>
              <td>CUDA</td>
            </tr>
            <tr>
              <td>Angular</td>
              <td>CI/CD</td>
              <td>Machine learning</td>
              <td>Scikit-learn</td>
              <td>Ray tracing</td>
            </tr>
            <tr>
              <td>C++</td>
              <td>Linux</td>
              <td>Data visualization</td>
              <td>Tensorflow/keras</td>
              <td>Evolutionary algorithms</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
}

export default Skills;
