import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-page">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I am Marlon, a passionate web designer with years of experience in creating 
          engaging web experiences for clients across the globe. I specialize in 
          creating visually appealing and highly functional websites.
        </p>
      </div>
      <div className="about-image">
        <img src="https://i.pravatar.cc/250" alt="Marlon" />
      </div>
    </section>
  );
};

export default About;
