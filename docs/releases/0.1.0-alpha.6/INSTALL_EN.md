# Installing Nuclear Tech: Second Dawn 0.1.0-alpha.6

BySally — Project Creator & Maintainer. **Minecraft 1.20.1, Forge 47.4.28, Java 17**. This is a first public pre-release, not a completed NTNH port. Back up saves before updating.

## Client

Download `NTSD-0.1.0-alpha.6-client.zip` from GitHub Releases. In the official [CurseForge App](https://www.curseforge.com/download/app), select Minecraft → My Modpacks → Import → Import from ZIP. Choose the ZIP **without extracting it** and wait for all downloads. If the App shows the non-CurseForge-files import warning, confirm and choose **All Files** for this NTSD package: those are required pack settings, quests and bundled components. **CurseForge Files Only** omits them. The App obtains 118 original author-hosted files. The four permitted bundled JARs are Core CF4, Early Loading, Menu Background and unchanged CC:Tweaked. This local import does not depend on approval of NTSD's three CurseForge projects.

Use Java 17 and allocate about 6–8 GB RAM while leaving memory for the operating system. Do not automatically update the pinned mods. Click Play and sign in through the official Minecraft Launcher using an account which owns Java Edition. Minecraft, an account and authentication credentials are not included. Create a new world. The questbook key is **grave accent (`)**, left of 1 on a US keyboard; check Controls for conflicts.

The supported installation route for this release is CurseForge App on Windows. Other launchers are not verified and may require manual downloads because of author/platform restrictions. There is no custom NTSD launcher.

## Dedicated server

Extract `NTSD-0.1.0-alpha.6-server.zip` into a new folder. Install Python 3.10+ and Java 17. Import the matching client first: the server bootstrap copies only the 92 pinned common JARs from that legal installation, verifies every SHA-256 and downloads WorldEdit from its official Modrinth listing. It obtains the server runtime using the original Forge installer.

Windows:

```powershell
py -3 install_server.py --client "C:\path\to\NTSD-client-profile" --java "C:\Program Files\Java\jdk-17\bin\java.exe"
```

Linux:

```sh
python3 install_server.py --client /path/to/installed-client/mods --java /path/to/java17/bin/java
```

For a remote Linux server, transfer your legally installed client's mods folder first, then use it as the local input. Client-only rendering JARs are filtered out automatically. The default target is a NEW `server/` folder; `--target` can select another empty location. Existing servers/worlds are never overwritten. Native Linux execution is not claimed to have been tested in this release.

Read https://aka.ms/MinecraftEULA and set `eula=true` in the generated server/eula.txt yourself if you agree. In server/, run `start-server.bat` on Windows or `sh start-server.sh` on Linux with Java 17 in PATH. Adjust memory in user_jvm_args.txt. The default server creates a new world and uses online-mode=true. Configure server.properties for your environment. Stop using `stop` and wait for saving to finish. Voice chat normally needs UDP 24454 and Minecraft TCP 25565; no firewall/router changes are made. Local tests do not verify internet reachability.

## Safe updates

Stop and save, then back up the ENTIRE old profile/server directory, including saves/world, configs, Better Questing/FTB data and per-world serverconfig. Confirm the backup is readable. Import into a NEW profile or install a NEW server; test only a COPY of your save before switching. Keep the original for rollback. Do not open an upgraded save in an older pack. Direct conversion of Minecraft 1.7.10 worlds is unsupported. Terralith remains disabled. Never install over a running server.

For installation failures, check free space, network, Java 17 and SHA256SUMS.txt. Do not substitute different mod versions. Report reproducible issues at https://github.com/BySally/NTSD/issues with sanitized latest.log/crash reports. See KNOWN_ISSUES.md.
