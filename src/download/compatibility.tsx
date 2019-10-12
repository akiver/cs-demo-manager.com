import React from 'react'
import { FormattedMessage } from 'react-intl'
import { GitHubLink } from '../github-link'

export const Compatibility = () => {
  return (
    <h2 className="subtitle">
      <FormattedMessage
        id="download.compatibility"
        values={{
          githubLink: <GitHubLink />,
        }}
      />
    </h2>
  )
}
