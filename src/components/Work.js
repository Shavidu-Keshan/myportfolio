import React from 'react';
import './Work.css';

const Work = () => {
  const projects = [
    {
      imgSrc: 'https://via.placeholder.com/400x300',
      altText: 'Project 1',
    },
    {
      imgSrc: 'https://via.placeholder.com/400x300',
      altText: 'Project 2',
    },
    {
      imgSrc: 'https://via.placeholder.com/400x300',
      altText: 'Project 3',
    },
    {
      imgSrc: 'https://via.placeholder.com/400x300',
      altText: 'Project 4',
    },
    {
      imgSrc: 'https://via.placeholder.com/400x300',
      altText: 'Project 5',
    },
    {
      imgSrc: 'https://via.placeholder.com/400x300',
      altText: 'Project 6',
    },
  ];

  return (
    <section id="work" className="work-section">
      <h2 className="section-title">
        Projects <span className="underline"></span>
      </h2>
      <div className="work-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-item">
            <img src={project.imgSrc} alt={project.altText} className="work-image" />
          </div>
        ))}
      </div>
    </section> 
  );
};

export default Work;
