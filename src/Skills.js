import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
        <h2 className="section-title">
          Skills <span className="underline"></span>
        </h2>

        <div className="skills-details">
          <div className="skills-text">
            <h3>Professional Skills</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
              optio id vero amet, alias architecto consectetur error eum eaque sit.
            </p>

            <div className="skill-item">
              <span className="skill-name">
                <i className="fab fa-html5"></i> HTML5
              </span>
              <span className="skill-percentage">95%</span>
              <div className="skill-bar">
                <div className="filled-bar" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <span className="skill-name">
                <i className="fab fa-css3-alt"></i> CSS3
              </span>
              <span className="skill-percentage">85%</span>
              <div className="skill-bar">
                <div className="filled-bar" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <span className="skill-name">
                <i className="fab fa-js-square"></i> JavaScript
              </span>
              <span className="skill-percentage">65%</span>
              <div className="skill-bar">
                <div className="filled-bar" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <span className="skill-name">
                <i className="fas fa-pencil-alt"></i> UX/UI
              </span>
              <span className="skill-percentage">85%</span>
              <div className="skill-bar">
                <div className="filled-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          <div className="skills-image">
            <img src="https://i.pravatar.cc/400" alt="Skills" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
