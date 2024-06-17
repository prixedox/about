import React from "react";
import "./About.css";
import myImage from "../../icons/meMS.jpeg";

function About() {
  return (
    <>
      <section id="about">
        <h2 className="text-center mb-5">About</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                Hey there! I'm Martin, and I'm excited to share a bit about
                myself with you.
              </p>
              <p>
                I'm passionate about staying active and healthy. You'll often
                find me at the gym or diving into a challenging CrossFit
                session. It's not just about physical fitness for me; it's a way
                to stay mentally sharp and push myself beyond limits.
              </p>
              <p>
                When I'm not sweating it out, I love spending quality time with
                friends. Whether it's catching up over coffee, playing video
                games, or simply enjoying each other's company, these moments
                are what make life truly meaningful.
              </p>
              <p>
                I'm also big on personal growth. I enjoy diving into books that
                expand my perspective, taking online courses that challenge me,
                and watching YouTube videos that teach me something new.
                Continuous learning is key to evolving both personally and
                professionally.
              </p>
              <p>
                So, that's a glimpse into who I am - someone who values health
                and fitness, relationships, and is always eager to learn and
                grow. Thanks for taking the time to get to know me a little
                better. Let's connect and see where our paths may cross!
              </p>
            </div>
            <div className="col-md-4 photo-image">
              <img src={myImage} alt="me" className="img-fluid shadow-lg" />
            </div>
          </div>
        </div>
        <div className="vh25"></div>
      </section>
    </>
  );
}

export default About;
