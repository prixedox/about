import React from 'react';
import facebookIcon from '../../icons/facebook.png'
import instagramIcon from '../../icons/instagram.png'
import githubIcon from '../../icons/github.png'
import linkedinIcon from '../../icons/linkedin.png'
import youtubeIcon from '../../icons/youtube.png'
import './Home.css';

function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="align-middle">
          <h1>Martin Ševčík</h1>
          <h3>Software developer | Data scientist</h3>
          <div>
            <a href="https://github.com/prixedox">
              <img src={githubIcon} alt="Github" width="32" height="32" />
            </a>
            <a href="https://www.linkedin.com/in/martin-%C5%A1ev%C4%8D%C3%ADk-947105167/">
              <img src={linkedinIcon} alt="Linkedin" width="32" height="32" />
            </a>
            {/* <a href="google.com">
              <img src={facebookIcon} alt="Facebook" width="32" height="32" />
            </a>
            <a href="google.com">
              <img src={instagramIcon} alt="Instagram" width="32" height="32" />
            </a>
            <a href="google.com">
              <img src={youtubeIcon} alt="Youtube" width="32" height="32" />
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;