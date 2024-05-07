import React from 'react';

function Overview() {
  return (
    <>
      <div>
        <section>
          <h2>Education</h2>
          <ul>
            <li><b>Information technology with data science specialization, MSc, 2017-2022</b></li>
            <li>Technical University of Ostrava</li>
            <li><b>Information technology with school-leaving exam, 2013-2017</b></li>
            <li>Secondary industrial school in Frýdek-Místek</li>
          </ul>
        </section>
        <section>
          <h2>Experience</h2>
          <ul>
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
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <table>
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
        </section>
      </div>
    </>
  );
}

export default Overview;