# Nuclear Tech: Second Dawn — Website

**Creator:** BySally  
**Minecraft:** 1.20.1 (Forge)  
**Status:** Alpha development, public downloads not yet available.

This repository contains a static GitHub Pages website for the independent **Nuclear Tech: Second Dawn** modpack. Features: responsive site, English/Russian language toggle, video background in 1440p, release detection, separate client/server download cards, news, and GitHub Issues reporting.

## Deployment

1. Create a public GitHub repository named **NTSD** under **BySally** (or adjust `site-config.js` for a different name).
2. Upload the **contents of this folder** (not the parent folder) to the root of its `main` branch. Keep the hidden `.github` and `.nojekyll` files.
3. In repository Settings → Pages → Build and deployment, select **Deploy from a branch** → **main** → **/(root)** → Save.
4. When published, the expected address is `https://bysally.github.io/NTSD/` (only after GitHub publishes it).
5. Confirm Settings → General → Features → Issues is enabled. The Issues buttons activate when the repository is publicly accessible.
6. Create your first non-draft non-prerelease Release in GitHub Releases. The website will detect the latest public Release automatically. For direct file links use `clientDownloadUrl` and `serverDownloadUrl` in `site-config.js`. Until then it truthfully displays "Coming soon".
7. Update news by editing the news section in `index.html`, both RU and EN translations in `app.js`, and dates. Do not publish unverified progress as finished releases.

## Images and licenses

Visual assets were created for NTSD using OpenAI-generated imagery and custom edits. This does not establish exclusive copyright for every AI-generated element. The website credits adapted quest/worldgen material from [Nuclear Tech: New Horizons](https://github.com/NTNewHorizons/NTNH). Original NTNH content remains subject to its license; third-party Minecraft mods retain their licenses. Do not redistribute third-party JARs in this website repository.

## Local preview

Open `index.html` in your browser or use a simple local web server. GitHub API checks might be unavailable locally or until the repository is published; this is expected.
