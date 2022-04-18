import { useParams } from 'react-router-dom';
const markdowns: { [filePath: string]: string } = import.meta.globEager('../markdown/**/*.md', { as: 'raw' });

export const useMarkdownLoader = (markdownFilePath: string): string => {
  const params = useParams<{ locale: string | undefined }>();
  const locale = params.locale ?? 'en';
  const filePath = `../markdown/${markdownFilePath}.${locale}.md`;

  return markdowns[filePath] ?? '';
};
