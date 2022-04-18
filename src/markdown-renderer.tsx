import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

type Props = {
  markdown: string;
  className?: string;
};

export const MarkdownRenderer = ({ markdown, className }: Props) => {
  return (
    <ReactMarkdown
      className={className}
      rehypePlugins={[rehypeRaw]}
      linkTarget={(href) => {
        return href.includes('#') ? '_self' : '_blank';
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};
