import React from 'react';
import './Home.css';
import Nav from './Nav';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <Nav />
      <section id="home" className="home">
        <div className="home-content">
          <h1>
            Hi, I&apos;m <span className="highlight">Shavidu Keshan</span>
            <br /> Web Developer
          </h1>
          <Link to="/contact">
            <button className="contact-btn">Contact</button>
          </Link>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="home-image">
          
        <img src="/Image/shavidu.jpg" alt="Shavidu Keshan" />

        </div>
      </section>
    </>
  );
};

export default Home;


