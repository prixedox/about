import React from "react";
import githubIcon from "../../icons/github.png";
import linkedinIcon from "../../icons/linkedin.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="wrapper" id="home">
        <div className="overlay">
          <div className='container-fluid d-flex align-items-center justify-content-center center-container'>
            <div className="heading-wrapper">
              <h1 className="nameText">Martin Ševčík</h1>
              <h3>
                <span className="blueText">Software developer</span>
                <span className="separator">
                  <span className="whiteText">{" "}|{" "}</span>
                </span>
                <span class="mobile-line-break"></span>
                <span className="pinkText">Data&nbsp;scientist</span>
              </h3>
              <div>
                <a href="https://github.com/prixedox">
                  <img src={githubIcon} alt="Github" width="64" height="64" />
                </a>
                <a href="https://www.linkedin.com/in/martin-%C5%A1ev%C4%8D%C3%ADk-947105167/">
                  <img
                    src={linkedinIcon}
                    alt="Linkedin"
                    width="64"
                    height="64"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
