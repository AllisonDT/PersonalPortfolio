import React from 'react';

function WorkExperience() {
  const experiences = [
    {
      role: 'Graduate Software Engineering Intern',
      company: 'Bloom Energy',
      date: 'June 2025 - August 2025',
      bullets: [
        'Designed and shipped a custom dashboard web app for real-time GitHub repository status tracking, then deployed it to AWS S3.',
        'Built a server health monitoring application that surfaced live internal and external service status for faster outage response.'
      ]
    },
    {
      role: 'Associate IT Developer',
      company: 'Florida Blue/GuideWell',
      date: 'June 2024 - May 2025',
      bullets: [
        'Developed responsive UIs in React and backend services with Node.js, Express, and Go.',
        'Implemented and maintained RESTful APIs powering client-server communication.',
        'Deployed and maintained services through Jenkins and OpenShift.',
        'Provided production support and incident resolution across cross-functional teams.'
      ]
    },
    {
      role: 'Intern IT Developer',
      company: 'Florida Blue/GuideWell',
      date: 'May 2023 - May 2024',
      bullets: [
        'Built a predictive analytics Splunk dashboard for service traffic visibility.',
        'Resolved defects across web applications, improving reliability and UX quality.'
      ]
    },
    {
      role: 'Undergraduate Teaching Assistant',
      company: 'UCF Department of Computer Science',
      date: 'January 2023 - Present',
      bullets: [
        'Led office hours and provided direct coaching on course fundamentals.',
        'Managed grading workflows and student communication with consistent turnaround times.'
      ]
    },
    {
      role: 'Software Engineering Track Participant',
      company: 'IBM Accelerate',
      date: 'May 2022 - August 2022',
      bullets: [
        'Completed weekly professional development workshops and software engineering training.',
        'Strengthened foundations in JavaScript, React, Node.js, GitHub, and web security.'
      ]
    },
    {
      role: 'Instructor',
      company: 'Mathnasium - KV',
      date: 'December 2021 - May 2023',
      bullets: [
        'Delivered personalized math instruction from foundational arithmetic through advanced topics.',
        'Adapted lesson plans to learning styles and helped students build confidence and consistency.'
      ]
    }
  ];

  return (
    <section id="work-experience" className="section">
      <div className="section-heading">
        <p className="section-kicker">Experience</p>
        <h2>Building products across web, operations, and education.</h2>
      </div>

      <div className="timeline-grid">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.role}`} className="timeline-card">
            <div className="timeline-header">
              <h3>{experience.role}</h3>
              <p>{experience.company}</p>
              <span>{experience.date}</span>
            </div>

            <ul>
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
