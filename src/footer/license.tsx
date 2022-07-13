import React from 'react';
import { FormattedMessage } from 'react-intl';
import { GitHubLink } from '../github-link';

export const License = () => {
  return (
    <div>
      <p>
        <FormattedMessage
          id="footer.license"
          values={{
            githubLink: <GitHubLink />,
            licenseLink: <GitHubLink suffixUrlPath="/blob/main/LICENSE" text="GPL v2" />,
          }}
        />
      </p>
    </div>
  );
};
