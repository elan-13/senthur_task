import React, { useState } from 'react';
import '../styles/BusinessOpportunities.css';

const BusinessOpportunities = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interestedBrand: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="business-opportunities">
      <div className="business-header">
        <h2>Business Opportunities</h2>
        <span className="dot"></span>
        <h2>Business Opportunities</h2>
        <span className="dot"></span>
        <h2>Business Opportunities</h2>
      </div>

      <div className="business-content">
        <div className="business-info">
          <h3>Become an Entrepreneur Today – Grow Your Business with SPR Global</h3>
          <p>
            Partner with us and unlock your potential in the thriving industries of food, fashion, fitness, 
            and entertainment. SPR Global provides the support, resources, and proven business models you need to succeed.
          </p>

          <div className="contact-info">
            <div className="info-group">
              <h4>Corporate Office</h4>
              <p>SPR Global Headquarters</p>
              <p>[Address Line 1]</p>
              <p>[City, State, ZIP Code]</p>
            </div>

            <div className="info-group">
              <h4>Feel Free to Contact Us</h4>
              <p>+91 8765431671</p>
              <p>sprglobal@gmail.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <div className="phone-input">
                <div className="country-code">
                  <span className="flag-icon"></span>
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Interested Brand</label>
              <select
                name="interestedBrand"
                value={formData.interestedBrand}
                onChange={handleChange}
              >
                <option value="">Select a brand</option>
                <option value="sultans">Sultan's Biryani</option>
                <option value="cheap-best">Cheap & Best</option>
                <option value="jonahs">Jonah's Bistro</option>
                <option value="fx">FX</option>
                <option value="slam">SLAM</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default BusinessOpportunities; 