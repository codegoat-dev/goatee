# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2025-04-09

### Added

- Adds a "Goatee.Types()" class for clarity. Types can be used to specify element types for example in "<input>" elements.
- Adds support for the "<div"> element using the "Goatee.Container()" class.
- Adds support for the "<section>" element using the "Goatee.Section()" class.
- Adds support for the "<main>" element using the "Goatee.Main()" class.
- Adds support for the "<header>" element using the "Goatee.Header()" class.
- Adds support for the "<footer>" element using the "Goatee.Footer()" class.
- Adds support for the "<label>" element using the "Goatee.Label()" class.

### Changes

- Recursive building is now supported. Your projects can now include nested directories.

## [0.2.6] - 2025-04-09

### Added

- Adds support for the "<audio>" tag using the "Goatee.Audio()" class.

## [0.2.5] - 2025-04-09

### Fixed

- Fixes a project validation error in the Goatee CLI utility.

## [0.2.4] - 2025-04-08

### Added

- Adds support for the "<img>" tag using the "Goatee.Image()" class.

### Changes

- Refactors the Goatee CLI utility to improve error handling and source resolution.

## [0.2.3] - 2025-04-08

### Fixed

- Fixes a syntax error in the Goatee CLI utility.

## [0.2.2] - 2025-04-08

### Fixed

- The Goatee CLI utility now correctly resolves it's own package metadata.

## [0.2.1] - 2025-04-08

### Fixed

- Fixes an issue with the CLI utility not locating the package metadata.

## [0.2.0] - 2025-04-08

### Added

- Added a CLI utility. Use "goatee" from the command line and specify the source and build directories.

## [0.1.11] - 2025-04-08

### Fixed

- Fixes various issues in the example application.

## [0.1.8] - 2025-04-08

### Fixed

- Fixed various issues in the example application.

## [0.1.8] - 2025-04-08

### Added

- Adds support for the "<select>" and "<option>" tags using the "Goatee.Select()" and "Goatee.Option()" classes.
- Adds an example application to demonstrate how to use Goatee.

## [0.1.7] - 2025-04-08

### Changes

- Adds support for bold, italic, underlined and justified text. The "Goatee.Text()" class now includes switches for the new styles.
- Adds support for the "onclick" property in links. The "Goatee.Link()" class now includes an "onclick" property.

## [0.1.6] - 2025-04-07

### Added

- Adds support for raw HTML using the "Goatee.RawHtml()" class.
- Adds support for "<hr>" separators using the "Goatee.Separator()" class.

## [0.1.5] - 2025-04-07

### Changes

- Updates the package readme.

## [0.1.4] - 2025-04-07

### Added

- Published to NPM.

## [0.1.3] - 2025-04-07

### Added

- Adds support for script using the "Goatee.Script()" class.
- Adds support for lists using the "Goatee.OrderedList()" and "Goatee.UnorderedList()" classes.

## [0.1.2] - 2025-04-07

### Added

- Adds support for tables using the "Goatee.Table()" class.

## [0.1.1] - 2025-04-07

### Added

- Implemented code linting.

## [0.1.0] - 2025-04-07

- Initial release.
