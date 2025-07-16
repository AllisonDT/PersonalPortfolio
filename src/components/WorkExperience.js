import React from 'react';

function WorkExperience() {
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
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

  const experienceItemStyle = {
    marginBottom: '40px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '20px'
  };

  const lastExperienceItemStyle = {
    marginBottom: '40px',
    borderBottom: 'none',
    paddingBottom: '20px'
  };

  const experienceTitleStyle = {
    fontSize: '1.5rem',
    margin: 0
  };

  const experienceDateStyle = {
    margin: '5px 0 15px 0',
    fontStyle: 'italic',
    color: '#555'
  };

  const experienceListStyle = {
    margin: 0,
    paddingLeft: '20px',
    listStyleType: 'disc'
  };

  const experienceListItemStyle = {
    marginBottom: '10px',
    lineHeight: 1.5
  };

  return (
    <section id="work-experience" style={containerStyle}>
      <h2 style={sectionTitleStyle}>Experience</h2>
      
      <div style={experienceItemStyle}>
        <h3 style={experienceTitleStyle}>Bloom Energy: Graduate Software Engineering Intern</h3>
        <p style={experienceDateStyle}>June 2025 – August 2025</p>
        <ul style={experienceListStyle}>
          <li style={experienceListItemStyle}>
            Designed and developed a custom dashboard web application to display real-time GitHub repository statuses, including passing pipelines, open merge requests, and keyword-based tracking. Deployed to S3 on AWS.
          </li>
          <li style={experienceListItemStyle}>
            Built an internal server status monitoring web application to provide live visibility into the health of both internal and external services, helping teams quickly identify and respond to outages.
          </li>
        </ul>
      </div>

      <div style={experienceItemStyle}>
        <h3 style={experienceTitleStyle}>Florida Blue/GuideWell: Associate IT Developer</h3>
        <p style={experienceDateStyle}>June 2024 – May 2025</p>
        <ul style={experienceListStyle}>
          <li style={experienceListItemStyle}>
            Utilized React to create responsive user interfaces and used Node.js/Express/Go to build backend services.
          </li>
          <li style={experienceListItemStyle}>
            Implemented RESTful APIs to support front-end functionality for communication between the client and server.
          </li>
          <li style={experienceListItemStyle}>
            Deployed and maintained applications using Jenkins and OpenShift.
          </li>
          <li style={experienceListItemStyle}>
            Provided production support by addressing incident tickets and coordinating with teams to ensure resolution of service outages.
          </li>
          <li style={experienceListItemStyle}>
            Created technical documentation for code, APIs, and integration.
          </li>
        </ul>
      </div>

      <div style={experienceItemStyle}>
        <h3 style={experienceTitleStyle}>Florida Blue/GuideWell: Intern IT Developer</h3>
        <p style={experienceDateStyle}>May 2023 – May 2024</p>
        <ul style={experienceListStyle}>
          <li style={experienceListItemStyle}>
            Developed and implemented a predictive analytics Splunk dashboard to display traffic to services.
          </li>
          <li style={experienceListItemStyle}>
            Resolved bugs in multiple web applications, contributing to overall improvements in software reliability and user experience.
          </li>
        </ul>
      </div>

      <div style={experienceItemStyle}>
        <h3 style={experienceTitleStyle}>UCF Department of Computer Science: Undergraduate Teaching Assistant</h3>
        <p style={experienceDateStyle}>January 2023 – Present</p>
        <ul style={experienceListStyle}>
          <li style={experienceListItemStyle}>
            Conducted office hours to address students’ questions and enhance their understanding of course material.
          </li>
          <li style={experienceListItemStyle}>
            Managed student queries via email and graded assignments and exams in a timely manner.
          </li>
        </ul>
      </div>

      <div style={experienceItemStyle}>
        <h3 style={experienceTitleStyle}>IBM Accelerate, Software Engineering Track</h3>
        <p style={experienceDateStyle}>May 2022 – August 2022</p>
        <ul style={experienceListStyle}>
          <li style={experienceListItemStyle}>
            Attended weekly skills and professional development workshops.
          </li>
          <li style={experienceListItemStyle}>
            Learned basic concepts of JavaScript and React, web app security, event handling, GitHub, server development, and Node.js.
          </li>
        </ul>
      </div>

      <div style={experienceItemStyle}>
        <h3 style={experienceTitleStyle}>Mathnasium - KV: Instructor</h3>
        <p style={experienceDateStyle}>Dec 2021 – May 2023</p>
        <ul style={experienceListStyle}>
          <li style={experienceListItemStyle}>
            Provided personalized math tutoring to students of all ages and skill levels.
          </li>
          <li style={experienceListItemStyle}>
            Delivered tailored instruction in topics ranging from basic arithmetic to advanced algebra and calculus.
          </li>
          <li style={experienceListItemStyle}>
            Adapted teaching methods to suit individual learning styles.
          </li>
          <li style={experienceListItemStyle}>
            Fostered a positive learning environment to build students' confidence and improve their mathematical understanding.
          </li>
          <li style={experienceListItemStyle}>
            Contributed to student success by helping them achieve academic goals and develop a love for math.
          </li>
        </ul>
      </div>

      <div style={experienceItemStyle}>
        <h3 style={experienceTitleStyle}>UCF Burnett Honors College: Honors Symposium Team Leader</h3>
        <p style={experienceDateStyle}>Aug 2021 – Dec 2022</p>
        <ul style={experienceListStyle}>
          <li style={experienceListItemStyle}>
            Served as a Team Leader and teaching assistant for the Freshmen Honors Symposium course during Fall 2021 and Fall 2022.
          </li>
          <li style={experienceListItemStyle}>
            Facilitated weekly breakout discussions following lectures.
          </li>
          <li style={experienceListItemStyle}>
            Monitored student progress through assignments and attendance.
          </li>
          <li style={experienceListItemStyle}>
            Planned social and cultural events to foster team engagement.
          </li>
          <li style={experienceListItemStyle}>
            Participated in weekly meetings to align course objectives and support student success.
          </li>
        </ul>
      </div>

      <div style={lastExperienceItemStyle}>
        <h3 style={experienceTitleStyle}>UCF Burnett Honors College: Honors Orientation Ambassador</h3>
        <p style={experienceDateStyle}>May 2021 – Jun 2022</p>
        <ul style={experienceListStyle}>
          <li style={experienceListItemStyle}>
            Mentored incoming Honors Freshmen during Orientation at UCF.
          </li>
          <li style={experienceListItemStyle}>
            Guided students through course and schedule planning.
          </li>
          <li style={experienceListItemStyle}>
            Introduced students to Honors programs, clubs, and campus resources.
          </li>
          <li style={experienceListItemStyle}>
            Served as a go-to resource for questions about academic life and campus culture, ensuring a smooth transition into the UCF community.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WorkExperience;
