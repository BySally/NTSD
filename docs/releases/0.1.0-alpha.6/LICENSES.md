# NTSD alpha.6 — licenses and source access

BySally — Project Creator & Maintainer. NTSD is an independent modpack, not an official Minecraft, Mojang, HBM or NTNH product.

This is a mixed-license collection. No blanket All Rights Reserved or new commercial-server prohibition is imposed on other authors' work.

## Distribution

The Native client and Server Pack include 122 and 93 pinned mod JARs respectively. Each component retains its license and notices. Both archives use Core CF5 with the same scoped notices as CF4. The CurseForge App import package continues to use Core CF4.

Core code is GPL-3.0-or-later as declared. Early Loading and Menu Background code is LGPL-2.1-only. CC: Tweaked retains MPL-2.0, the ComputerCraft Public License for applicable legacy files and scoped notices. See the component JARs and `ntsd/legal/` for applicable license texts and attributions.

## Pack data and artwork

Covered questbook, legacy presentation and progression adaptations originate in NTNH: https://github.com/NTNewHorizons/NTNH/tree/2.15.0 . Credit Bufka2011, SkippyPlaysMC, NTNewHorizons and the contributors named in CREDITS.md. Covered adaptations are CC BY-NC-SA 4.0: https://creativecommons.org/licenses/by-nc-sa/4.0/ . Adaptations include the 1.20.1 mappings, translations and NTSD integration. Legacy inputs with an older ND notice are not blanket-relicensed: the preparation relies on covered SA-release materials. Separate component notices remain applicable.

The shipped 27 legacy questbook PNGs were matched by SHA-256 to the NTNH 2.15.0 SA-release inventory. Core CF4 retains the earlier exclusion of mixed Mojang/TXLoader font data, Improving Minecraft pixels and uncertain icons/translation overlays. It removes Press Start 2P and reads installed Minecraft font providers at runtime for the book. No font TTF/PNG/HEX data are bundled by this adapter. Installed resources retain their original owners and terms.

NTSD loading frames, orbital menu animation and branding icons: AI-generated with OpenAI at BySally's direction; the owner supplied the images and processed animations for this project. This is provenance, not an assertion that all generated pixels enjoy exclusive copyright. No OpenAI endorsement or blanket exclusive right is claimed. Third-party NTNH presentation remains credited separately.

`computer-programs/pwrangler.lua` is the unchanged program from the official installed HBM Continuum JAR, covered by its upstream licensing/notices; its source form is included. HBM authors retain authorship. No OpenComputers port is claimed.

## Exact module sources

- Core CF5: [versioned source and corresponding-source ZIP](https://github.com/BySally/NTSD-Core/releases/tag/v0.1.0-ntsd-cf5).
- Core CF4: [exact versioned public source](https://github.com/BySally/NTSD-Core/tree/v0.1.0-ntsd-cf4/ntnhcore-port) and [original corresponding-source ZIP](https://github.com/BySally/NTSD-Core/releases/download/v0.1.0-ntsd-cf4/ntnhcore-0.1.0-ntsd-cf4-corresponding-source.zip). The same source is bundled in the unchanged CurseForge import package under `ntsd/legal/sources/`. Source ZIP SHA-256: `6efac932c546dcbd89b14d5824ddf13ec6bf22bb600bdc667aded73b0a117307`.
- Early Loading: https://github.com/BySally/NTSD-Early-Loading/tree/v0.1.1/module
- Menu Background: https://github.com/BySally/NTSD-Menu-Background/tree/v0.1.2/module

All original license texts, notices, authors and modification statements remain in the supplied source archives. Source availability does not depend on CurseForge moderation. See FINAL_MOD_LIST.csv for the exact versions and hashes of downloaded components.
