import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo"></div>
            <p>
              SPR Global is a visionary company empowering entrepreneurs in the food, fashion, fitness, and entertainment industries. 
              We are committed to delivering exceptional experiences through our diverse range of brands.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/brands">Brands We Operate</a></li>
                <li><a href="/business">Business Opportunity</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Brands</h4>
              <ul>
                <li><a href="/brands/ponnusamy">The Ponnusamy Elite</a></li>
                <li><a href="/brands/sultans">Sultan's Biryani</a></li>
                <li><a href="/brands/jonahs">Jonah's Bistro</a></li>
                <li><a href="/brands/slam">Slam Fitness Studio</a></li>
                <li><a href="/brands/cheap-best">Cheap & Best</a></li>
                <li><a href="/brands/fx">Funzxtreme</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Contact</h4>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="label">Call</span>
                  <a href="tel:+18919891191">+1 891 989-11-91</a>
                </div>
                
                <div className="contact-item">
                  <span className="label">Email</span>
                  <a href="mailto:sprglobal@gamail.com">sprglobal@gamail.com</a>
                </div>
                
                <div className="contact-item">
                  <span className="label">Address</span>
                  <p>
                    SPR Global Headquarters<br />
                    [Address Line 1]<br />
                    [City, State, ZIP Code]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2024 — Copyright</p>
          <a href="/privacy" className="privacy-link">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 