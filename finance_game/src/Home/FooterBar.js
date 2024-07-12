import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterBar = () => {
  const socialLinks = [
    { url: 'https://www.youtube.com/c/NeetCode', icon: faYoutube },
    { url: 'https://www.linkedin.com/in/navdeep-singh-3aaa14161/', icon: faLinkedin }
  ];

  return (
    <footer className="footer">
      <div className="flex-container-col">
        <hr className="divider" />
      </div>
      <div className="flex-container-row">
        {socialLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
      <div className="content has-text-centered">
        <p>Copyright © 2024 Asset Allocation Game All rights reserved.</p>
        <p>contact: &nbsp; Support Asset Allocation</p>
        <a href="https://github.com/joris68" target="_blank" rel="noreferrer">
          Github
        </a>
        <a >Privacy</a>
        <a >Terms</a>
      </div>
    </footer>
  );
};

export default Footer;
