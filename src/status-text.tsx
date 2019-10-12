import React from 'react'
import { FormattedMessage } from 'react-intl'

type Props = {
  textTranslationKey: string
  textClassName?: string
}

export const StatusText = ({ textTranslationKey, textClassName = '' }: Props) => {
  return (
    <div className="container has-text-centered">
      <p className={`is-size-3 ${textClassName}`}>
        <FormattedMessage id={textTranslationKey} />
      </p>
    </div>
  )
}
