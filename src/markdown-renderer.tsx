import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';

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
        // eslint-disable-next-line
        link: (props: { href: string; children: ReactNode }) => {
          const target = props.href.includes('#') ? '_self' : '_blank';

          return (
            <a href={props.href} target={target} rel="noopener noreferrer">
              {props.children}
            </a>
          );
        },
      }}
    />
  );
};
