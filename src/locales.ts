export const LOCALES: { [locale: string]: string } = {
  en: 'English',
  fr: 'Francais',
  zh: '中文',
  de: 'Deutsch',
};

export const LOCALE_PATH_REGEX = `/:locale(${Object.keys(LOCALES).join('|')})?`;
