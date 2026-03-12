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
