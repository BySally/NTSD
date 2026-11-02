# NTSD release gate — publish only after PASS

Project: Nuclear Tech: Second Dawn, Minecraft 1.20.1 Forge. Author: BySally.

**Current state: NOT VERIFIED — do not publish files until checks are completed.**
The GitHub repository currently holds the project WEBSITE, not the complete playable modpack.

## Code and content freeze

- [ ] Confirm source client/server profiles and exact Forge loader version.
- [ ] Confirm version/tag and meaningful changelog; alpha.6 (0.1.0-alpha.6) is the current candidate, not a verified public release.
- [ ] Inventory all enabled and disabled JARs and their SHA-256.
- [ ] Ensure duplicate mod IDs, mismatched loader/game version and missing dependencies are resolved.
- [ ] Check client-only mods do not enter the dedicated server.
- [ ] Verify own scripts, config, recipes, quest content, worldgen and custom assets are included and credited.
- [ ] Audit blocked/disabled Terralith and known issues; disclose unresolved issues accurately.

## CurseForge audit — hard blocker if unverified

- [ ] Every enabled client JAR mapped to an exact official CurseForge project ID AND file ID compatible with Forge 1.20.1, or explicitly reported as non-CF.
- [ ] CF-hosted JARs are referenced via `manifest.json` rather than embedded in `overrides/mods`.
- [ ] Any non-CF JAR has checked official source, redistribution license, fork provenance if modified, AND presence in the approved Non-CurseForge mods list. Otherwise remove/exclude or BLOCK submission.
- [ ] Not assume verbal/personal permission alone is adequate for a non-CF JAR.
- [ ] Check quest/worldgen derivatives, textures, logos, configs, and bundled non-JAR resources under original licenses and attribution obligations.
- [ ] Test actual CurseForge export/import, ideally via the CurseForge app's Share Profile / Export as .zip.
- [ ] Verify zip root contains `manifest.json` and `overrides/`, not a surrounding parent folder.
- [ ] Record full final mod list, non-CF mods with license and author, and warnings.

## Technical acceptance

- [ ] Client starts from a CLEAN CurseForge import on another empty profile.
- [ ] Main menu, world creation, quests, recipes, JEI/EMI (as applicable), nuclear progression and selected worldgen tested.
- [ ] Dedicated server starts on clean setup with documented correct Java/Forge version.
- [ ] Client joins the server, core gameplay and quests work, clean restart works.
- [ ] New world is playable; old-world migration claimed ONLY if separately tested. No untested compatibility promises.
- [ ] Archive checksums generated and verified.
- [ ] Installer zip excludes logs, crash reports, saves containing private data, token/account/auth files, caches and runtime binaries not allowed to redistribute.
- [ ] No official Minecraft/Mojang binaries redistributed unlawfully.

## Publication and availability

- [ ] Project avatar is original square PNG at least 400x400 px, rights checked.
- [ ] English description / summary, accurate features, creator attribution and NTNH credits in project page.
- [ ] CurseForge modpack uploaded as a primary file with correct supported game version, Forge loader, and channel (Alpha/Beta/Release).
- [ ] Server pack uploaded as **Additional File** linked to matching primary modpack file.
- [ ] Publish GitHub assets only when their included JARs permit independent redistribution.
- [ ] GitHub Release assets named with `client`/`modpack` and `server` for automatic NTSD site detection; GitHub prerelease is supported by updated website logic.
- [ ] Check site buttons, download SHA-256, and links from a private/incognito window.
- [ ] After approval, update README, website version/status, and release notes. Do not announce prior to actual availability.

## Helpful links

- Official site: https://bysally.github.io/NTSD/
- GitHub: https://github.com/BySally/NTSD
- CurseForge project export: https://support.curseforge.com/support/solutions/articles/9000197908-exporting-a-modpack-for-curseforge-project-submission
- CurseForge project moderation: https://support.curseforge.com/support/solutions/articles/9000197279-project-and-modpack-moderation-policies
