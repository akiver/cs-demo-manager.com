import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { LOCALE_PATH_REGEX } from './locales'
import { StatusText } from './status-text'
const Home = React.lazy(() => import('./home'))
const Docs = React.lazy(() => import('./docs'))
const Changelog = React.lazy(() => import('./changelog'))
const Language = React.lazy(() => import('./language'))
const Download = React.lazy(() => import('./download'))

export const Routes = () => {
  return (
    <Suspense fallback={<StatusText textTranslationKey="loading" />}>
      <Switch>
        <Route path={LOCALE_PATH_REGEX} exact component={Home} />
        <Route path={`${LOCALE_PATH_REGEX}/docs`} component={Docs} />
        <Route path={`${LOCALE_PATH_REGEX}/changelog`} component={Changelog} />
        <Route path={`${LOCALE_PATH_REGEX}/language`} component={Language} />
        <Route path={`${LOCALE_PATH_REGEX}/download`} component={Download} />
        <Route path={`${LOCALE_PATH_REGEX}/downloads`} component={Download} />
      </Switch>
    </Suspense>
  )
}
