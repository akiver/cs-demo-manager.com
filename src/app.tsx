import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer';
import { Routes } from './routes';
type TranslationsMap = {
  [localeFilePath: string]: {
    default: { id: string; value: string };
  };
};
const translations: TranslationsMap = import.meta.globEager('./translations/*.json');

type Props = RouteComponentProps<{ locale?: string }>;

export const App = ({ match }: Props) => {
  const locale = match.params.locale ?? 'en';
  const messages = translations[`./translations/${locale}.json`];
  const mergedMessages = {
    ...translations[`./translations/en.json`].default,
    ...messages.default,
  };
  return (
    <IntlProvider locale={locale ? locale : 'en'} messages={mergedMessages}>
      <Navbar />
      <div className="main">
        <Routes />
      </div>
      <Footer />
    </IntlProvider>
  );
};
