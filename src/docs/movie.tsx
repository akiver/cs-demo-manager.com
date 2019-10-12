import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { LOCALE_PATH_REGEX } from '../locales'
import { useLocalePrefix } from '../hooks/use-locale-prefix'
import { VirtualDub } from './movie/virtualdub'
import { Config } from './movie/config'
import { Ffmpeg } from './movie/ffmpeg'
import { Hlae } from './movie/hlae'
import { General } from './movie/general'
import { GettingStarted } from './movie/getting-started'
import { FormattedMessage } from 'react-intl'

export const Movie = () => {
  return (
    <div className="columns">
      <div className="column is-2">
        <aside className="menu">
          <ul className="menu-list">
            <li>
              <NavLink activeClassName="is-active" to={useLocalePrefix('/docs/movie/getting-started')}>
                <FormattedMessage id="docs.movie.gettingStarted" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={useLocalePrefix('/docs/movie/general')}>
                <FormattedMessage id="docs.movie.general" />
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={useLocalePrefix('/docs/movie/hlae')}>
                HLAE
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={useLocalePrefix('/docs/movie/ffmpeg')}>
                FFmpeg
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={useLocalePrefix('/docs/movie/virtualdub')}>
                VirtualDub
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to={useLocalePrefix('/docs/movie/cfg')}>
                <FormattedMessage id="docs.movie.cfg" />
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>

      <main className="column is-10">
        <Switch>
          <Route path={`${LOCALE_PATH_REGEX}/docs/movie/getting-started`} component={GettingStarted} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/movie/general`} component={General} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/movie/hlae`} component={Hlae} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/movie/ffmpeg`} component={Ffmpeg} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/movie/virtualdub`} component={VirtualDub} />
          <Route path={`${LOCALE_PATH_REGEX}/docs/movie/cfg`} component={Config} />
          <Redirect to={`${LOCALE_PATH_REGEX}/docs/movie/getting-started`} />
        </Switch>
      </main>
    </div>
  )
}

export default Movie
