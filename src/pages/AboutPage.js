import React from 'react';
import profilePic from '../assets/profile.jpeg';

function AboutPage() {
  return (
    <>
      <section className="section home-simple-overview">
        <div className="home-simple-card">
          <img src={profilePic} alt="Portrait of Allison Turner" className="home-simple-image" />

          <div className="home-simple-content">
            <p className="section-kicker">Overview</p>
            <h1>Allison Turner</h1>
            <p className="home-simple-role">Senior Software Engineer at Bloom Energy</p>
            <p className="home-simple-text">
              I recently completed my M.S. in Computer Science at the University of Central Florida. I just recently moved to Silicon Valley to work as a Senior Software Engineer at Bloom Energy.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="section-kicker">Journey</p>
          <h2>Timeline</h2>
        </div>

        <div className="home-timeline home-timeline--simple" aria-label="Career timeline">
          <article className="home-timeline-item">
            <span>2023</span>
            <h3>Intern IT Developer</h3>
            <p>Florida Blue/GuideWell</p>
          </article>
          <article className="home-timeline-item">
            <span>2024</span>
            <h3>Associate IT Developer</h3>
            <p>Florida Blue/GuideWell</p>
          </article>
          <article className="home-timeline-item">
            <span>2025</span>
            <h3>Graduate Software Engineering Intern</h3>
            <p>Bloom Energy</p>
          </article>
          <article className="home-timeline-item home-timeline-item--accent">
            <span>2026</span>
            <h3>Senior Software Engineer</h3>
            <p>Bloom Energy</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
