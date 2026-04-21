import React, { useState, useEffect, useRef } from 'react';
import "./Hero.css";

const Hero = ({ isLoading }) => {
  const [counts, setCounts] = useState({ projects: 0, years: 0, satisfaction: 0, support: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const targets = {
    projects: 50,
    years: 5,
    satisfaction: 100,
    support: 24
  };

  // Only start observing AFTER preloader is gone
  useEffect(() => {
    if (isLoading) return; // Don't observe while preloader is active
    
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateNumbers();
            observer.disconnect(); // Stop observing once triggered
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isLoading, hasAnimated]); // Re-run when isLoading changes

  const animateNumbers = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        projects: Math.round(targets.projects * easeOut),
        years: Math.round(targets.years * easeOut),
        satisfaction: Math.round(targets.satisfaction * easeOut),
        support: Math.round(targets.support * easeOut)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);
  };

  return (
    <section className="hero" ref={sectionRef}>
      <div className="badge">
        <span className="dot"></span>
        Available for New Projects
      </div>

      <h1>
        Turn Your Vision Into <br />
        <span className="gradient-text">
          Powerful Web <br /> Experiences
        </span>
      </h1>

      <p>
        I build fast, stunning, and conversion-focused websites that help
        businesses grow. From simple landing pages to complex web
        applications.
      </p>
      <a href="#about" className="secondary-btn">
        👁 View My Work
      </a>

      <div className="stats">
        <div className="stat">
          <h2>{counts.projects}+</h2>
          <p>Projects Delivered</p>
        </div>
        <div className="stat">
          <h2>{counts.years}+</h2>
          <p>Years Experience</p>
        </div>
        <div className="stat">
          <h2>{counts.satisfaction}%</h2>
          <p>Client Satisfaction</p>
        </div>
        <div className="stat">
          <h2>{counts.support}/7</h2>
          <p>Support Available</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;