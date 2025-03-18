import React from 'react';

function Education() {
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

  const educationPanelsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const educationItemStyle = {
    flex: '1',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    minWidth: '280px'
  };

  const educationTitleStyle = {
    fontSize: '1.5rem',
    margin: '0 0 10px 0'
  };

  const educationSpanStyle = {
    display: 'block',
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '10px'
  };

  const courseworkStyle = {
    marginTop: '10px',
    fontSize: '0.95rem',
    color: '#333'
  };

  return (
    <section id="education" style={containerStyle}>
      <h2 style={sectionTitleStyle}>Education</h2>
      
      <div style={educationPanelsStyle}>
        <div style={educationItemStyle}>
          <h3 style={educationTitleStyle}>M.S. Computer Science</h3>
          <span style={educationSpanStyle}>
            University of Central Florida, Jan. 2025 – May 2026
          </span>
          <p style={courseworkStyle}>
            Coursework: Virtual Reality Engineering, Advanced Network Algorithms, Machine Learning, Software Vulnerabilities & Malware
          </p>
        </div>
        
        <div style={educationItemStyle}>
          <h3 style={educationTitleStyle}>B.S. Computer Science</h3>
          <span style={educationSpanStyle}>
            University of Central Florida - Burnett Honors College, Aug. 2020 – Dec. 2024 – GPA: 3.878
          </span>
          <p style={courseworkStyle}>
            Coursework: Data Structures & Algorithms I &amp; II, Discrete Math, Linear Algebra, Calculus, Object Oriented Programming, C Programming, Systems Software, Computer Organization, IT Networking
          </p>
        </div>
        
        <div style={educationItemStyle}>
          <h3 style={educationTitleStyle}>B.A. Music</h3>
          <span style={educationSpanStyle}>
            University of Central Florida - Burnett Honors College – GPA: 3.878
          </span>
          <p style={courseworkStyle}>
            Coursework: Music Theory, Music Composition, Music Performance, Music History, Piano
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
