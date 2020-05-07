import React from 'react';
import { FormattedMessage } from 'react-intl';

export const TwitterLink = () => {
  return (
    <div>
      <p>
        <FormattedMessage
          id="footer.twitter"
          values={{
            twitterLink: (
              <a className="" href="https://twitter.com/CSGODemoManager" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            ),
          }}
        />
      </p>
    </div>
  );
};
