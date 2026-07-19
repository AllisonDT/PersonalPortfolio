import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="app-shell">
      <div className="background-orb background-orb--one" aria-hidden="true" />
      <div className="background-orb background-orb--two" aria-hidden="true" />

      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
