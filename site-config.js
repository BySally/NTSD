// Public alpha.6 direct-download fallback. Update these links with every new release.
window.NTSD_CONFIG = {
  githubOwner: 'BySally',
  githubRepo: 'NTSD',
  // Once a release is published, the site discovers it automatically via GitHub API.
  // These known-good URLs work even when the GitHub Releases API is unavailable.
  clientDownloadUrl: 'https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-Native.zip',
  serverDownloadUrl: 'https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-Server.zip',
  // Keep as true: downloads must not open nonexistent files.
  checkGithubAvailability: true,
  defaultLanguage: 'ru'
};
