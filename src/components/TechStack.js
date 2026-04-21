import React from 'react';
import "./TechStack.css";

import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaReacteurope,
} from 'react-icons/fa';

const TechStack = () => {
  return (
    <section className="tech">
      <div className="tech-inner">
        <p className="tech-tag">MY EXPERTISE</p>
        <h2 className="tech-title">
          Technologies I <span>Work With</span>
        </h2>
        <p className="tech-sub">
          I specialize in modern web technologies to deliver cutting-edge
          solutions.
        </p>

        <div className="tech-cards">
          {/* Frontend Card */}
          <div className="tech-card">
            <div className="icon-box blue">🎨</div>
            <h3>Frontend</h3>
            <div className="skill">
              <span>React / Next.js</span>
              <span>95%</span>
            </div>
            <div className="bar"><div style={{ width: "95%" }}></div></div>
            <div className="skill">
              <span>JavaScript / TypeScript</span>
              <span>92%</span>
            </div>
            <div className="bar"><div style={{ width: "92%" }}></div></div>
            <div className="skill">
              <span>Tailwind / CSS</span>
              <span>98%</span>
            </div>
            <div className="bar"><div style={{ width: "98%" }}></div></div>
          </div>

          {/* Backend Card */}
          <div className="tech-card">
            <div className="icon-box gradient">💾</div>
            <h3>Backend</h3>
            <div className="skill">
              <span>Node.js / Express</span>
              <span>90%</span>
            </div>
            <div className="bar"><div style={{ width: "90%" }}></div></div>
            <div className="skill">
              <span>Python / Django</span>
              <span>85%</span>
            </div>
            <div className="bar"><div style={{ width: "85%" }}></div></div>
            <div className="skill">
              <span>PostgreSQL / MongoDB</span>
              <span>88%</span>
            </div>
            <div className="bar"><div style={{ width: "88%" }}></div></div>
          </div>

          {/* Tools Card */}
          <div className="tech-card">
            <div className="icon-box purple">🛠️</div>
            <h3>Tools & More</h3>
            <div className="skill">
              <span>Git / GitHub</span>
              <span>95%</span>
            </div>
            <div className="bar"><div style={{ width: "95%" }}></div></div>
            <div className="skill">
              <span>AWS / Vercel</span>
              <span>87%</span>
            </div>
            <div className="bar"><div style={{ width: "87%" }}></div></div>
            <div className="skill">
              <span>Figma / Design</span>
              <span>80%</span>
            </div>
            <div className="bar"><div style={{ width: "80%" }}></div></div>
          </div>
        </div>

        <div className="mini-tech-global">
          <div className="mini"><FaReact /> React</div>
          <div className="mini"><FaNodeJs /> Node</div>
          <div className="mini"><FaJs /> JavaScript</div>
          <div className="mini"><FaCss3Alt /> CSS</div>
          <div className="mini"><FaDatabase /> Databases</div>
          <div className="mini"><FaReacteurope /> React Native</div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;