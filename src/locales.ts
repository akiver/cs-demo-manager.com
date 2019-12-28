export const LOCALES: { [locale: string]: string } = {
  en: 'English',
  fr: 'Francais',
  zh: '中文',
}

export const LOCALE_PATH_REGEX = `/:locale(${Object.keys(LOCALES)
  .map(locale => locale)
  .join('|')})?`
