import { useParams } from 'react-router-dom';

export const useLocalePrefix = (path: string): string => {
  const { locale } = useParams<{ locale: string | undefined }>();
  const prefix = locale === undefined ? '' : `/${locale}`;
  return `${prefix}${path}`;
};
