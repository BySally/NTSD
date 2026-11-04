# Installing Nuclear Tech: Second Dawn 0.1.0-alpha.6

**Minecraft 1.20.1 · Forge 47.4.28 · Java 17**

## Native client (CF5)

1. Install Minecraft Java Edition 1.20.1 and [Forge 47.4.28](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html), using Java 17.
2. Create a Forge profile with a new game directory. Extract [NTSD-0.1.0-alpha.6-Native.zip](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-Native.zip) directly into that directory so `mods/` and `config/` sit at its root.
3. Allocate about 6–8 GB of RAM and start the Forge profile. The ZIP contains all 122 pinned mods. Use this client with the CF5 Server Pack.

The questbook opens with the grave accent key. Keep the pinned mod versions when reporting issues.

## CurseForge App client (CF4)

Import the [existing CurseForge ZIP](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-CurseForge.zip) without extracting it. Choose **All Files** if prompted. This alternate download uses the earlier Core CF4 build.

## Dedicated server (CF5)

**Hosting.** Install Forge 47.4.28 for Minecraft 1.20.1 on the host, upload the contents of the [Server Pack](https://github.com/BySally/NTSD/releases/download/0.1.0-alpha.6/NTSD-0.1.0-alpha.6-Server.zip) to the server root, then start the Forge server with Java 17.

**Local server.**

1. Install [Forge Server 47.4.28](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html) into a new server directory. Select **Install server** in the official installer.
2. Extract the Server Pack into that same directory. It contains all 93 server mods, configurations and game data.
3. Run Forge's generated `run.bat` on Windows or `sh run.sh` on Linux. Read the [Minecraft EULA](https://aka.ms/MinecraftEULA) and set `eula=true` in the generated file yourself if you agree. Start the server again.
4. Join through Minecraft's Multiplayer screen using the CF5 Native client. Save and stop with the console command `stop` before updating.

The Windows startup, local client connection and save/restart were tested. Linux launch and external network reachability were outside that check.

## Safe updates

Stop the game or server and back up the complete profile, including your world and per-world configs. Test a copy before switching. Direct migration from Minecraft 1.7.10 is unsupported. Existing chunks keep their ore placements.

[SHA-256](SHA256SUMS.txt) · [Known issues](KNOWN_ISSUES.md) · [GitHub Issues](https://github.com/BySally/NTSD/issues)
