# NTSD 0.1.0-alpha.6 — publication remediation plan

**Current gate:** NOT READY — BLOCKERS FOUND. **Do not publish game archives or enable download buttons.**

**Audit date:** 2026-11-02. **Basis:** Codex report supplied by project owner; this document does not represent an independent audit of JARs. The original `MOD_AUDIT.csv` and `BLOCKERS.md` have not yet been independently re-reviewed here.

## Confirmed scope from local alpha.6 audit

- Minecraft **1.20.1** / Forge **47.4.28** / Java **17**
- 123 client JARs; 94 server JARs; 124 unique (93 common / 30 client-only / 1 server-only)
- Distribution routes: 86 CURSEFORGE_OK, 1 THIRD_PARTY_APPROVED, 7 BLOCKED, 30 UNVERIFIED
- 23 installed files differ from found CurseForge binaries; 7 lack verification of file pages
- Client/server smoke test, recipe fix and menu tests reported PASS; clean CurseForge installation **NOT TESTED**
- 47 quest conditions not migrated; Terralith disabled, Observable HTTP 500/worldgen issues remain
- No installable client, server, or CurseForge pack ZIP was produced

## Priority 0: address every modified or custom JAR

Prepare `MODIFIED_JAR_DECISIONS.csv` for:
- HBM Continuum
- Continuum Space
- Golem Core
- NTNHCore
- NTSD Early Loading
- NTSD Menu Background
- PNC Recipe Fix

For each include:
- exact local filename, SHA-256, mod ID, side and source revision
- relationship to published upstream project; exact patch/diff and original license
- whether foreign bundled resources, old fonts, textures or other assets exist
- corresponding source available, license notice and redistributable build artifacts
- chosen route: **USE_OFFICIAL_CF_FILE**, **PUBLISH_DOCUMENTED_FORK_AS_CF_MOD**, **CONVERT_TO_DATA_OR_KUBEJS**, **OFFICIALLY_APPROVED_NON_CF**, or **BLOCKED**
- concrete evidence links, CurseForge IDs only when verified, blockers and next action

Important: original upstream CurseForge project ID **cannot** describe a locally modified JAR. Uploading a patched file is not made permissible merely by credit or by existence of the original on CurseForge. For truly independent add-ons with owned content, prefer individual CurseForge mod projects. For a documented fork, verify the original and embedded content licenses and the official moderation requirements before choosing a license or publishing. If a small recipe change can be reproduced exactly via a licensed, supported data pack or KubeJS script, test that as a separate option.

Official sources:
- https://support.curseforge.com/support/solutions/articles/9000197908-exporting-a-modpack-for-curseforge-project-submission
- https://support.curseforge.com/support/solutions/articles/9000197279-project-and-modpack-moderation-policies
- https://support.curseforge.com/support/solutions/articles/9000199552-project-submission-guide-and-tips

## Priority 1: close the 30 UNVERIFIED entries

- **23 differing JARs**: compare local SHA, canonical name, archive class/resources hashes, mod metadata, dependencies and published file ID. Do not overwrite working JARs blindly. Document whether difference is substantial patched code, alternative legitimate build or mismatch.
- **7 without verified file page**: confirm official project/file availability via CurseForge app or API; broken searches are NOT proof of permission to ship a foreign JAR.
- Produce `UNVERIFIED_RESOLUTION.csv` with exact evidence and final classification. Anything still ambiguous remains unpublishable as a public CurseForge modpack file.

## Priority 2: provenance and license of assets

- Audit all copied NTNH quest data/worldgen assets and their attributions, and original licenses, including CC BY-NC-SA obligations where applicable.
- Identify and remove/relicense/disentangle any old fonts, mixed Core material and third-party visual resources whose rights are not established.
- Confirm that source archives and licenses satisfy applicable copyleft conditions for published forks.
- Do not assume Bufka2011's permission covers third-party content.

## Priority 3: installation/QA gates

Only after lawful package composition is known:
1. Build a genuine CurseForge App export (manifest + overrides).
2. Import into a pristine profile; verify all intended mods resolve.
3. Test singleplayer + clean dedicated server, join and reconnect, quests, Drone Interface recipe, world generation and startup menu.
4. Run ZIP validation, size/hash checks, license/report reconciliation.
5. Document 47 remaining quest conditions and user-facing limitations honestly.
6. Upload a server pack only as an additional file to its matching CurseForge primary file.

## Reporting and release decision

Required deliverables:
- `MODIFIED_JAR_DECISIONS.csv`
- `UNVERIFIED_RESOLUTION.csv`
- updated `MOD_AUDIT.csv`, `BLOCKERS.md`, `LICENSE_AUDIT.md`, `TEST_RESULTS.md`
- brief `NEXT_RELEASE_GATE.md`: list each remaining blocker with evidence and owner

**Do not modify the working alpha.6 profile while resolving publication rights**; work on a staging copy and keep rollback snapshots. No automatic upload to GitHub or CurseForge.

## Website state

GitHub Pages now labels the current build **alpha.6 · dev**, and the development log states that tests passed but public distribution is held by the mod/license audit. Download buttons remain unavailable until real, publishable assets exist.
