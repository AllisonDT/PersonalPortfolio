import React from 'react';

// Components
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import FeaturedProjects from './components/FeaturedProjects';
import Education from './components/Education';
import About from './components/About';
import Footer from './components/Footer';

// Removed App.css since styling is now defined in constants

const appStyle = {
  minHeight: '100vh',
  backgroundColor: '#f2f2f2',  // Sets the background color
  color: '#333',              // Sets the text color
  margin: 0,
  fontFamily: 'Arial, Helvetica, sans-serif'
};

const heroStyle = {
  textAlign: 'center',
  color: '#030303',
  fontSize: '40px',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 300,
  letterSpacing: '-0.6px',
  lineHeight: '32px',
  marginBottom: '30px'
};

function App() {
  return (
    <div style={appStyle}>
      <Header />
      
      <main>
        {/* Hero / Intro Section */}
        <section style={heroStyle}>
          <h1>Allison Turner</h1>
        </section>

        {/* About Me */}
        <About />

        {/* Work Experience */}
        <WorkExperience />

        {/* Education */}
        <Education />

        {/* Featured Projects */}
        <FeaturedProjects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
