import React from 'react';
import profilePic from '../assets/profile.jpeg';
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about">
      <style>{`
        .about-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .about-image img {
          width: 250px;
          height: 300px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .about-description {
          margin-left: 40px;
          max-width: 600px;
        }
        
        .section-title {
          margin-bottom: 20px;
          font-size: 2rem;
          fontFamily: 'Roboto, sans-serif',
        }
        
        .about-description p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .about-links {
          display: flex;
          align-items: center;
        }

        .about-links a {
          margin-right: 15px;
          text-decoration: none;
          font-weight: bold;
          color: #0073b1;
          display: flex;
          align-items: center;
        }
        
        .about-links a:hover {
          text-decoration: underline;
        }

        .about-links svg {
          margin-right: 8px;
          font-size: 1.5rem;
        }
      `}</style>
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Allison Turner" />
        </div>
        <div className="about-description">
          <p>
          I’m Allison Turner, a software developer at Florida Blue. I hold dual degrees, a Bachelor of Science in Computer Science and a Bachelor of Arts in Music, from the University of Central Florida. I'm am aslo currently pursuing a Master’s in Computer Science at UCF. My professional experience includes designing and deploying applications using technologies like React, Node.js, Express, and Go, along with maintaining backend services with Jenkins and OpenShift. I've contributed to enhancing user experiences through responsive interfaces, resolving production incidents, and creating tools to improve software reliability.
          </p>
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
