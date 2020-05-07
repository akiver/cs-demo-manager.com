import { useParams } from 'react-router-dom';

export const useMarkdownLoader = (markdownFilePath: string): string | undefined => {
  const params = useParams<{ locale: string }>();
  const locale = params.locale ? params.locale : 'en';
  let markdown: string | undefined;
  try {
    markdown = require(`../markdown/${markdownFilePath}.${locale}.md`).default;
  } catch (error) {
    try {
      markdown = require(`../markdown/${markdownFilePath}.en.md`).default;
    } catch (error) {
      console.error(`Markdown file ${markdownFilePath} not found for ${locale} locale and en`);
    }
  }

  return markdown;
};
