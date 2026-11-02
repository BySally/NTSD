# NTSD 0.1.0-alpha.6 — CurseForge-first publication plan

Status: **PREPARATION; DO NOT UPLOAD THE CURRENT WORKING JAR COLLECTION UNCHANGED**.

Goal: make the **first honest, installable alpha** available through CurseForge before finishing the full NTNH port. This is not a demand to finish 47 pending quest conditions or all optional integration defects.

## Fast-track strategy

1. Create **staging copy** of alpha.6 (Minecraft 1.20.1 / Forge 47.4.28 / Java 17). Keep the original alpha.6 and worlds untouched.
2. Replace the **23 mismatched candidate jars** in staging using the exact same-version, official CurseForge App files (20 metadata/container variants; 3 Architectury/class-name variants). Test in two batches; do not mix with source jar reuploads. Preserve backups and record before/after SHA.
3. Complete fileID metadata lookup for the **5 unresolved files** (Traveler's Backpack, 3d-Skin-Layers, Xaero's World Map, ImmediatelyFast, Not Enough Animations), confirming exact Forge 1.20.1 tags and the chosen file on CurseForge; 2 previously missing files Chisel Modern and Crust are resolved. In particular do not assume that the ImmediatelyFast file name containing '+1.20.4' guarantees the needed loader/version tags.
4. Replace local **Golem Core** with official CurseForge project **1719361**, file **9377649** (only in staging), then test mixins, loading and a copied world.
5. For **HBM Continuum** and **Space**, fastest option is to TEST the **official unmodified same-version JARs** in staging (Continuum 1719328/9378093; Space 1754149/9378781), accepting temporary loss of some hardcoded RU/EN strings in the first public alpha. Do not represent this as full localization equivalence. Restore portable lang files only via legal ordinary resource packs/overrides if those really work; otherwise document reduced localization. If this causes gameplay/registry regressions, revert staging and take documented CF fork route after source/license review.
6. **NTNHCore** cannot be replaced with a historical 1.7.10 mod. It requires an individual rights-cleared CurseForge mod project or other formally accepted distribution route. First resolve mixed-source TTF/Unihex (legacy Minecraft / NTNH), unknown Improving Minecraft tools, RTF+ scope and mixed artwork/translation notices. If needed, use a specifically tested permitted replacement for disputed resources, preserving registry IDs and quests.
7. **NTSD Early Loading** and **NTSD Menu Background**: prepare individual CurseForge Mod projects with own source/LICENSE/build scripts, actual binaries and provenance for externally loaded animation. Publication and moderation of those new mod files must occur before referencing them in a public modpack manifest. Do not merge modules merely to reduce project count without retesting.
8. **PNC Recipe Fix**: choose whichever is easiest and actually works in a **fresh imported profile**: an automatically loaded, rights-cleared resource/datapack override (if available through existing infrastructure), a small standalone CF mod project, or packaging within independently approved NTNHCore if legal and load-order-safe. Manual per-world copying is not equivalent to automatic installation.
9. All other known, permissible CF mods must be selected through the **CurseForge App's Add More Content** and referenced in its automatically exported `manifest.json`; do not hand-edit the app-generated manifest. Only approved Non-CurseForge mods may appear as third-party jars in `overrides/mods`; provide required attribution in the project description.
10. Use **Share Profile → Export as .zip**, check top-level `manifest.json` and `overrides/`. Import the exported ZIP into a **completely clean** CurseForge profile; test start, create world, main menu, quest book, Forge 47.4.28 and dedicated server compatibility if attaching a server pack.
11. The first project file can honestly be classified **Alpha**, which is available on the CurseForge website after approval. For app discoverability, an approved Beta or Release file is normally required; do **not** relabel an untested alpha just to bypass that distinction. See official documentation.
12. Submit **matching server pack as Additional File** of the same primary modpack file only once its license and runtime checks pass.

## NOT blocking first Alpha for this project

- OpenComputers's 37 pending quest conditions: explicitly state unported, not promised as complete.
- Other optional quest tasks / side branches and noncritical integration warnings: list with clear known issues.
- Terralith remains disabled, worldgen caveats disclosed.
- The 2 main AE2 quest gates and prospecting still warrant player-facing warnings; verify any risk of unplayable main progression and do not claim complete survival progression.

## Mandatory release gates (must PASS)

- All JARs in the **actual uploaded modpack** have correct CurseForge project/file IDs or valid approved-third-party routes.
- All custom/modified mods that remain are legally distributable under known applicable license and asset permissions; separate CF projects approved where needed.
- No altered original JAR is impersonating an official upstream file ID.
- Fresh export/import works and the installed client can boot and create/join worlds; primary core loop is usable.
- No secrets, local saves, personal files, banned license content or unsupported loader versions in public ZIP.
- Project icon at least 400x400; actual descriptive project text and author credits.
- Clearly label pending quests, incomplete localization (if applicable) and known alpha bugs.

## Exact next Codex deliverables

- `NTSD_RELEASE/alpha.6/06-CF-FASTTRACK/STAGING_REPLACEMENTS.csv` with old/new SHA, official CF IDs, test status and rollback for 23+Golem+HBM+Space.
- `CUSTOM_MOD_PUBLICATION.csv` for NTNHCore, Early Loading, Menu Background, PNC fix and fork contingencies.
- `CURSEFORGE_METADATA_REMAINING.csv` for 5 uncertain official file IDs.
- `FINAL_MODPACK_COMPOSITION.csv`: actual intended installed files with distribution route.
- `CURSEFORGE_IMPORT_TEST.md`, `BLOCKERS_FOR_FIRST_ALPHA.md`, `PACKAGE_READY.md`, plus genuine App-generated zip **only if all mandatory gates pass**.
- Keep prior audit evidence and all original active alpha.6 JARs unmodified.

## Official policy references (review at publication)

- Export/modpack rules: https://support.curseforge.com/support/solutions/articles/9000197908-exporting-a-modpack-for-curseforge-project-submission
- Moderation: https://support.curseforge.com/support/solutions/articles/9000197279-project-and-modpack-moderation-policies
- Non-CF mods: https://support.curseforge.com/support/solutions/articles/9000197913-non-curseforge-mods
- App visibility by file type: https://support.curseforge.com/support/solutions/articles/9000197242

The source of these priorities is the owner's supplied follow-up audit and current CurseForge documentation. Nothing here claims new replacement binaries have already passed gameplay regression testing.
