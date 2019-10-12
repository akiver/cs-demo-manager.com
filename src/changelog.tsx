import React, { useState, useEffect } from 'react'
import semver from 'semver'
import { ChangelogEntry } from './changelog/changelog-entry'
import { VERSIONS, Version } from './versions'
import { GitHubRelease } from './github-release'
import { StatusText } from './status-text'

const GITHUB_API_URL = 'https://api.github.com/repos/akiver/csgo-demos-manager/releases'
const FIRST_RELEASE_THROUGH_GITHUB = '2.13.8'

const buildVersionFromGitHubRelease = (release: GitHubRelease): Version => {
  const { tag_name } = release
  return {
    number: String(semver.coerce(tag_name)),
    releaseDate: new Date(release.created_at),
  }
}

const buildVersionsFromGithubReleases = (releases: GitHubRelease[]) => {
  return releases
    .filter(release => {
      return semver.compare(release.tag_name, FIRST_RELEASE_THROUGH_GITHUB) >= 0
    })
    .map(release => {
      return buildVersionFromGitHubRelease(release)
    })
    .concat(VERSIONS)
}

const Changelog = () => {
  const [error, setError] = useState<string | undefined>()
  const [versions, setVersions] = useState<Version[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchVersions = async (): Promise<void> => {
      try {
        const response: Response = await fetch(GITHUB_API_URL)
        const releases: GitHubRelease[] = await response.json()
        setVersions(buildVersionsFromGithubReleases(releases))
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'An unknown error occured while retrieving changelog'
        setError(errorMessage)
      } finally {
        setIsLoading(false)
      }
    }

    fetchVersions()
  }, [])

  if (isLoading) {
    return <StatusText textTranslationKey="changelog.loading" />
  }

  if (error !== undefined) {
    return <StatusText textTranslationKey="changelog.fetchError" textClassName="has-text-danger" />
  }

  return (
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-full content">
          {versions.map((version, index) => {
            return (
              <ChangelogEntry
                key={`changelog-${version.number}`}
                version={version}
                isLastEntry={index === VERSIONS.length}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Changelog
