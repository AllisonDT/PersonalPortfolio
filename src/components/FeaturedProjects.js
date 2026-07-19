import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

function FeaturedProjects() {
  return (
    <section id="featured-projects" className="section">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2>Selected products and experiments.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>Open details</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
