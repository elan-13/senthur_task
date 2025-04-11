import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      <h1 className="about-title">Welcome to SPR Global</h1>
      
      <div className="about-content">
        <div className="about-logo">
          <img src="/assets/images/spr-logo.png" alt="SPR Global" />
        </div>
        
        <div className="about-text">
          <h2>Inspiring Lives, Empowering Communities</h2>
          
          <div className="about-description">
            <p>
              At SPR Global, we believe in creating exceptional experiences through our diverse range of brands. 
              From redefining fitness and lifestyle to serving world-class cuisines, we are dedicated to enhancing everyday living.
            </p>
            <p>
              SPR Global stands at the intersection of innovation, quality, and affordability. With a commitment to 
              excellence and customer satisfaction, we curate experiences that cater to various lifestyle needs, 
              ensuring our customers feel valued and inspired.
            </p>
          </div>
          
          <button className="know-more-btn">KNOW MORE</button>
        </div>
      </div>
      
      <div className="divider">
        <span className="divider-icon"></span>
      </div>
    </section>
  );
};

export default About; 