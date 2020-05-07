import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LOCALE_PATH_REGEX } from './locales';
import { App } from './app';

export const Root = () => {
  return (
    <Router>
      <Route path={LOCALE_PATH_REGEX} component={App} />
    </Router>
  );
};
