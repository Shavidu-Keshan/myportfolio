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
              <li><strong>Full Name:</strong> Jayasekara Kankanamge Shavidu Keshan</li>
              <li><strong>Birthday:</strong> November 20, 2000</li>
              <li><strong>Nationality:</strong> Sri Lankan</li>
              <li><strong>Languages:</strong> English, Sinhala</li>
              <li><strong>Gmail:</strong> shavidu4321@gmail.com</li>
            </ul>
          </div>
          <div className="education-info">
            <h3>Education</h3>
            <ul>
              <li><strong>University:</strong> Sabaragamuwa University of Sri Lanka</li>
              <li><strong>Degree:</strong> BSc(Hons) in Computing and Information Systems</li>
              <li><strong>School:</strong> H / Weerakatiya Rajapaksha Central college </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



