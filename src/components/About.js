import React from 'react';
import profilePic from '../assets/profile.jpeg';
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="section-kicker">About</p>
        <h2>Engineer by craft, systems thinker by practice.</h2>
      </div>

      <div className="about-card">
        <img src={profilePic} alt="Portrait of Allison Turner" className="about-image" />

        <div className="about-content">
          <p>
            I am a Senior Software Engineer at Bloom Energy and I recently completed my M.S. in Computer Science at
            the University of Central Florida. I build products across the stack, from polished React interfaces to
            backend services and automation workflows that keep systems healthy in production.
          </p>
          <p>
            My work includes internal platform tooling, service reliability engineering, and CI/CD improvements that
            accelerate releases while maintaining high operational quality.
          </p>

          <div className="about-tags" aria-label="Core focus areas">
            <span>Frontend Architecture</span>
            <span>DevOps Workflows</span>
            <span>Production Reliability</span>
          </div>

          <div className="about-links">
            <a href="https://www.linkedin.com/in/allisonturner02" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/AllisonDT" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://gitlab.com/allisondt" target="_blank" rel="noopener noreferrer">
              <FaGitlab /> GitLab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
