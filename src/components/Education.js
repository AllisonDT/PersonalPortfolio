import React from 'react';

function Education() {
  const degrees = [
    {
      degree: 'M.S. Computer Science',
      school: 'University of Central Florida',
      date: 'Jan 2025 - May 2026',
      details: 'Virtual Reality Engineering, Augmented Reality Engineering, Advanced Network Algorithms, Machine Learning, Software Vulnerabilities & Malware, Computer Forensics'
    },
    {
      degree: 'B.S. Computer Science',
      school: 'University of Central Florida - Burnett Honors College',
      date: 'Aug 2020 - Dec 2024',
      details: 'Data Structures & Algorithms I-II, Discrete Math, Linear Algebra, Systems Software, Computer Organization, IT Networking',
      gpa: '3.878'
    },
    {
      degree: 'B.A. Music',
      school: 'University of Central Florida - Burnett Honors College',
      date: 'Aug 2020 - Dec 2024',
      details: 'Music Theory, Composition, Performance, History, and Piano',
      gpa: '3.878'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="section-heading">
        <p className="section-kicker">Education</p>
        <h2>Technical depth, interdisciplinary perspective.</h2>
      </div>

      <div className="education-grid">
        {degrees.map((degree) => (
          <article key={degree.degree} className="education-card">
            <h3>{degree.degree}</h3>
            <p>{degree.school}</p>
            <span>{degree.date}</span>
            {degree.gpa && <strong>GPA: {degree.gpa}</strong>}
            <p className="education-details">{degree.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
