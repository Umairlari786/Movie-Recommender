import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Cinema Hub</h1>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Cinema Hub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
