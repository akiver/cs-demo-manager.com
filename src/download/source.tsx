import React from 'react';
import { FormattedMessage } from 'react-intl';
import { GitHubLink } from '../github-link';

export const Source = () => {
  return (
    <h2 className="subtitle has-text-warning">
      <FormattedMessage
        id="download.source"
        values={{
          githubLink: <GitHubLink suffixUrlPath="/releases" />,
        }}
      />
    </h2>
  );
};
