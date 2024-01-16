---
title: 'CS2 server plugin'
---

CS:DM uses a **[Valve Server plugin (VSP)](https://developer.valvesoftware.com/wiki/Server_plugins)** to communicate with CS2 and control the demo playback.

## Why?

For CS:GO, we use the `-netconport` launch option to communicate with the game and [VDM](https://developer.valvesoftware.com/wiki/Demo_Recording_Tools) files to control the demo playback.  
Unfortunately, VDM files don't work with CS2, and the `-netconport` launch option works only with the `-tools` launch option available only on Windows.

As a workaround, we use a _VSP_ that communicates with CS2 through a WebSocket connection and mimics VDM files by reading a JSON file.

## Developing

### Requirements

#### Windows

[Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) with the component `Desktop development with C++`.

#### Linux

`sudo apt install make build-essential`

### Building

The binary will be placed into the `static` folder located in the project root.  
CS:DM copy/paste the binary into the CS2 game folder when the game is launched.

#### Windows

1. `git submodule update --init --recursive`
2. Open a `Visual Studio Developer Command Prompt` and navigate to the project folder
3. `msbuild cs2-server-plugin.sln`

:::note
You can also build the project from Visual Studio.
:::

#### Linux

1. `git submodule update --init --recursive`
2. `make`

## Installation

CS:DM automatically [installs](https://github.com/akiver/cs-demo-manager/blob/main/src/node/counter-strike/launcher/cs2-server-plugin.ts)
the plugin when CS2 is launched.  
It does the following:

1. The plugin binary is copied from the `static` folder to the `game\csgo\csdm\bin` CS2 folder.
2. A reference to the plugin is added to the file `game\csgo\gameinfo.gi`:

```diff
SearchPaths
{
	Game_LowViolence	csgo_lv // Perfect World content override

+	Game	csgo/csdm
	Game	csgo
	Game	csgo_imported
	Game	csgo_core
	Game	core
```

3. CS2 is launched with the launch option `-insecure`

## Uninstallation

CS:DM automatically uninstalls the plugin when CS2 is closed.

1. The `gameinfo.gi` file is restored.
2. The plugin binary is deleted.

The plugin restores the `gameinfo.gi` file when the game starts, but if necessary, CS:DM does it as well to ensure it's
restored even if the game crashes.

## Logging

Logs are visible in the CS2 console with the prefix `CSDM`.  
On Windows, you can also start the game with the -tools launch option to access the
[VConsole](https://developer.valvesoftware.com/wiki/Valve_Console) that allows filtering the logs.

If CS2 crashes at startup and the console unavailable, you can use the `LogToFile` function to write logs into a file `csdm.log`.  
On Windows the log file is located in `game/bin/win64`, and on Linux in `game/bin`.

## Updating the sdk

The plugin is built against the [AlliedModders SDK](https://github.com/alliedmodders/hl2sdk/tree/cs2).

1. `git submodule update --remote`
2. Build the project `deps/hl2sdk/interfaces/interfaces.sln` in `Release` mode
3. Build the `tier1` project in `Release` mode
4. Replace `tier1.lib` and `interfaces.lib` with the newly built ones in `deps/hl2sdk/lib/public/win64`
5. Reset any changes `git submodule foreach git reset --hard && git clean -fd`
