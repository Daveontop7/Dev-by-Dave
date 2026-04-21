import React from 'react';
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <p className="section-tag">ABOUT ME</p>
        <h2>
          Passionate About <br />
          Creating <span>Exceptional</span> <br />
          <span>Web Solutions</span>
        </h2>

        <p className="about-text">
          Hey there! I'm Dave, the founder of Dev by Dave. With over 5 years
          of experience in web development, I specialize in transforming ideas
          into stunning, high-performance digital experiences that drive real
          business results.
        </p>

        <p className="about-text">
          Whether you need a sleek landing page, a complex web application, or
          anything in between, I bring a perfect blend of technical expertise
          and creative vision to every project.
        </p>

        <div className="about-features">
          <div>Custom Development</div>
          <div>Responsive Design</div>
          <div>SEO Optimized</div>
          <div>Fast Performance</div>
        </div>
      </div>

      <div className="about-right">
        <div className="image-card">
          <img src="/dev.png" alt="Dave Dev" className="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;