import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-heading">About</h2>
      <div className="about-content">
        <div className="about-image-container">
          <img
            src="https://via.placeholder.com/250"  // Replace this URL with the real image
            alt="Marlon"
            className="about-image"
          />
        </div>
        <div className="about-text">
          <h3>I&apos;m Marlon</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
            soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias
            accusamus atque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
