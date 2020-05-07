import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { DocsTabs } from './docs/docs-tabs';
import { LOCALE_PATH_REGEX } from './locales';
import { DocLoading } from './docs/doc-loading';
const About = React.lazy(() => import('./docs/about'));
const Analyze = React.lazy(() => import('./docs/analyze'));
const General = React.lazy(() => import('./docs/general'));
const Stats = React.lazy(() => import('./docs/stats'));
const Watch = React.lazy(() => import('./docs/watch'));
const Suspects = React.lazy(() => import('./docs/suspects'));
const Downloads = React.lazy(() => import('./docs/downloads'));
const Movie = React.lazy(() => import('./docs/movie'));

const Docs = () => {
  return (
    <div className="container">
      <DocsTabs />
      <Suspense fallback={<DocLoading />}>
        <Switch>
          <Route path={`${LOCALE_PATH_REGEX}/docs/about`} component={About} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/general`} component={General} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/analyze`} component={Analyze} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/stats`} component={Stats} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/watch`} component={Watch} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/suspects`} component={Suspects} />
          {/* legacy /download URL for backward compatibility */}
          <Route path={`${LOCALE_PATH_REGEX}/docs/download`} component={Downloads} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/downloads`} component={Downloads} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/movie`} component={Movie} />
          <Redirect to={`${LOCALE_PATH_REGEX}/docs/about`} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Docs;
