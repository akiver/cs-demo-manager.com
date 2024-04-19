import React, { useEffect, useState } from 'react';

type GitHubRelease = {
  tag_name: string;
  published_at: string;
};

export function DownloadLinks() {
  const [version, setVersion] = useState('');

  useEffect(() => {
    const fetchRelease = async () => {
      const response = await fetch(`https://api.github.com/repos/akiver/cs-demo-manager/releases/latest`);
      const lastRelease: GitHubRelease = await response.json();
      const date = new Intl.DateTimeFormat().format(new Date(lastRelease.published_at));

      setVersion(`${lastRelease.tag_name} · ${date}`);
    };

    fetchRelease();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <a
        href="https://github.com/akiver/cs-demo-manager/releases"
        className="button button--primary button--lg"
        target="_blank"
      >
        Download on GitHub
      </a>
      <small className="mt-1">{version}</small>
    </div>
  );
}
