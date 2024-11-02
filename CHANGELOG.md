# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## [0.4.1]

- Update `better-sqlite3` to new version, to fix compile issues on arm machines

## [0.4.0]

Added for new features. Changed for changes in existing functionality.
Deprecated for soon-to-be removed features. Removed for now removed features.
Fixed for any bug fixes. Security in case of vulnerabilities.

### Fixed

- Use latest sqllite3 to work with NodeJS 16. 17348c1
- Fix embarassing typo 3c26aca

### Changed

- Database name change to greendomain. d9c0a5b
- Update dependencies, tidy with eslint cf05b78
- Merge pull request #2 from
  thegreenwebfoundation/dependabot/npm_and_yarn/ini-1.3.8 ab6e9e6
- Bump ini from 1.3.5 to 1.3.8 63c61c7
- Merge pull request #1 from
  thegreenwebfoundation/dependabot/npm_and_yarn/lodash-4.17.19 70b5c4c
- Bump lodash from 4.17.15 to 4.17.19 8630c5b

## [0.3.0]

- Added some scripts to automate generation and publishing of the JSON to
  consume in downstream tools

## [0.2.0]

- This is the first public release of the the extracted module for looking up
  domains against the green web foundation datasets

### Changed

- Explicitly require Node 16 or greater

## [0.0.3]

### Changed

- Update the README with better licensing
- Add a publish command, and one to generate JSON dumps used by downstream
  packages

## [0.0.2]

- First release! I didn't realise `np` would bump the version number from 0.0.1
  to 0.0.0.2…

## Added

- Added extracted code from co2.js module
- Add database contents, (as an experiment in using npm for distribution)
