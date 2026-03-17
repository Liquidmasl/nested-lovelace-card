# nested-lovelace-card — Claude context

## What this is

A Home Assistant Lovelace custom card that nests multiple cards into a single container, stacked vertically or horizontally. Forked from [ofekashery/vertical-stack-in-card](https://github.com/ofekashery/vertical-stack-in-card).

**The custom element is deliberately kept as `custom:vertical-stack-in-card`** so existing user dashboards require no changes when switching to this fork.

## Key files

| File | Purpose |
|------|---------|
| `nested-lovelace-card.js` | The entire card — single vanilla JS file, no build step |
| `package.json` | Version source of truth |
| `scripts/version.js` | Patches the version string in the JS file |
| `CHANGELOG.md` | User-facing changelog, parsed by the release workflow |
| `hacs.json` | HACS metadata |

## Releasing a new version

The only command you need:

```bash
npm version patch    # or minor / major
git push origin main --follow-tags
```

This will:
1. Bump the version in `package.json`
2. Run `scripts/version.js` which patches the `Version: ${'x.x.x'}` string in `nested-lovelace-card.js`
3. Create a git commit and tag
4. The tag push triggers the GitHub Actions release workflow, which creates a GitHub Release with `nested-lovelace-card.js` as the artifact and pulls notes from `CHANGELOG.md`

**Always add a `## [x.x.x]` entry to `CHANGELOG.md` before running `npm version`**, otherwise the release notes will just say "No changelog entry found".

## Architecture

No build pipeline. `nested-lovelace-card.js` is shipped as-is. Do not introduce dependencies that require bundling unless you also set up a build step and update the release workflow accordingly.

## Known deferred work

- `overflow: hidden` on the outer `ha-card` clips dropdown/popup elements from child cards (e.g. input_select). Needs a fix that doesn't break the border/radius hiding. Tracked in ofekashery/vertical-stack-in-card#179.
- Spacing control between nested cards — tracked in [#1](https://github.com/Liquidmasl/nested-lovelace-card/issues/1).

## Original repo issues already fixed

- **Visual editor stripping config properties** (`horizontal`, `styles`, `grid_options`, `visibility`, etc.) — fixed in commit `0962c93`. Root cause: `getConfigElement()` intercepted `config-changed` events and only forwarded `type/title/cards`.
