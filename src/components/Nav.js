import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">Marlon</div>
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;

