import React from 'react';
import { FormattedMessage } from 'react-intl';

export const Requirements = () => {
  return (
    <p className="has-text-danger">
      <FormattedMessage
        id="download.requirements"
        values={{
          netFrameworkLink: (
            <a
              href="https://dotnet.microsoft.com/en-us/download/dotnet-framework/net462"
              target="_blank"
              rel="noopener noreferrer"
            >
              .NET Framework 4.6.2
            </a>
          ),
          visualRedistributableLink: (
            <a
              href="https://www.microsoft.com/en-us/download/details.aspx?id=48145"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FormattedMessage id="download.requirements.visualC++Redistributable" />
            </a>
          ),
        }}
      />
    </p>
  );
};
