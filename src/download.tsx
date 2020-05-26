import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Requirements } from './download/requirements';
import { Donate } from './download/donate';
import { Compatibility } from './download/compatibility';
import { DownloadLink } from './download/download-link';
import { Source } from './download/source';
import { NextVersionWarning } from './next-version-warning';

const Download = () => {
  return (
    <div className="container">
      <div className="column is-full">
        <NextVersionWarning />
        <h1 className="title">
          <FormattedMessage id="download.title" />
        </h1>
        <Compatibility />
        <div className="has-text-centered">
          <Source />
          <DownloadLink />
          <Requirements />
        </div>
        <Donate />
      </div>
    </div>
  );
};

export default Download;
