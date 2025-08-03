---
title: Demo playback
---

## Player voices filtering

CS:DM adds convenient console aliases for **CS2** (not CS:GO) that you can use in the game's console or bind to a key, allowing you to listen to specific teams or players' voices while watching an **analyzed demo**.

**Available aliases:**

- `voice_all`: Listen to all players
- `voice_ct`: Listen to players who **started** as Counter-Terrorists
- `voice_t`: Listen to players who **started** as Terrorists
- `voice_STEAMID64`: Listen to a specific player (replace `STEAMID64` with the player's actual SteamID64, e.g., `voice_76561198000697560`)

:::warning
Team-based aliases (`voice_ct` and `voice_t`) always refer to the starting side of each player, not their current side in the demo.
:::

## CS2 demo playback doesn't start or crashes

1. Steam must be running without admin rights.
2. The demo's path must contains only [Basic Latin characters](<https://en.wikipedia.org/wiki/Basic_Latin_(Unicode_block)>).
   Counter-Strike can't play demos with non-Basic Latin characters in the path.  
   The solution is to move your demos in a folder with only Basic Latin characters in its path.
3. Close any anticheat software (FaceIt, ESEA, etc.).
4. If the Counter-Strike official servers are down, the playback won't start the first time, you will have to click a
   second time to start the playback. See [#992](https://github.com/akiver/cs-demo-manager/issues/992).
5. There may be an incompatibility between your CS2 version and the internal [CS:DM plugin](/docs/development/cs-server-plugin).  
   See [CS2 plugin compatibility](#cs2-plugin-compatibility) for more information.

## CS2 plugin compatibility

CS:DM uses a ['plugin'](/docs/development/cs-server-plugin) to communicate with CS2 and control demo playback.  
This plugin is closely tied to the game build, so if CS2 is updated or your installed CS2 version is incompatible with the plugin, playback may not start, or the game may crash.

The application bundles several versions of the plugin to ensure compatibility with different CS2 builds.  
You can select the plugin version in the **Playback** settings.

![CS2 plugin version](/img/documentation/guides/playback/cs2-plugin-version.png)

:::danger
You should use this option only if you want to watch old demos that are not compatible with the latest CS2 version.  
If you do so, you must also ensure that the CS2 version you have installed is compatible with the selected plugin version.  
You can change the CS2 version by selecting a branch in the CS2 properties in Steam.
:::

If you encounter issues with demo playback such as game crash or playback not starting, please follow these troubleshooting steps:

1. Make sure the demo you are trying to play is compatible with your current setup, that is:

   - CS2 version: from the **'Betas'** tab in the CS2 properties in your Steam library.
   - CS:DM plugin version: from the **Playback** settings in CS:DM. When you select a version other than **latest**, it will display compatible demos date ranges.
   - On **Windows only** and if you want to generate videos, your HLAE version must be compatible with the CS2 version.  
     You can download older versions of HLAE from [GitHub](https://github.com/advancedfx/advancedfx/releases) and select it from the **Video** settings in CS:DM.

2. As a last resort, to determine if it's a CS2 or CS:DM issue, try to play the demo **from the game rather than CS:DM** and check if the playback starts **and** the game doesn't crash during the playback (it can happen).  
   CS:DM starts the currently installed version of CS2 so if it doesn't work in the game, it won't work in CS:DM either.  
   If the issue occurs only when playing the demo from CS:DM, please create a [new issue](https://github.com/akiver/cs-demo-manager/issues/new).

## Counter-Strike executable not found

It can happen if you have multiple drives on Steam (where games are installed) and CS installed or _partially_ installed
on different drives. It has been reported [here](https://github.com/akiver/cs-demo-manager/issues/648).

1. Right-click on **CS2** in your Steam library, go to **Manage** and click on **Browse local files**.
2. Note the path where CS is installed (example: `D:\games\steamapps\common\Counter-Strike Global Offensive`).
3. Open the Steam settings and go to the **Storage** tab.
4. For each drive except the one where CS is installed, check if a folder `steamapps\common\Counter-Strike Global Offensive` exists and delete it.

Example:

- You have 4 Steam drives `D:\`, `E:\`, `F:\` and `G:\`
- CS is installed on `D:\games\steamapps\common\Counter-Strike Global Offensive`
- The `G:\` drive contains a `G:\steamapps\common\Counter-Strike Global Offensive` folder
- You have to delete the `G:\steamapps\common\Counter-Strike Global Offensive` folder

:::warning
On **Linux** this can happen if Steam has been installed using [Flatpak](https://flatpak.org/).  
It's not supported yet, so please install Steam using the native installer.
:::

## Watching CSGO demos

In order to watch **CSGO** demos, you have to select the **csgo_legacy** branch from your Steam library.  
To do so, follow these steps:

1. Right click on **CS2** in your Steam library and click on **Properties**.
2. Go to the **Betas** tab.
3. Select **csgo_legacy** from the dropdown menu.
4. Close the window and wait for the game to be updated.
5. You can now watch CSGO and CS2 demos from the application

:::tip
You can watch both CSGO and CS2 demos from CS:DM when the **csgo_legacy** beta is selected while keeping CS2 up to date.
:::

## Player voice indicator are not displayed in the HUD

It's a CS2 issue that exists since around the beginning of October 2024.

## What are JSON files next to my demo?

JSON files are generated by CS:DM when starting a demo playback to control the playback (camera focus, fast forward, etc.).
Those files should be deleted automatically when the game is closed and can also be safely deleted manually.  
You can find more details about it in this [documentation](/docs/development/cs-server-plugin).
