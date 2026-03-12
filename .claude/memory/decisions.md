# Migration Decisions

## Gatsby 2 → 5 Migration (2026-03-12)

- Switched from `netlify-cms-app` + `gatsby-plugin-netlify-cms` to `decap-cms-app@3.6.4` (pinned exact version, not range, since 3.7+ requires React 19) + `gatsby-plugin-decap-cms@4.x`
- Converted `all.sass` to `all.scss` (new file) because dart-sass no longer allows importing `.scss` files from `.sass` indented syntax files. The old `all.sass` was kept but unused.
- Used `@use "bulma/sass" as bulma` with variable overrides via `with()`, and separately `@use "bulma/sass/utilities/mixins" as mx` for responsive mixins (not forwarded in Bulma 1.x public API)
- gatsby-plugin-sass configured with `sassOptions.loadPaths` pointing to `node_modules` for path resolution
- GraphQL sort syntax updated to Gatsby 5 style: `sort: { frontmatter: { date: DESC } }`
- All `fluid`/`GatsbyImageSharpFluid` queries replaced with `gatsbyImageData`/`layout: CONSTRAINED`
- Background image src path changed from `.fluid.src` to `.gatsbyImageData.images.fallback.src`
- `gatsby-link` imports in contact pages changed to `{ Link }` / `{ navigate }` from `gatsby`

## React 18 → 19 Migration (2026-03-12)

- Upgraded react/react-dom to ^19.0.0, gatsby to ^5.16.0, decap-cms-app to ^3.9.0 (resolves to 3.10.1 which requires React ^19.1.0)
- Replaced react-helmet + gatsby-plugin-react-helmet with Gatsby Head API: created `src/components/Seo.js` as a reusable head component, added `export const Head` to every page and template file
- React 19 removed UMD builds; gatsby-plugin-decap-cms@4 copies `react/umd/react.production.min.js` — solved with `scripts/patch-react-umd.js` postinstall script creating empty stubs (safe because decap-cms-app 3.10+ bundles React internally)
