import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Credits = () => {
  return (
    <div className="footer-credits">
      <img src="/images/logo.png" alt="Logo" className="footer-logo" />
      <p>
        <FormattedMessage
          id="footer.credits"
          values={{
            csgoDemoManager: <span className="has-text-success">CSGO Demo Manager</span>,
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
