import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';

type LinkProps = {
  href: string;
  children: ReactNode;
};

const Link = ({ href, children }: LinkProps) => {
  const target = href.includes('#') ? '_self' : '_blank';

  return (
    <a href={href} target={target} rel="noopener noreferrer">
      {children}
    </a>
  );
};

type Props = {
  markdown?: string;
  className?: string;
};

export const MarkdownRenderer = ({ markdown, className }: Props) => {
  return (
    <ReactMarkdown
      className={className}
      source={markdown}
      escapeHtml={false}
      renderers={{
        link: Link,
      }}
    />
  );
};
