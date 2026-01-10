---
title: Demo playback
sidebar_position: 2
---

## Player voices filtering

CS:DM adds convenient console aliases for **CS2** (not CS:GO) that you can use in the game's console or bind to a key, allowing you to listen to specific teams or players' voices while watching an [analyzed demo](/docs/guides/demos-analysis).

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
2. The demo's path must contain only [Basic Latin characters](<https://en.wikipedia.org/wiki/Basic_Latin_(Unicode_block)>).
   Counter-Strike can't play demos whose path contains non–Basic Latin characters.
   Move your demos into a folder whose path uses only Basic Latin characters.
3. Close third-party anti-cheat clients (FACEIT, ESEA, etc.).
4. If the Counter-Strike official servers are down, playback may fail on the first attempt. Click "Play" again.
   See [#992](https://github.com/akiver/cs-demo-manager/issues/992).
5. There may be an incompatibility between your CS2 version and the internal [CS:DM plugin](/docs/development/cs-server-plugin).
   See [CS2 plugin compatibility](#cs2-plugin-compatibility) for more information.

## CS2 plugin compatibility

CS:DM uses a [plugin](/docs/development/cs-server-plugin) to communicate with CS2 and control demo playback.
This plugin is closely tied to the game build, so if CS2 is updated or your installed CS2 version is incompatible with the plugin, playback may not start, or the game may crash.

CS:DM bundles several versions of the plugin to ensure compatibility with different CS2 builds.
You can select the plugin version in the **Playback** settings.

![CS2 plugin version](/img/documentation/guides/playback/cs2-plugin-version.png)

:::danger
Use this option only when you want to watch old demos that are not compatible with the latest CS2 version.
If you do so, you must also ensure that the CS2 version you have installed is compatible with the selected plugin version. See [Downloading old CS2 versions](#downloading-old-cs2-versions) for more information.
:::

If you encounter issues with demo playback such as a game crash or playback not starting, please follow these troubleshooting steps:

1. Make sure the demo you are trying to play is compatible with your current setup. Specifically check:
   - CS2 version: either the custom CS2 location configured in the **Playback** settings, or the version selected under **CS2 > Properties > Betas** in your Steam library.
   - CS:DM plugin version: set in the **Playback** settings in CS:DM. When you select a version other than **Latest**, CS:DM shows the supported demo date ranges.
   - Windows only (for video generation): ensure your HLAE version is compatible with your CS2 version.
     You can download older HLAE versions from [GitHub](https://github.com/advancedfx/advancedfx/releases) and select it in the **Video** settings in CS:DM.

2. As a last resort, determine whether it's a CS2 or CS:DM issue: try to play the demo directly from the game instead of CS:DM and verify that playback starts and the game doesn't crash during playback.
   CS:DM launches the currently installed CS2 version, so if it doesn't work in-game, it won't work from CS:DM either.
   If the issue occurs only when playing the demo from CS:DM, please create a [new issue](https://github.com/akiver/cs-demo-manager/issues/new).

## Watching CS:GO demos

To watch **CS:GO** demos, select the **csgo_legacy** branch in your Steam library.
To do so, follow these steps:

1. Right-click **CS2** in your Steam library and click **Properties**.
2. Go to the **Betas** tab.
3. Select **csgo_legacy** from the dropdown menu.
4. Close the window and wait for the game to be updated.
5. You can now watch CS:GO and CS2 demos from CS:DM.

:::tip
You can watch both CSGO and CS2 demos from CS:DM when the **csgo_legacy** beta is selected while keeping CS2 up to date.
:::

## Watching old CS2 demos

To watch demos that are compatible only with an older version of the game, you must install a compatible older game version
and select the plugin version in the **Playback** settings in CS:DM that matches that game version.
You can do this in two ways:

1. Use a Steam beta branch to install an older version of the game.
   1. Right-click **CS2** in your Steam library and go to **Properties**.
   2. Go to the **Betas** tab.
      ![Steam betas](/img/documentation/guides/playback/steam-betas.png)
   3. Select the appropriate beta branch from the dropdown menu.
   4. Close the window and wait for the game to be updated.

2. Download an older version of the game and select it in the **Playback** settings in CS:DM.  
   See [Downloading old CS2 versions](#downloading-old-cs2-versions) for more information.

## Downloading old CS2 versions

We'll use the official Steam command `download_depot` from the Steam console to download an older version of CS2.
This command expects 3 parameters: the app ID, the depot ID, and the manifest ID. Usage:
`download_depot <app ID> <depot ID> <manifest ID>`

- The app ID is the unique identifier for the game, which is `730` for CS2/CS:GO.
- A depot is a collection of files. You will need to download files from 2 depots: the main depot and the OS-specific depot for your operating system.
  The 2 depots you will need are:
  - The main depot, which is [2347770](https://steamdb.info/depot/2347770/manifests/) for CS2.
  - The OS-specific depot, which is [2347771](https://steamdb.info/depot/2347771/manifests/) for Windows and [2347773](https://steamdb.info/depot/2347773/manifests) for Linux.
    Once downloaded, move the files from the OS-specific depot into the main depot folder.
- A manifest is a snapshot of a depot’s contents at a specific time.
  You can find a list of available manifests for a depot on SteamDB — for example, [here are the manifests of the main depot (2347770)](https://steamdb.info/depot/2347770/manifests/) (you must be logged in to see more than the 10 most recent manifests).
  ![CS2 manifests](/img/documentation/guides/playback/manifests.png)

The most important thing is to download a manifest that is compatible with the demo you want to watch. This means the manifest must have been created before the demo was recorded.
For example, if you want to watch a demo created before the CS2 "Animation Graph" update released on July 28, 2025, the latest manifests before the release are `5023020258185551340` for the main depot (as seen in the screenshot above), `366892905078765270` for the Windows depot, and `6261982168194353241` for the Linux depot.

Once you have the manifest IDs, you can use the Steam console to download the game files.

:::warning
The following example downloads the manifests of the last CS2 version before the "Animation Graph" update released on July 28, 2025.
Make sure to replace the manifest IDs with the ones you want to download.
:::

1. Open the [Steam console](steam://open/console).
   You can also press `Win + R` and type `steam://open/console` on Windows, or run `steam://open/console` in your terminal on Linux.
   This opens the `Console` tab in the Steam client, where you can submit commands.
   ![Steam console](/img/documentation/guides/playback/steam-console.png)
2. Download the main depot files by typing the following command:
   ```bash
   download_depot 730 2347770 5023020258185551340
   ```
3. Download the OS-specific depot files by typing the following command:
   - For Windows:
     ```bash
     download_depot 730 2347771 366892905078765270
     ```
   - For Linux:
     ```bash
     download_depot 730 2347773 6261982168194353241
     ```
4. Note where the files were downloaded. The Steam console shows the path when the download is complete. By default, they will be in the `steamapps\content\app_730` folder inside your Steam installation directory.
   You will have 2 folders:
   `<Steam install folder>\steamapps\content\app_730\depot_2347770` and
   `<Steam install folder>\steamapps\content\app_730\depot_2347771` (or `depot_2347773` for Linux).
5. Move the contents of the OS-specific depot folder (`depot_2347771` for Windows or `depot_2347773` for Linux) into the main depot folder (merge into the `game` folder).
6. In your CS:DM settings, go to the **Playback** tab, enable the **CS2 location** option and select the `cs2.exe` file located in `<Steam install folder>\steamapps\content\app_730\depot_2347770\game\bin\win64\cs2.exe` on Windows, or the `cs2.sh` file located in `<Steam install folder>/steamapps/content/app_730/depot_2347770/game/cs2.sh` on Linux.
   ![CS2 location](/img/documentation/guides/playback/cs2-location.png)
7. In your CS:DM settings, select the **Playback** tab and choose the appropriate CS2 plugin version that is compatible with the older game version you just downloaded. See [CS2 plugin compatibility](#cs2-plugin-compatibility) for more information.

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

## Player voice indicators are not displayed in the HUD

This is a known CS2 issue present since early October 2024.

## What are JSON files next to my demo?

JSON files are generated by CS:DM when starting a demo playback to control the playback (camera focus, fast forward, etc.).
Those files should be deleted automatically when the game is closed and can also be safely deleted manually.  
You can find more details about it in this [documentation](/docs/development/cs-server-plugin).
