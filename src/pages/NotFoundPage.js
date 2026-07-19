import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="section-kicker">404</p>
        <h2>Page not found.</h2>
      </div>
      <p className="page-description">The page you requested is not available.</p>
      <Link className="button button-primary" to="/">Return Home</Link>
    </section>
  );
}

export default NotFoundPage;
