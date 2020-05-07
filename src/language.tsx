import React from 'react';
import { Link } from 'react-router-dom';
import { LOCALES } from './locales';
import { FormattedMessage } from 'react-intl';

const DocLink = () => {
  return (
    <a href="https://github.com/akiver/csgo-demos-manager.com#translation" target="_blank" rel="noopener noreferrer">
      <FormattedMessage id="language.docLink" />
    </a>
  );
};

const Language = () => {
  return (
    <main>
      <div className="container">
        <p>
          <FormattedMessage id="language.availableLanguages" />
        </p>
        <ul>
          {Object.keys(LOCALES).map((locale) => {
            return (
              <li key={`language-link-${locale}`}>
                <Link to={`${locale === 'en' ? '/' : `/${locale}`}`}>{LOCALES[locale]}</Link>
              </li>
            );
          })}
        </ul>
        <p className="has-text-warning">
          <FormattedMessage id="language.missingTranslation" />
        </p>
        <p>
          <FormattedMessage
            id="language.contribute"
            values={{
              docLink: <DocLink />,
            }}
          />
        </p>
      </div>
    </main>
  );
};

export default Language;
