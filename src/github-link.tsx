import React from 'react'

type Props = {
  text?: string
  suffixUrlPath?: string
}

export const GitHubLink = ({ text, suffixUrlPath = '' }: Props) => (
  <a
    href={`https://github.com/akiver/csgo-demos-manager${suffixUrlPath}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text !== undefined ? text : 'GitHub'}
  </a>
)
