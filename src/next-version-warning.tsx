import React from 'react';
import { FormattedMessage } from 'react-intl';

export const NextVersionWarning = () => {
  return (
    <div className="has-text-warning">
      <p className="is-marginless">
        <FormattedMessage id="nextVersion.warning" />
      </p>
      <p>
        <FormattedMessage
          id="nextVersion.recommendation"
          values={{
            twitterLink: (
              <a href="https://twitter.com/CSGODemoManager" target="_blank" rel="noopener noreferrer">
                @CSGODemoManager
              </a>
            ),
          }}
        />
      </p>
    </div>
  );
};
