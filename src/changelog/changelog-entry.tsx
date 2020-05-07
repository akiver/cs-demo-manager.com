import React from 'react';
import { Version } from '../versions';
import { AnchorLink } from '../anchor-link';
import { useMarkdownLoader } from '../hooks/use-markdown-loader';
import { useParams } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { MarkdownRenderer } from '../markdown-renderer';

type Props = {
  version: Version;
  isLastEntry: boolean;
};

export const ChangelogEntry = ({ version, isLastEntry }: Props) => {
  const markdown = useMarkdownLoader(`changelog/${version.number}`);
  const { locale } = useParams();
  return (
    <div className="column is-full" id={version.number}>
      <span className="title version-number">{version.number}</span>
      <span className="is-size-4 release-date">{`(${version.releaseDate.toLocaleDateString(locale)})`}</span>
      <AnchorLink to={version.number} />
      <div className="changelog">
        {markdown === undefined ? (
          <p>
            <FormattedMessage id="changelog.noChangelog" />
          </p>
        ) : (
          <MarkdownRenderer markdown={markdown} />
        )}
      </div>
      {!isLastEntry && <hr />}
    </div>
  );
};
