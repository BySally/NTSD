# NTSD 0.1.0-alpha.6 — release verification

## CF5 Native client and Server Pack

The archives were extracted into separate clean game and server directories on Windows. All 122 client JARs and 93 server JARs matched their pinned SHA-256 values. With Java 17 and Forge 47.4.28, the dedicated server generated a new world, the Native client joined over localhost, and the server saved, stopped and loaded the saved world on restart. The local smoke test used isolated offline-mode authentication. Linux, internet access to the server and a full quest playthrough were outside this check.

## Historical CF4 checks

The checks below refer to the original CF4 downloads.

Verified on Windows on 2026-11-03 with Minecraft 1.20.1, Forge 47.4.28 and Java 17. The release uses Core 0.1.0-ntsd-cf4 (owner-approved font A), Early Loading 0.1.1 and Menu Background 0.1.2.

| Check | Result |
| --- | --- |
| Native CurseForge App ZIP import into a new empty profile | PASS; 118 official downloads, 122 client JAR hashes and 849 override files verified |
| Dedicated server installed from the distributed bootstrap | PASS; official Forge installation, 93 server JAR hashes verified; EULA remains false in public delivery |
| Client launch and animation loop | PASS |
| Return from settings and other screens | PASS; animation restarts, native buttons retained, texture upload checks pass |
| New ordinary singleplayer world created through the game UI | PASS; rendered Overworld, game exits normally |
| Matching client connects to fresh dedicated server | PASS through the normal multiplayer server list; local loopback QA connection; initial command-line Quick Play attempt timed out |
| HBM and integration block smoke checks | PASS; 12 blocks registered/placed; block-entity save/load and exposed energy/item capabilities checked; existing RF/HE verification reports pass |
| PneumaticCraft Drone Interface | PASS; actual 3x3 crafting-grid match under original recipe ID, correct output x1, wireless modem required |
| Dedicated-world save, normal shutdown and restart | PASS |
| CF4 Russian/English, GUI scales 1/2/3 | Prior exact-binary tests PASS; 188-character set has no missing/clipped glyphs |
| Corresponding Core source rebuild | Prior exact-binary test PASS; classes/resources match, only build timestamp may differ |
| Delivery privacy, source/license notices, unchanged protected working data | PASS |

The client has 122 distributed/installed JARs; the server has 93. Private instrumentation adds one QA JAR only during tests and is absent from all release assets. JAR count is not Forge's displayed mod-container count.

The installation test used the real CurseForge App download/import path. Runtime QA used the installed pack with a local Java 17 test harness. Multiplayer used a loopback-only offline QA server and an offline test identity; Microsoft account authentication, online-mode authentication and internet voice-chat reachability are not claimed as tested. Public server defaults remain online-mode=true, with no firewall/router changes.

The initial command-line Quick Play attempt timed out; joining after adding/pinging the server in the normal multiplayer list succeeded without changing game files. Forge's status screen displayed a red compatibility marker for four client-only mod IDs, while all advertised network channels were accepted and the actual login completed. These observations are retained as limitations, not reported as a flawless Quick Play test.

No full survival playthrough, exhaustive machine-production test, all-shader compatibility or native Linux test is claimed. See KNOWN_ISSUES.md, including the 30 unavailable/dependency-blocked quests. Worlds and instrumentation used for tests are not included. Original working alpha.6, previous CF3/CF4 candidates, CurseForge projects and user saves are unchanged.

After the gameplay tests only delivery documentation was updated. An entry-by-entry check proves that the final archives retain identical mods, manifest, scripts, configurations, recipes, quests and gameplay resources to the imported/installed test inputs. This documentation-only change does not substitute a different game build.
