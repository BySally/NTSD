# Nuclear Tech: Second Dawn 0.1.0-alpha.6

## GitHub CF5 packages

- Published the Native client with 122 pinned mods and the Server Pack with 93 pinned mods for an installed Forge server.
- Core CF5 fixes Nether quartz appearing in new Overworld stone. Vanilla Nether quartz and existing chunks are preserved.
- Retained the existing CurseForge App client on Core CF4. [CF5 corresponding source](https://github.com/BySally/NTSD-Core/releases/tag/v0.1.0-ntsd-cf5).

First public GitHub pre-release. BySally — Project Creator & Maintainer.

- Packages the current alpha.6 candidate for Minecraft 1.20.1, Forge 47.4.28 and Java 17.
- Retains the alpha.6 PneumaticCraft Drone Interface recipe fix, NTSD window icon and animated main-menu return fixes.
- Includes Core 0.1.0-ntsd-cf4: owner-approved font A replaces the rejected Press Start 2P. The book font is constructed in memory from installed Minecraft font providers; no old font bitmap/TTF/HEX data are redistributed. Some Cyrillic details and wrapping differ from the working legacy font.
- Retains CF3's removal of personal absolute paths from four provenance JSON files. Existing Mod IDs and registry IDs remain unchanged.
- Includes Early Loading 0.1.1 and Menu Background 0.1.2 with exact corresponding sources.
- Uses official HBM Continuum 1.0.3, Continuum Space 1.0.0, Golem Core 1.0.3 and the previously selected official same-version mod files. Some private custom HBM translations are absent.
- Provides a tested CurseForge App client import ZIP, server bootstrap, pinned SHA-256 lists, bilingual installation/update instructions, credits and scoped license notices.
- Preserves existing quests, rewards, recipes, balance and world-generation rules. The 418-quest book still has known unsupported conditions; this is not a completed NTNH port. Terralith remains disabled.

See TEST_RESULTS.md for the actual checks and their limits. Installation does not depend on moderation of the three NTSD CurseForge projects.

## Public page and download maintenance

- GitHub Release description is English-only; README and website retain English and Russian.
- Client asset renamed to `NTSD-0.1.0-alpha.6-CurseForge.zip` through GitHub API; archive bytes and SHA-256 are unchanged. The server filename and contents are unchanged.
- Russian installation instructions remain available; current download links were updated.
