import React from 'react';
import '../styles/BusinessOpportunity.css';

const BusinessOpportunity = () => {
  return (
    <section className="business-opportunity">
      <div className="business-banner">
        <div className="banner-content">
          <h2>BUSINESS OPPORTUNITIES</h2>
          <div className="dot"></div>
          <h2>BUSINESS OPPORTUNITIES</h2>
          <div className="dot"></div>
          <h2>BUSINESS OPPORTUNITIES</h2>
        </div>
      </div>
      
      <div className="business-content">
        <div className="container">
          <div className="business-wrapper">
            <div className="business-info">
              <h3>Become an Entrepreneur Today – Grow Your Business with SPR Global</h3>
              <p>
                Partner with us and unlock your potential in the thriving industries of
                food, fashion, fitness, and entertainment. SPR Global provides the
                support, resources, and proven business models you need to succeed.
              </p>
              
              <div className="divider"></div>
              
              <div className="contact-info">
                <div className="info-block">
                  <h4>Corporate Office</h4>
                  <p>
                    SPR Global Headquarters<br />
                    [Address Line 1]<br />
                    [City, State, ZIP Code]
                  </p>
                </div>
                
                <div className="info-block">
                  <h4>Feel Free to Contact Us</h4>
                  <p>
                    +91 8765431671<br />
                    sprglobal@gamail.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John" />
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="phone-input">
                    <div className="country-code">
                      <div className="flag-icon"></div>
                      <span>+91</span>
                    </div>
                    <input type="tel" placeholder="9873456709" />
                  </div>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="" />
                </div>
                
                <div className="form-group">
                  <label>Interested Brand</label>
                  <select>
                    <option value="" disabled selected></option>
                    <option value="sultans">Sultan's Biryani</option>
                    <option value="cheap-best">Cheap & Best</option>
                    <option value="jonahs">Jonah's Bistro</option>
                    <option value="fx">FX</option>
                    <option value="slam">SLAM</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Message(Optional)</label>
                <textarea></textarea>
              </div>
              
              <button className="submit-btn">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunity; 