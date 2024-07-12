import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const FooterBar = () => {
  return (
    <footer className="md-footer">
      <div className="md-footer-meta md-typeset">
        <div className="md-footer-meta__inner md-grid">
          <div className="md-copyright">
            <div className="md-copyright__highlight">
              © 2024 Crazy Capital Solutions Inc. All rights reserved.
            </div>
            <br />
            Made with Love from Berlin
          </div>
          <div className="md-social">
            <a
              className="md-social__link"
              href="https://github.com/joris68"
              rel="noopener"
              target="_blank"
              title="github.com"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

