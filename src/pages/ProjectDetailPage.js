import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="section">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2>Project not found.</h2>
        </div>
        <p className="page-description">The project you requested does not exist.</p>
        <Link className="button button-secondary" to="/projects">Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="section project-detail-section">
      <div className="section-heading">
        <p className="section-kicker">Project Detail</p>
        <h2>{project.title}</h2>
      </div>

      <p className="page-description">{project.description}</p>

      {project.github && (
        <p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">View Repository</a>
        </p>
      )}

      <h4>Highlights</h4>
      <ul>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      {project.media.videos.length > 0 && (
        <>
          <h4>Video Walkthroughs</h4>
          <div className="project-video-grid">
            {project.media.videos.map((video, index) => {
              const videoId = video.split('/').pop().split('?')[0];
              const embedUrl = `https://www.youtube.com/embed/${videoId}`;

              return (
                <iframe
                  key={`${project.slug}-video-${index}`}
                  src={embedUrl}
                  title={`${project.title} video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              );
            })}
          </div>
        </>
      )}

      {project.media.papers && project.media.papers.length > 0 && (
        <>
          <h4>Documentation</h4>
          <ul>
            {project.media.papers.map((paper) => (
              <li key={paper.title}>
                <a href={paper.link} target="_blank" rel="noopener noreferrer">{paper.title}</a>
              </li>
            ))}
          </ul>
        </>
      )}

      <Link className="button button-secondary" to="/projects">Back to Projects</Link>
    </section>
  );
}

export default ProjectDetailPage;
