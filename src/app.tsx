import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer';
import { Routes } from './routes';

type TranslationsMap = { [locale: string]: { id: string; value: string } };
const translations: TranslationsMap = require('./translations').default;

type Props = RouteComponentProps<{ locale?: string }>;

export const App = ({ match }: Props) => {
  const { locale } = match.params;
  const messages = translations[locale ? locale : 'en'];
  const mergedMessages = {
    ...translations['en'],
    ...messages,
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
