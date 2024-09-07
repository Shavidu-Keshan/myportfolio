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
              These are some of my core skills that I have honed over the years
              in web and app development.
            </p>

            {/* Technical Skills */}
            <div className="skill-item">
              <span className="skill-name">
                <i className="fab fa-html5"></i> HTML5
              </span>
              <div className="skill-bar">
                <div className="filled-bar" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <span className="skill-name">
                <i className="fab fa-css3-alt"></i> CSS3
              </span>
              <div className="skill-bar">
                <div className="filled-bar" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <span className="skill-name">
                <i className="fab fa-js-square"></i> JavaScript
              </span>
              <div className="skill-bar">
                <div className="filled-bar" style={{ width: '62%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <span className="skill-name">
                <i className="fab fa-react"></i> React
              </span>
              <div className="skill-bar">
                <div className="filled-bar" style={{ width: '72%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <span className="skill-name">
                <i class="fa-brands fa-java"></i> Java
              </span>
              <div className="skill-bar">
                <div className="filled-bar" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <span className="skill-name">
                <i class="fa-brands fa-java"></i> Selenium with Java
              </span>
              <div className="skill-bar">
                <div className="filled-bar" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="skill-item">
              <span className="skill-name">
                <i className="fa-brands fa-flutter"></i> Flutter
              </span>
              <div className="skill-bar">
                <div className="filled-bar" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="skills-soft-skills">
            <h3>Soft Skills</h3>
            <ul className="soft-skills-list">
              <li><i className="fas fa-users"></i> Teamwork</li>
              <li><i className="fas fa-comments"></i> Communication</li>
              <li><i className="fas fa-lightbulb"></i> Problem-Solving</li>
              <li><i className="fas fa-tasks"></i> Time Management</li>
              <li><i className="fas fa-creative-commons"></i> Creativity</li>
              <li><i className="fas fa-rocket"></i> Adaptability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
