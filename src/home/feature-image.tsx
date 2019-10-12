import React from 'react'
import { useIntl } from 'react-intl'

type Props = {
  src: string
  altTranslationKey: string
}

export const FeatureImage = ({ src, altTranslationKey }: Props) => {
  const intl = useIntl()
  return (
    <div className="column is-8">
      <figure className="image">
        <img
          src={src}
          alt={intl.formatMessage({
            id: altTranslationKey,
          })}
        />
      </figure>
    </div>
  )
}
