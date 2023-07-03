import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ambienta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
