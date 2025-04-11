import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className="portfolio-content">
          <div className="profile-section">
            <div className="profile-photo">
              {/* Placeholder for profile photo */}
              <div className="photo-placeholder"></div>
            </div>
            <h3 className="profile-name">Elancheliyan P</h3>
            <p className="profile-title">Full Stack Developer</p>
            
            <div className="social-links">
              <a href="www.linkedin.com/in/elancheliyan-palani-01a308257" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <span className="social-icon linkedin-icon"></span>
                LinkedIn
              </a>
              <a href="https://github.com/elan-13" target="_blank" rel="noopener noreferrer" className="social-link github">
                <span className="social-icon github-icon"></span>
                GitHub
              </a>
            </div>
          </div>
          
          <div className="about-section">
            <h3>About Me</h3>
            <p>
              I am a passionate Full Stack Developer with experience in building 
              responsive, user-friendly web applications. My expertise includes 
              front-end technologies like React.js, HTML5, CSS3, and back-end 
              technologies including Node.js and Express.
            </p>
            <p>
              I enjoy solving complex problems and creating intuitive, engaging user 
              experiences. My background in both design and development allows me to 
              create applications that are not only functional but also aesthetically pleasing.
            </p>
            
            <div className="skills-section">
              <h3>Skills</h3>
              <div className="skills-list">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">UI/UX</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="projects-section">
          <h3>Featured Projects</h3>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image"></div>
              <h4>SPR Global Website</h4>
              <p>A responsive website for SPR Global showcasing their brands and business opportunities.</p>
              <div className="project-links">
                <a href="#" className="project-link">View Live</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image"></div>
              <h4>E-Commerce Platform</h4>
              <p>A full-featured online shopping platform with user authentication and payment processing.</p>
              <div className="project-links">
                <a href="#" className="project-link">View Live</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image"></div>
              <h4>Task Management App</h4>
              <p>A productivity application for organizing tasks, with drag-and-drop functionality.</p>
              <div className="project-links">
                <a href="#" className="project-link">View Live</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-section">
          <h3>Get In Touch</h3>
          <p>Feel free to reach out for collaborations or just a friendly chat.</p>
          <a href="mailto:chezhian9456@gmail.com" className="contact-button">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 