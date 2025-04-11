import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <span className="logo-text">SPR</span>
          <span className="logo-small">GLOBAL</span>
        </a>
        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-item active">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a href="/brands">
                Brands we operate
                <span className="dropdown-icon"></span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/business">Business Opportunity</a>
            </li>
          </ul>
        </nav>
        <a href="/contact" className="contact-btn">CONTACT US</a>
      </div>
    </header>
  );
};

export default Header; 