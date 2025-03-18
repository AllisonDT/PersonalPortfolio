import React from 'react';

function FeaturedProjects() {
  const containerStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const sectionTitleStyle = {
    color: '#030303',
    fontSize: '40px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 300,
    letterSpacing: '-0.6px',
    lineHeight: '32px',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const projectsPanelsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const projectCardStyle = {
    flex: '1',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    minWidth: '280px'
  };

  const projectImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '15px'
  };

  const projectTitleStyle = {
    fontSize: '1.5rem',
    margin: '0 0 10px 0'
  };

  const projectDescriptionStyle = {
    marginTop: '10px',
    fontSize: '0.95rem',
    color: '#333'
  };

  return (
    <section id="featured-projects" style={containerStyle}>
      <h2 style={sectionTitleStyle}>Featured Projects</h2>
      <div style={projectsPanelsStyle}>
        <div style={projectCardStyle}>
          <img 
            style={projectImageStyle}
            src="https://via.placeholder.com/300x200?text=Tech+Company+Website" 
            alt="Flavor Fusion" 
          />
          <h4 style={projectTitleStyle}>Flavor Fusion</h4>
          <p style={projectDescriptionStyle}>
            Something Something Something
          </p>
        </div>
        <div style={projectCardStyle}>
          <img 
            style={projectImageStyle}
            src="https://gitlab.com/musiccapstone/music-capstone" 
            alt="iPhone Music Practice App" 
          />
          <h4 style={projectTitleStyle}>iPhone Music Practice App</h4>
          <p style={projectDescriptionStyle}>
            Something Something Something
          </p>
        </div>
        <div style={projectCardStyle}>
          <img 
            style={projectImageStyle}
            src="https://via.placeholder.com/300x200?text=Cloud+Storage+Platform" 
            alt="VR Game" 
          />
          <h4 style={projectTitleStyle}>VR Game</h4>
          <p style={projectDescriptionStyle}>
            Something Something Something
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
