import React from 'react';

const headerStyles = {
  top: '0px',
  left: '0px',
  height: '66px',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #959595',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  zIndex: 1000,
};

const titleStyles = {
  color: '#030303',
  fontSize: '24px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 300,
  letterSpacing: '-0.6px',
  lineHeight: '32px',
  margin: 0,
};

const navTabStyles = {
  color: '#030303',
  fontSize: '16px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
  lineHeight: '24px',
  textDecoration: 'none',
  marginLeft: '20px',
};

function Header() {
  return (
    <header style={headerStyles}>
      <h2 style={titleStyles}>My Portfolio</h2>
      <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <a href="#about" style={navTabStyles}>
          About
        </a>
        <a href="#work-experience" style={navTabStyles}>
          Work Experience
        </a>
        <a href="#education" style={navTabStyles}>
          Education
        </a>
        <a href="#featured-projects" style={navTabStyles}>
          Featured Projects
        </a>
      </nav>
    </header>
  );
}

export default Header;
