import React from 'react'
import { FormattedMessage } from 'react-intl'
import { DocTabLink } from './doc-tab-link'
import { useLocalePrefix } from '../hooks/use-locale-prefix'

export const DocsTabs = () => {
  return (
    <div className="tabs">
      <ul>
        <DocTabLink to={useLocalePrefix('/docs/about')}>
          <FormattedMessage id="docs.tab.about" />
        </DocTabLink>
        <DocTabLink to={useLocalePrefix('/docs/general')}>
          <FormattedMessage id="docs.tab.general" />
        </DocTabLink>
        <DocTabLink to={useLocalePrefix('/docs/analyze')}>
          <FormattedMessage id="docs.tab.analyze" />
        </DocTabLink>
        <DocTabLink to={useLocalePrefix('/docs/stats')}>
          <FormattedMessage id="docs.tab.stats" />
        </DocTabLink>
        <DocTabLink to={useLocalePrefix('/docs/watch')}>
          <FormattedMessage id="docs.tab.watch" />
        </DocTabLink>
        <DocTabLink to={useLocalePrefix('/docs/suspects')}>
          <FormattedMessage id="docs.tab.suspects" />
        </DocTabLink>
        <DocTabLink to={useLocalePrefix('/docs/downloads')}>
          <FormattedMessage id="docs.tab.downloads" />
        </DocTabLink>
        <DocTabLink to={useLocalePrefix('/docs/movie')}>
          <FormattedMessage id="docs.tab.movie" />
        </DocTabLink>
      </ul>
    </div>
  )
}
