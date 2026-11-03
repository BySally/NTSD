# NTSD alpha.6 — known issues

This is a playable PRE-RELEASE, not a stable or complete NTNH 1.7.10 recreation.

- The 418-quest book still contains **47 unported conditions**: 37 OpenComputers, 2 main AE2, 3 prospecting and 5 other conditions. They leave **27 quests directly unfinishable and 3 more dependency-blocked (30 total)**; another 6 unavailable optional conditions are counted separately. Conditions are visibly blocked rather than silently replaced. AE2 quests 85505 and 91649 and the prospecting branch have real progression limits. The detailed unchanged report is supplied in `ntsd/KNOWN_QUEST_LIMITATIONS.md`. Basic startup tests do not establish a full survival playthrough or guarantee survival access to every required deposit.
- OpenComputers, Computronics and OpenSecurity parity is postponed. CC:Tweaked is not a drop-in replacement for their programs. Their blocked legacy quest branches remain visible.
- Terralith is intentionally disabled. Do not add it to an existing world assuming it was validated for this release.
- Official HBM/Space files are used; private custom translation overlays are not all included. Some text may remain English even with Russian selected.
- Observable's HTTP 500 concerns its external diagnostic reporting path. Other nonfatal rendering/integration warnings documented during alpha testing remain; no claim that every machine combination or shader works is made. Internet voice-chat connectivity requires administrator network setup.
- The supported client installation path is CurseForge App on Windows. Downloads depend on author-hosted file availability. Other launchers and Linux clients have not passed this release's clean-install gate.
- The server archive is a **bootstrap**, not an offline JAR bundle. It requires a legally installed matching client mods folder, Python 3.10+, Java 17 and internet. Native Windows dedicated-server operation is checked; native Linux runtime operation is not claimed.
- Existing Minecraft 1.20.1 saves require backup and a test on a copy. Direct import of 1.7.10 saves is unsupported. The release has not received CurseForge modpack approval simply because the files are available on GitHub.

Report issues: https://github.com/BySally/NTSD/issues . Include reproduction steps, Java/OS details and sanitized logs.


Font A: some Cyrillic glyphs and wrapping differ from original alpha.6. Linux AWT rendering and in-session font resource-pack reload have not been validated. Final CF4 tests on Windows found no missing/clipped glyphs in the 188-character set.


- In final Windows QA, command-line Quick Play timed out. Adding the server under Multiplayer → Add Server, waiting for its status ping and then joining worked. Use the normal server list for this release. Forge can show a red compatibility marker for the client-only crash_assistant, searchables, shulkerboxtooltip and xaerolib IDs even though the tested client/server channel negotiation and login succeed. This does not authorize substituting different JARs or ignoring other mismatch errors.
