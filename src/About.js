import React from 'react';
import './About.css';  // Correct CSS import in About.js

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-details">
          <div className="personal-info">
            <h3>Personal Information</h3>
            <ul>
              <li><strong>Full Name:</strong> Shavidu Keshan</li>
              <li><strong>Birthday:</strong> January 15, 1995</li>
              <li><strong>Nationality:</strong> Sri Lankan</li>
              <li><strong>Languages:</strong> English, Sinhala</li>
            </ul>
          </div>
          <div className="education-info">
            <h3>Education</h3>
            <ul>
              <li><strong>University:</strong> University of Colombo</li>
              <li><strong>Degree:</strong> BSc in Computer Science</li>
              <li><strong>School:</strong> Royal College Colombo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



