import React, { useState } from 'react';
import flavorFusionPaper from '../assets/flavorFusionPaper.pdf';
import CapstoneDocument from '../assets/CapstoneDocument.pdf';
import CapstonePresentation from '../assets/CapstonePresentation.pdf';

function FeaturedProjects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedPaperPdf, setSelectedPaperPdf] = useState(null);

  // Dummy data for projects and their media; GitHub, photos, and papers are optional.
  // For papers, we assume the PDF files are part of your code (e.g. in your public folder).
  const projects = [
    {
      id: 1,
      title: 'Flavor Fusion',
      github: 'https://github.com/AllisonDT/Flavor-Fusion',
      description:
        'Developed a Swift mobile app that integrates Bluetooth to communicate with a spice maker robot, enabling real-time data exchange for precise spice measurements and blending. Designed a user-friendly UI/UX to ensure seamless navigation and intuitive interaction for all users. Collaborated with Mechanical Engineering students to research, design, and build the machine and mobile app. “Pitched” the project to judges from Industry and won the Interdisciplinary Category',
      media: {
        videos: ['https://youtu.be/b5L8fDbYnfM?si=91D1Wk2kzx_nEFNP'],
        papers: [
            { title: 'Flavor Fusion Paper', link: flavorFusionPaper }
          ]    
      }  
    },
    {
      id: 2,
      title: 'iPhone Music Practice App',
      description:
        'Designed and developed a fully functional iPhone app using Swift and Xcode, leveraging Apple Developer tools. Designed a user-friendly UI/UX to ensure seamless navigation and intuitive interaction for all users. Integrated features including a metronome, tuner, audio recorder, and a notes calendar.',
      github: 'https://gitlab.com/musiccapstone/music-capstone',
      media: {
        videos: [
        ],
        papers: [{ title: 'PracticePal Paper', link: CapstoneDocument }, 
            { title: 'PracticePal Presentation', link: CapstonePresentation }]
      },
    },
    {
      id: 3,
      title: 'VR Game',
      description: 
        'Developed a VR game using Unity and the Oculus Integration sdk to run on the Oculus Quest. Incorporated travel techniques, user interactions, physics-based interactions, animations, and a user interface.',
      media: {
        videos: [
          'https://youtu.be/REB3gUMN1i4?si=PF08G8QBSYAx00Ol',
          'https://youtu.be/bvbKNsoEvJ4?si=mDSzVEE-qlpMGHD6',
          'https://youtu.be/oJGq1w_jp2E?si=9MeD5MlLd7EPewSG',
          'https://youtu.be/Ikq_ZVLM65g?si=mCU60gcobNEm6_ZW'
        ]
      }
    }
  ];

  // Styles for the main container and project cards
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
    textAlign: 'center'
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
    minWidth: '280px',
    cursor: 'pointer'
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

  // Styles for the modal overlay and content
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  const modalContentStyle = {
    background: '#fff',
    padding: '30px',
    borderRadius: '8px',
    maxWidth: '800px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    position: 'relative'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer'
  };

  // Styles for the PDF viewer overlay
  const pdfViewerOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1100
  };

  const pdfViewerContentStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '800px',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative'
  };

  const pdfCloseButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer'
  };

  // Event handler for clicking a project card
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="featured-projects" style={containerStyle}>
      <h2 style={sectionTitleStyle}>Featured Projects</h2>
      <div style={projectsPanelsStyle}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={projectCardStyle}
            onClick={() => handleProjectClick(project)}
          >
            <h4 style={projectTitleStyle}>{project.title}</h4>
            <p style={projectDescriptionStyle}>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {modalOpen && selectedProject && (
        <div style={modalOverlayStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={closeModal}>
              &times;
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>

            {/* Optional GitHub Link */}
            {selectedProject.github && (
              <div style={{ marginBottom: '20px' }}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repository
                </a>
              </div>
            )}

            {/* Videos Section */}
            {selectedProject.media.videos.map((video, index) => {
            // Extract video ID from the youtu.be URL
            const videoId = video.split('/').pop().split('?')[0];
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            return (
                <iframe
                key={index}
                width="320"
                height="240"
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    marginRight: '10px',
                    marginBottom: '10px'
                }}
                title={`video-${index}`}
                ></iframe>
            );
            })}


            {/* Optional Photos Section */}
            {selectedProject.media.photos &&
              selectedProject.media.photos.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                  <h4>Photos</h4>
                  {selectedProject.media.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${selectedProject.title} ${index}`}
                      style={{
                        width: '150px',
                        marginRight: '10px',
                        marginBottom: '10px'
                      }}
                    />
                  ))}
                </div>
              )}

            {/* Optional Papers Section */}
            {selectedProject.media.papers &&
            selectedProject.media.papers.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                <h4>Papers</h4>
                <ul>
                    {selectedProject.media.papers.map((paper, index) => (
                    <li key={index}>
                        <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#00f',
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }}
                        >
                        {paper.title}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            )}
          </div>
        </div>
      )}

      {/* PDF Viewer Overlay */}
      {selectedPaperPdf && (
        <div
          style={pdfViewerOverlayStyle}
          onClick={() => setSelectedPaperPdf(null)}
        >
          <div
            style={pdfViewerContentStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={pdfCloseButtonStyle}
              onClick={() => setSelectedPaperPdf(null)}
            >
              &times;
            </button>
            <h4>{selectedPaperPdf.title}</h4>
            <iframe
              src={selectedPaperPdf.link}
              title={selectedPaperPdf.title}
              width="100%"
              height="500px"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProjects;
