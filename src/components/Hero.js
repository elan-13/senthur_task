import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-slide active">
        <div className="hero-image">
          <div className="overlay">
            <div className="brand-logo sulthans"></div>
          </div>
          <div className="hero-content">
            <div className="know-more-circle">
              <span>KNOW MORE</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slider-controls">
        <div className="slider-indicator">
          <div className="slider-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
        <div className="slider-arrows">
          <button className="arrow prev"></button>
          <button className="arrow next"></button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 