import React from 'react';
import { FormattedMessage } from 'react-intl';
import logoImage from '../images/logo.png';

export const Credits = () => {
  return (
    <div className="footer-credits">
      <img src={logoImage} alt="Logo" className="footer-logo" />
      <p>
        <FormattedMessage
          id="footer.credits"
          values={{
            csgoDemosManager: <span className="has-text-success">CSGO Demos Manager</span>,
            authorLink: (
              <a href="https://steamcommunity.com/id/AkiVer/" target="_blank" rel="noopener noreferrer">
                AkiVer
              </a>
            ),
          }}
        />
      </p>
    </div>
  );
};
