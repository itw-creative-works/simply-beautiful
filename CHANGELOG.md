# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## Changelog Categories

- `BREAKING` for breaking changes.
- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

---
## [1.0.2] - 2026-07-24
### Added
- Real test coverage for `html`, `css`, `js`, and `json`, replacing the placeholder test that always failed.
- Declared publish intent explicitly with `private: false` and `publishConfig.access`.

### Changed
- Updated `itwcw-package-analytics`, `mocha`, and `prepare-package` to their latest versions. Build output is unchanged.
- Fixed the `test` script, which pointed at a mocha binary path that no longer exists in mocha 11.

### Removed
- Removed the Code Climate badge and `.codeclimate.yml`. The service is retired and the badge rendered as "retired badge".
- Removed the unused `fs-jetpack` dev dependency.

---
## [1.0.0] - 2024-06-19
### Added
- Initial release of the project 🚀
