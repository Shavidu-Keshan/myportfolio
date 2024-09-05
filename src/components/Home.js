// File: src/components/Home.js

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I&apos;m <span className="highlight">Marlon</span><br /> Web Designer</h1>
        <button className="contact-btn">Contact</button>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-behance"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="home-image">
        <img src="https://i.pravatar.cc/300" alt="Marlon" />
      </div>
    </section>
  );
};

export default Home;

