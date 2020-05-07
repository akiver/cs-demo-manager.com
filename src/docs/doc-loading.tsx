import React from 'react';
import { FormattedMessage } from 'react-intl';

export const DocLoading = () => {
  return (
    <p className="is-size-3">
      <FormattedMessage id="loading" />
    </p>
  );
};
