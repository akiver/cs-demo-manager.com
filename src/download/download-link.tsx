import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { GitHubRelease } from '../github-release';

const GITHUB_API_URL = 'https://api.github.com/repos/akiver/csgo-demos-manager/releases/latest';

export const DownloadLink = () => {
  const [error, setError] = useState<string | undefined>();
  const [lastVersion, setLastVersion] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const { formatMessage } = useIntl();

  useEffect(() => {
    const fetchLastRelease = async (): Promise<void> => {
      try {
        const response: Response = await fetch(GITHUB_API_URL);
        const data: GitHubRelease = await response.json();
        setLastVersion(data.tag_name);
      } catch (error) {
        setError(
          formatMessage({
            id: 'download.error',
          })
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchLastRelease();
  }, [formatMessage]);

  if (isLoading) {
    return (
      <p>
        {formatMessage({
          id: 'download.loadingLink',
        })}
      </p>
    );
  }

  if (error !== undefined) {
    return <p className="has-text-danger">{error}</p>;
  }

  return (
    <div>
      <a
        className="button is-success is-large has-text-dark"
        href="https://github.com/akiver/CSGO-Demos-Manager/releases/latest"
      >
        <FormattedMessage
          id="download.button"
          values={{
            version: lastVersion,
          }}
        />
      </a>
      <p className="has-text-warning">
        <FormattedMessage id="download.checksum" />
      </p>
    </div>
  );
};
