---
title: 'CS server plugin'
sidebar_position: 7
---

## Introduction

To communicate with the game and avoid restarting it each time the user wants to watch a demo, CS:DM uses a custom
library (hereafter referred to as "**plugin**") that is loaded into the game when it's launched.

The plugin establishes a connection with the CS:DM WebSocket server and listens for messages that may result in game
actions. For CS2 it also draws the in-game panels (playback controls, pressed buttons, voices...).

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
updated. It should not happen for CS:GO as it's a "legacy" game but it happened and may happen again for CS2. When it
does, demos recorded before the update can still be watched with a previous plugin version, see the
[playback guide](/docs/guides/playback).

## Installation

CS:DM installs the plugin every time it launches the game and removes it when the game closes. The plugin also removes
itself when the game starts, so nothing is left behind if the game crashes or is started outside CS:DM.

### CS2

1. The binary is copied into the `game/csgo/csdm` folder of the game.
2. The file `game/csgo/gameinfo.gi` is backed up and a search path pointing to that folder is added to it, which makes
   the game load the plugin.
3. CS2 is launched with the `-insecure` launch option.

### CS:GO

1. The binary and the file `csdm.vdf` are copied into the `csgo/addons` folder of the game.
2. CS:GO is launched with the `-insecure` launch option.

## Logs

The plugin logs are visible in the game console with the prefix `CSDM` and written to a file `csdm.log`:

- **CS2**: next to the game executable, `game/bin/win64` on Windows and `game/bin/linuxsteamrt64` on Linux.
- **CS:GO**: in the `steamapps/common/Counter-Strike Global Offensive` folder.

The file is deleted each time CS:DM launches the game. See the [logs guide](/docs/guides/logs) to find it from the
application.

## Building and internals

The developer documentation (requirements, building, debugging, how the plugin hooks the game...) lives next to the
source code on GitHub:

- [CS2 plugin](https://github.com/akiver/cs-demo-manager/blob/main/cs2-server-plugin/README.md)
- [CS:GO plugin](https://github.com/akiver/cs-demo-manager/blob/main/csgo-server-plugin/README.md)
