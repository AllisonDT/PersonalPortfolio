import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    color: '#333'
  };

  const paragraphStyle = {
    margin: 0,
    fontSize: '1rem'
  };

  return (
    <footer style={footerStyle}>
      <p style={paragraphStyle}>&copy; 2025 Allison Turner</p>
    </footer>
  );
}

export default Footer;
