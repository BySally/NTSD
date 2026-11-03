# NTSD alpha.6 — licenses and source access

BySally — Project Creator & Maintainer. NTSD is an independent modpack, not an official Minecraft, Mojang, HBM or NTNH product.

This is a mixed-license collection. No blanket All Rights Reserved or new commercial-server prohibition is imposed on other authors' work.

## Files actually redistributed in the client installer

- `ntnhcore-0.1.0-ntsd-cf4.jar`: GPL-3.0-or-later for the stated code; applicable adapted NTNH material CC BY-NC-SA 4.0; separate GPL-3.0-only PNC recipe, GPL/LGPL/MIT/CC BY-NC-SA 3.0 asset exceptions; the installed-game runtime font adapter (no redistributed font data). Original notices are in `META-INF/licenses/` and `ntsd/legal/notices/01-NTSD-Core/`. The exact corresponding-source ZIP is supplied in `ntsd/legal/sources/`.
- `ntsd-early-loading-0.1.1.jar`: LGPL-2.1-only, including retained Forge-derived notices. Exact corresponding source and build instructions supplied.
- `ntsd-menu-background-0.1.2.jar`: LGPL-2.1-only. Exact corresponding source and build instructions supplied.
- `cc-tweaked-1.20.1-forge-1.120.2.jar`: unchanged original CC: Tweaked binary. Mixed licensing, including MPL-2.0 code and ComputerCraft Public License (CCPL) legacy assets, plus dependency-specific notices retained inside the JAR. CCPL section 5 permits inclusion in a distribution with free access to complete source. The entire version-tagged upstream source and its LICENSES directory are supplied beside the module sources. See https://github.com/cc-tweaked/CC-Tweaked/tree/v1.20.1-1.120.2 and its REUSE.toml. Original creators include Daniel Ratcliffe and Jonathan Coates / SquidDev and contributors.

The other 118 client JARs are NOT inside this installer. CurseForge App downloads the exact original files from their authors' CurseForge listings. A valid App download does not grant permission to mirror or relicense those JARs. No author opt-out is bypassed and no shared API key is embedded. Minecraft and Forge game/runtime files are not redistributed in these ZIPs.

## Server delivery

The server installer carries Core CF4 with its corresponding source and original pack configurations. It copies 92 explicitly pinned common JARs from the user's legally installed client, verifies every SHA-256, and downloads the pinned original WorldEdit 7.2.15 from its official Modrinth listing. It obtains the official Forge installer from Minecraft Forge Maven. No third-party game JARs are mirrored in the server ZIP. The installer refuses nonempty targets and does not accept the Minecraft EULA for the user.

## Pack data and artwork

Covered questbook, legacy presentation and progression adaptations originate in NTNH: https://github.com/NTNewHorizons/NTNH/tree/2.15.0 . Credit Bufka2011, SkippyPlaysMC, NTNewHorizons and the contributors named in CREDITS.md. Covered adaptations are CC BY-NC-SA 4.0: https://creativecommons.org/licenses/by-nc-sa/4.0/ . Adaptations include the 1.20.1 mappings, translations and NTSD integration. Legacy inputs with an older ND notice are not blanket-relicensed: the preparation relies on covered SA-release materials and the previously recorded permission from Bufka2011 for his contributions. Separate component notices remain applicable.

The shipped 27 legacy questbook PNGs were matched by SHA-256 to the NTNH 2.15.0 SA-release inventory. Core CF4 retains the earlier exclusion of mixed Mojang/TXLoader font data, Improving Minecraft pixels and uncertain icons/translation overlays. It removes Press Start 2P and reads installed Minecraft font providers at runtime for the book. No font TTF/PNG/HEX data are bundled by this adapter. Installed resources retain their original owners and terms.

NTSD loading frames, orbital menu animation and branding icons: AI-generated with OpenAI at BySally's direction; the owner supplied the images and processed animations for this project and authorized their inclusion in NTSD. This is provenance, not an assertion that all generated pixels enjoy exclusive copyright. No OpenAI endorsement or blanket exclusive right is claimed. Third-party NTNH presentation remains credited separately.

`computer-programs/pwrangler.lua` is the unchanged program from the official installed HBM Continuum JAR, covered by its upstream licensing/notices; its source form is included. HBM authors retain authorship. No OpenComputers port is claimed.

Bootstrap/verification scripts newly supplied with this release are MIT; copyright 2026 BySally / NTSD contributors. MIT text is supplied as INSTALLER-LICENSE.txt. This applies only to these scripts, not to the modpack or its third-party components.

## Exact module sources

- Core CF4: [exact versioned public source](https://github.com/BySally/NTSD-Core/tree/v0.1.0-ntsd-cf4/ntnhcore-port) and [original corresponding-source ZIP](https://github.com/BySally/NTSD-Core/releases/download/v0.1.0-ntsd-cf4/ntnhcore-0.1.0-ntsd-cf4-corresponding-source.zip). The same source is bundled in the unchanged installers under `ntsd/legal/sources/`. Source ZIP SHA-256: `6efac932c546dcbd89b14d5824ddf13ec6bf22bb600bdc667aded73b0a117307`.
- Early Loading: https://github.com/BySally/NTSD-Early-Loading/tree/v0.1.1/module
- Menu Background: https://github.com/BySally/NTSD-Menu-Background/tree/v0.1.2/module

All original license texts, notices, authors and modification statements remain in the supplied source archives. Source availability does not depend on CurseForge moderation. See FINAL_MOD_LIST.csv for the exact versions and hashes of downloaded components.
