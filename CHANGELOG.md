# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.0.6]

### Fixed

- Vertical stacks no longer expand to fill all available space when a nested `horizontal-stack` card is present. This was caused by HA 2025.x setting `height: 100%` on horizontal-stack host elements — combined with our container also using `height: 100%`, child cards would resolve their height against the full grid-allocated height. Fixed by making vertical stacks content-driven (no explicit height), while horizontal stacks retain `height: 100%` to correctly fill their allocated grid row.

## [1.0.5]

### Fixed

- Visual editor: adding new cards via the card picker now works correctly.

### Added

- Visual editor now has a toggle to switch between vertical and horizontal stacking without editing YAML.
- Child card width and height can be controlled proportionally via `grid_options.columns` (horizontal mode) and `grid_options.rows` (vertical mode) on each child card.

## [1.0.4]

### Added

- Horizontal toggle in the visual editor.
- `getLayoutOptions()` support so `grid_options` works correctly in the sections dashboard.

## [1.0.3]

- Fix visual editor breaking card layout when child cards fire their own config-changed events.

## [1.0.2]

- Internal: move version script to a dedicated file for cross-platform compatibility.

## [1.0.1]

### Fixed

- Config properties (`horizontal`, `styles`, `grid_options`, `visibility`, etc.) are no longer lost when saving the card through the visual editor.

## [1.0.0]

### Changed

- Forked from the original vertical-stack-in-card. Card type stays `custom:vertical-stack-in-card` — no changes needed in your dashboards.
