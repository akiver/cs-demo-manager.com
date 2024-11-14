---
title: 'CS server plugin'
---

## Introduction

To communicate with the game and avoid restarting it each time the user wants to watch a demo, CS:DM uses a custom
library (hereafter referred to as "**plugin**") that is loaded into the game when it's launched.

The plugin establishes a connection with the CS:DM WebSocket server and listen for messages that may result in game
actions.

## History and reasons

**For CS:GO only** and prior to version `3.10.0`, CS:DM used a combination of the `-netconport` launch option that
allows to establish a Telnet connection with the game and [VDM](https://developer.valvesoftware.com/wiki/Demo_Recording_Tools)
files to control the demo playback.

CS2 doesn't support VDM files, and the `-netconport` launch option works only with the `-tools` launch option which is
available only on Windows when the **Workshop tools** are installed.  
That's the main reason why we have to use the library approach with CS2.

Since CS:DM version `3.10.0`, we switched to a [Valve Server Plugin](https://developer.valvesoftware.com/wiki/Server_plugins)
**for CS:GO** (nothing changed for CS2).  
Like for CS2, the plugin is loaded into the game when it's launched but the main difference is that "plugins" are an
official Source engine 1 feature (`IServerPluginCallbacks` interface) which is not available for CS2.

The pros of the library method is that we can have more control over the game and it's more stable than the Telnet
connection (at least on Linux).  
The downside is that because the library needs to know some game implementation details, it may break when the game is
updated. It should not happen for CS:GO as it's a "legacy" game but it happened and may happen again for CS2.

## Actions file

An "**actions file**" is a JSON file that contains a list of "**actions**" to be executed by the plugin during the demo
playback.

An action has the following [structure](https://github.com/akiver/cs-demo-manager/blob/main/src/node/counter-strike/json-actions-file/json-actions-file-generator.ts):

```ts
type Action = {
  tick: number;
  cmd: string;
};
```

The `tick` field specifies at which tick the action should be executed and the `cmd` field is the game command that will
be executed (for example `demo_gototick 123`).

The plugin reads a possible actions file next to the demo file (`~/myDemo.dem` -> `~/myDemo.dem.json`) when the game
starts and when the user requests to watch a demo from the CS:DM interface while the game is already running and has
been started from the application.

## CS2

### Requirements

#### Windows

[Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) with the component `Desktop development with C++`.

#### Linux

`sudo apt install make build-essential g++`

### Building

The source code in the [`cs2-server-plugin`](https://github.com/akiver/cs-demo-manager/blob/main/cs2-server-plugin) folder.

#### Windows

1. `git submodule update --init --recursive`
2. Open a `Visual Studio Developer Command Prompt` and navigate to the project folder
3. `msbuild cs2-server-plugin.sln`
4. The binary `server.dll` will be in the `static` folder

:::note
You can also build the project from Visual Studio.
:::

#### Linux

1. `git submodule update --init --recursive`
2. `make`
3. The binary `server.so` will be in the `static` folder

### Installation

CS:DM automatically [installs](https://github.com/akiver/cs-demo-manager/blob/main/src/node/counter-strike/launcher/cs2-server-plugin.ts) the plugin when CS2 is launched - it does the following:

1. Copy the binary from the `static` folder to the `game\csgo\csdm\bin` folder.
2. Add a reference to the plugin in the file `game\csgo\gameinfo.gi`:

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

3. Launch CS2 with the launch option `-insecure`

### Uninstallation

The plugin automatically "uninstalls itself" when CS2 is launched by restoring the `gameinfo.gi` file.  
The application does it as well and also delete the binary file when the game is closed to ensure it's uninstalled even
if the game crashes.

### Logging

Logs are visible in the CS2 console with the prefix `CSDM`.  
On Windows, you can also start the game with the `-tools` launch option to access the
[VConsole](https://developer.valvesoftware.com/wiki/Valve_Console) that allows filtering the logs.

You can also use the `LogToFile` function to write logs into a file `csdm.log`.  
On Windows the log file is located in `game/bin/win64`, and on Linux in `game/bin`.

### Updating the sdk

The plugin is built against the [AlliedModders SDK](https://github.com/alliedmodders/hl2sdk/tree/cs2).

1. `git submodule update --remote`
2. Rebuild the project

## CS\:GO

### Requirements

#### Windows

[Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) with the component `Desktop development with C++`.

#### Linux

`sudo apt install make build-essential g++`

#### macOS

`xcode-select --install`

### Building

The source code in the [`csgo-server-plugin`](https://github.com/akiver/cs-demo-manager/blob/main/csgo-server-plugin) folder.

#### Windows

1. `git submodule update --init --recursive`
2. Open a `Visual Studio Developer Command Prompt` and navigate to the project folder
3. `msbuild csgo-server-plugin.sln`
4. The binary `csdm.dll` will be in the `static` folder

:::note
You can also build the project from Visual Studio.
:::

#### Linux

1. `git submodule update --init --recursive`
2. `make`
3. The binary `csdm_client.so` will be in the `static` folder

#### macOS

:::important
If you are on an Apple Silicon Mac, you need to start a shell session with the `x86_64` architecture to build the plugin!

```sh
/usr/bin/arch -x86_64 /bin/zsh ---login
```

:::

1. `git submodule update --init --recursive`
2. `make`
3. The binary `csdm.dylib` will be in the `static` folder

### Installation

CS:DM automatically [installs](https://github.com/akiver/cs-demo-manager/blob/main/src/node/counter-strike/launcher/csgo-server-plugin.ts) the plugin when CS:GO is launched - it does the following:

1. Copy the binary and the file `csdm.vdf` from the `static` folder to the `csgo\addons` folder.
2. Launch CS:GO with the launch option `-insecure`

### Uninstallation

The plugin automatically "uninstalls itself" when CS:GO is launched by deleting the `csdm.vdf` file.  
The application does it as well and also delete the binary file when the game is closed to ensure it's uninstalled even
if the game crashes.

### Logging

Logs are visible in the console with the prefix `CSDM` and persisted in the file `csdm.log`.  
This file is located in the `steamapps/common/Counter-Strike Global Offensive` folder.
