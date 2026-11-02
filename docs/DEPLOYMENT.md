# NTSD website deployment and maintenance

This document is for the maintainer of the **Nuclear Tech: Second Dawn** website. The public-facing repository homepage is [README.md](../README.md).

## Current configuration

- GitHub repository: https://github.com/BySally/NTSD
- GitHub Pages: https://bysally.github.io/NTSD/
- Source: `main` branch, `/(root)`
- Site entry point: [index.html](../index.html)
- Styling: [styles.css](../styles.css)
- Client-side logic and translations: [app.js](../app.js)
- Repository settings and release URL overrides: [site-config.js](../site-config.js)
- Assets: [assets](../assets)
- Issues templates: [../.github/ISSUE_TEMPLATE](../.github/ISSUE_TEMPLATE)

## Publishing or verifying GitHub Pages

1. Open [Settings → Pages](https://github.com/BySally/NTSD/settings/pages).
2. Under **Build and deployment**, choose **Deploy from a branch**, **main**, **/(root)**.
3. Save and confirm the published URL in the Pages settings when deployment completes.
4. For deployment failures, check [Actions](https://github.com/BySally/NTSD/actions).
5. The `.nojekyll` file allows direct publication without Jekyll processing.

## Updating content

- **News**: update the relevant markup in `index.html` and both Russian and English strings in `app.js`.
- **Downloads**: publish a real non-draft public GitHub Release and attach the client/server artifacts. The website checks GitHub Releases. For manual links, set `clientDownloadUrl` / `serverDownloadUrl` in `site-config.js`.
- **Version or status**: change displayed text only once confirmed by actual development/release status.
- **Background**: `assets/ntsd-orbital-background-qhd.mp4`; poster fallback: `assets/ntsd-orbital-poster.webp`.
- **Issues**: verify that Issues is enabled under Settings → General → Features. Templates are in `.github/ISSUE_TEMPLATE`.
- **Privacy**: never upload crash logs, access tokens, player data, or private server configurations into this public repository.

## Credits and licenses

See [CREDITS.md](../CREDITS.md) and [LICENSE_NOTICE.md](../LICENSE_NOTICE.md). Adapted NTNH content and third-party mods retain their own licenses. The website's AI-generated images should not automatically be represented as exclusively copyrighted works.

## Site-preview note

Open `index.html` locally or through a local HTTP server to preview. Some GitHub API requests may be limited locally or before a release is public. Do not treat a preview as a successful deployment.
