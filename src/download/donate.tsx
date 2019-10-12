import React from 'react'
import { FormattedMessage } from 'react-intl'
import { DonateButton } from './donate-button'

export const Donate = () => {
  return (
    <div>
      <h1 className="title">
        <FormattedMessage id="download.donate.title" />
      </h1>
      <h2 className="subtitle">
        <FormattedMessage id="download.donate" />
      </h2>
      <DonateButton />
    </div>
  )
}
