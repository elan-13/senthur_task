import React from 'react';
import '../styles/Welcome.css';

const Welcome = () => {
  return (
    <section className="welcome">
      <h2 className="section-title">Welcome to SPR Global</h2>
      
      <div className="welcome-content">
        <div className="logo-container">
          <div className="spr-logo"></div>
        </div>
        
        <div className="content">
          <h3>Inspiring Lives, Empowering Communities</h3>
          
          <div className="text-content">
            <p>
              At SPR Global, we believe in creating exceptional experiences through our diverse range of brands. 
              From redefining fitness and lifestyle to serving world-class cuisines, we are dedicated to enhancing everyday living.
            </p>
            
            <p>
              SPR Global stands at the intersection of innovation, quality, and affordability. 
              With a commitment to excellence and customer satisfaction, we curate experiences that cater to 
              various lifestyle needs, ensuring our customers feel valued and inspired.
            </p>
          </div>
          
          <div className="know-more gradient-text">KNOW MORE</div>
        </div>
      </div>
    </section>
  );
};

export default Welcome; 