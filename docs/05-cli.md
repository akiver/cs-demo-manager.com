---
title: CLI
description: How to install and use the CLI (Command Line Interface)
---

CS:DM comes with a CLI (Command Line Interface) with multiple commands, allowing you to do tasks without running the GUI.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installation

<Tabs groupId="os" queryString>

<TabItem value="windows" label="Windows">

The CLI is automatically installed when you install the application with the [installer](/docs/installation#step-3-the-application).

</TabItem>
<TabItem value="macos" label="macOS">

1. Install the application following the [installation guide](/docs/installation?os=macos)
2. From a terminal, run:  
   `echo '\nexport PATH="/Applications/CS Demo Manager.app/Contents/Resources:$PATH"' >> ~/.zshrc`
3. Restart your terminal

:::caution
The above command assumes that the you are using the default macOS shell `zsh` (since macOS Catalina).
If you are using another shell, you have to replace `~/.zshrc` with the correct configuration file.
:::

</TabItem>
<TabItem value="linux" label="Linux">

1. Install the application following the [installation guide](/docs/installation?os=linux)
2. Find the path where the application is installed. It depends of your distribution, for example:
   - Debian `dpkg -L cs-demo-manager` (should be `/opt/CS Demo Manager`)
   - RPM `rpm -ql cs-demo-manager` (should be `/usr/share/cs-demo-manager`)
3. From a terminal run (replace `/the/app/path` with the real application path):  
   `echo '\nexport PATH="/the/app/path:$PATH"' >> ~/.bashrc`
4. Restart your terminal

:::caution
The above command assumes that your shell is `bash`.
If you are using another shell, you have to replace `~/.bashrc` with the correct configuration file.
:::

</TabItem>

</Tabs>

## Usage

<Tabs groupId="os" queryString>

<TabItem value="windows" label="Windows">

Open a Windows terminal and type `csdm`, it will display all available commands.

:::caution
If you have a message **csdm not found**, it means that the folder where the CLI executable `csdm.exe` is located is not in your `PATH` environment variable.  
The default path is **C:\Users\Username\AppData\Programs\CS Demo Manager** and you can follow this [guide](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/#how-to-add-a-folder-to-your-path) to add it to your `PATH` variable.
:::

</TabItem>

<TabItem value="macos" label="macOS">

Open a terminal and type `csdm`, it will display all available commands.

:::caution
If you have a message **command not found**, it means the folder where the CLI executable `csdm` is located is not in your `PATH` environment variable.  
Please follow the [installation instructions](/docs/cli?os=macos#installation) above.
:::

</TabItem>

<TabItem value="linux" label="Linux">

Open a terminal and type `csdm`, it will display all available commands.

:::caution
If you have a message **command not found**, it means the folder where the CLI executable `csdm` is located is not in your `PATH` environment variable.  
Please follow the [installation instructions](/docs/cli?os=linux#installation) above.
:::

</TabItem>

</Tabs>

## Download Valve demos

Download the last MM demos of the current Steam account or from share codes.

```bash
csdm dl-valve [shareCodes...] [--output]
```

:::warning
You must be connected to your Steam account to use this command.
:::

| Name         | Default                                                                                       | Mandatory | Description                               |
| ------------ | --------------------------------------------------------------------------------------------- | --------- | ----------------------------------------- |
| [shareCodes] |                                                                                               | No        | Share codes to download.                  |
| --output     | 1. Folder specified in the CS:DM settings<br/>2. CS folder `replays`<br/>3. Current directory | No        | Directory where demos will be downloaded. |

### Examples

To download last MM demos of the current Steam account:

```bash
csdm dl-valve
```

To download demos from share codes:

```bash
csdm dl-valve CSGO-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX CSGO-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX
```

To change the directory where demos will be downloaded:

```bash
csdm dl-valve --output "C:\Users\username\Downloads"
```

## Download FACEIT demos

:::danger
This command is currently disabled, see [here](/docs/guides/downloads#faceit) for details.
:::

Download the last demos of the current [FACEIT](https://www.faceit.com/) account set in the application or from its nickname.

```bash
csdm dl-faceit [--nickname] [--output]
```

| Name       | Default                                                                                       | Mandatory | Description                               |
| ---------- | --------------------------------------------------------------------------------------------- | --------- | ----------------------------------------- |
| --nickname | Account's nickname set in the application                                                     | No        | Account's nickname to download demos.     |
| --output   | 1. Folder specified in the CS:DM settings<br/>2. CS folder `replays`<br/>3. Current directory | No        | Directory where demos will be downloaded. |

### Examples

To download last FACEIT demos of the current FACEIT account:

```bash
csdm dl-faceit
```

To download demos of a specific account identified by its nickname:

```bash
csdm dl-faceit --nickname "PlayerNickname"
```

To change the directory where demos will be downloaded:

```bash
csdm dl-faceit --output "C:\Users\username\Downloads"
```

## Download Renown demos

Download the last demos of the current [Renown](https://renown.gg/) account set in the application or from a Steam ID.

```bash
csdm dl-renown [--steamid] [--output]
```

| Name      | Default                                                                                       | Mandatory | Description                               |
| --------- | --------------------------------------------------------------------------------------------- | --------- | ----------------------------------------- |
| --steamid | Current account's **Steam ID** set in the application                                         | No        | Account's Steam ID to download demos.     |
| --output  | 1. Folder specified in the CS:DM settings<br/>2. CS folder `replays`<br/>3. Current directory | No        | Directory where demos will be downloaded. |

### Examples

To download last Renown demos of the current Renown account:

```bash
csdm dl-renown
```

To download demos of a specific account identified by its Steam ID:

```bash
csdm dl-renown --steamid "PlayerSteamID64"
```

To change the directory where demos will be downloaded:

```bash
csdm dl-renown --output "C:\Users\username\Downloads"
```

## Download 5EPLAY demos

Download the last demos of the current [5EPLAY](https://www.5eplay.com/) account set in the application or from its ID.

```bash
csdm dl-5eplay [--id] [--output]
```

| Name     | Default                                                                                       | Mandatory | Description                               |
| -------- | --------------------------------------------------------------------------------------------- | --------- | ----------------------------------------- |
| --id     | Current account's **5EPLAY ID** set in the application                                        | No        | Account's 5EPLAY ID to download demos.    |
| --output | 1. Folder specified in the CS:DM settings<br/>2. CS folder `replays`<br/>3. Current directory | No        | Directory where demos will be downloaded. |

:::tip
To find your **5EPlay ID**:

1. Log in to your 5EPlay account.
2. Go to your profile page.
3. Copy the last segment of the URL. For example, if your profile URL is `https://arena.5eplay.com/data/player/1111`, your **5EPlay ID** is `1111`.
   :::

### Examples

To download last 5EPlay demos of the current 5EPLAY account:

```bash
csdm dl-5eplay
```

To download demos of a specific account identified by its ID:

```bash
csdm dl-5eplay --id "Player5EPLAYID"
```

To change the directory where demos will be downloaded:

```bash
csdm dl-5eplay --output "C:\Users\username\Downloads"
```

## Analyze demos

Analyze demos and persist them in the database.

```bash
csdm analyze demoPaths... [--source] [--force]
```

| Name      | Default | Mandatory | Description                                                                                                                                                |
| --------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| demoPaths |         | Yes       | Demos paths, can be either a `.dem` files path or a directory. It can be relative or absolute.                                                             |
| --source  |         | No        | Force the analysis logic of the demo analyzer. Available values: `challengermode,ebot,esea,esl,esportal,faceit,fastcup,5eplay,perfectworld,popflash,valve` |
| --force   | `false` | No        | Force demo analysis even if they are already in the database.                                                                                              |

### Examples

Analyze 1 demo:

```bash
csdm analyze "C:\Users\username\Desktop\demo.dem"
```

Analyze multiple demos:

```bash
csdm analyze "C:\Users\username\Desktop\demo.dem" "C:\Users\username\Desktop\demo2.dem"
```

Analyze all demos in a directory using the ESL analyzer and re-analyze demos that have already been analyzed:

```bash
csdm analyze "C:\Users\username\Desktop\MyFolder" --source esl --force
```

## Export demos to XLSX

Analyze and export demos to either a single or multiple XLSX files.

```bash
csdm xlsx demoPaths... [--output-folder] [--source] [--single] [--sheets] [--force-analyze]
```

| Name            | Default           | Mandatory | Description                                                                                                                                                |
| --------------- | ----------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| demoPaths       |                   | Yes       | Demos paths, can be either a `.dem` files path or a directory. It can be relative or absolute.                                                             |
| --source        |                   | No        | Force the analysis logic of the demo analyzer. Available values: `challengermode,ebot,esea,esl,esportal,faceit,fastcup,5eplay,perfectworld,popflash,valve` |
| --output-folder | Current directory | No        | Directory where output files will be saved.                                                                                                                |
| --single        | `false`           | No        | Generates a single XLSX file instead of one per demo.                                                                                                      |
| --sheets        | All sheets        | No        | Includes only sheets identified by its name. Available values: [general,players,rounds,kills].                                                             |
| --force-analyze | `false`           | No        | Force demo analysis even if they are already in the database.                                                                                              |

### Examples

Export 1 demo:

```bash
csdm xlsx "C:\Users\username\Desktop\demo.dem"
```

Export multiple demos with only the "Rounds" and "Kills" sheets:

```bash
csdm xlsx "C:\Users\username\Desktop\demo.dem" "C:\Users\username\Desktop\demo2.dem" --sheets rounds,kills
```

Export all demos in a directory using the ESL analyzer and save it in a custom directory:

```bash
csdm xlsx "C:\Users\username\Desktop\MyFolder" --output-folder "C:\Users\username\Documents" --source esl
```

## Export demos to JSON

Analyze and export demos into JSON files.

```bash
csdm json demoPaths... [--output-folder] [--source] [--minify] [--force-analyze]
```

| Name            | Default           | Mandatory | Description                                                                                                                                                |
| --------------- | ----------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| demoPaths       |                   | Yes       | Demos paths, can be either a `.dem` files path or a directory. It can be relative or absolute.                                                             |
| --source        |                   | No        | Force the analysis logic of the demo analyzer. Available values: `challengermode,ebot,esea,esl,esportal,faceit,fastcup,5eplay,perfectworld,popflash,valve` |
| --output-folder | Current directory | No        | Directory where output files will be saved.                                                                                                                |
| --minify        | `false`           | No        | Minify the JSON files.                                                                                                                                     |
| --force-analyze | `false`           | No        | Force demo analysis even if they are already in the database.                                                                                              |

### Examples

Export 1 demo:

```bash
csdm json "C:\Users\username\Desktop\demo.dem"
```

Export multiple demos in a custom directory and minify the JSON files:

```bash
csdm json "C:\Users\username\Desktop\demo.dem" "C:\Users\username\Desktop\demo2.dem" --output-folder "C:\Users\username\Documents" --minify
```

## Generate videos

Generate videos from demos.

```bash
csdm video demoPath startTick endTick [options]
```

:::warning
See the [video documentation](/docs/guides/video) for more information about options.  
Third-party software will be downloaded automatically if not present!
:::

| Name                                  | Default        | Mandatory | Description                                                         |
| ------------------------------------- | -------------- | --------- | ------------------------------------------------------------------- |
| demoPath                              |                | Yes       | Path to the `.dem` file to record from.                             |
| startTick                             |                | Yes       | Start tick of the sequence to record.                               |
| endTick                               |                | Yes       | End tick of the sequence to record.                                 |
| --framerate \<number\>                | CS:DM settings | No        | Output frame rate.                                                  |
| --width \<number\>                    | CS:DM settings | No        | Output width in pixels.                                             |
| --height \<number\>                   | CS:DM settings | No        | Output height in pixels.                                            |
| --close-game-after-recording          | CS:DM settings | No        | Close the game when recording finishes.                             |
| --no-close-game-after-recording       | CS:DM settings | No        | Do not close the game after recording.                              |
| --concatenate-sequences               | CS:DM settings | No        | Concatenate recorded sequences into a single video.                 |
| --no-concatenate-sequences            | CS:DM settings | No        | Export each recorded sequence separately.                           |
| --encoder-software \<string\>         | CS:DM settings | No        | Encoding backend. Allowed values: `FFmpeg`, `VirtualDub`.           |
| --recording-system \<string\>         | CS:DM settings | No        | Recording system. Allowed values: `HLAE`, `CS`.                     |
| --recording-output \<string\>         | CS:DM settings | No        | Output type. Allowed values: `video`, `images`, `images-and-video`. |
| --ffmpeg-crf \<number\>               | CS:DM settings | No        | FFmpeg CRF (quality). Lower = higher quality (between 0 and 51).    |
| --ffmpeg-audio-bitrate \<number\>     | CS:DM settings | No        | FFmpeg audio bitrate in kbps.                                       |
| --ffmpeg-video-codec \<string\>       | CS:DM settings | No        | FFmpeg video codec (e.g., `libx264`, `libx265`).                    |
| --ffmpeg-audio-codec \<string\>       | CS:DM settings | No        | FFmpeg audio codec (e.g., `aac`, `libopus`).                        |
| --ffmpeg-video-container \<string\>   | CS:DM settings | No        | Output container. Allowed values: `mp4`, `avi`, `mkv`.              |
| --ffmpeg-input-parameters \<string\>  | CS:DM settings | No        | Extra FFmpeg input parameters.                                      |
| --ffmpeg-output-parameters \<string\> | CS:DM settings | No        | Extra FFmpeg output parameters.                                     |
| --show-x-ray                          | CS:DM settings | No        | Enable X-Ray during recording.                                      |
| --no-show-x-ray                       | CS:DM settings | No        | Disable X-Ray during recording.                                     |
| --show-only-death-notices             | CS:DM settings | No        | Show only death notices HUD.                                        |
| --no-show-only-death-notices          | CS:DM settings | No        | Show full HUD (not only death notices).                             |
| --player-voices                       | CS:DM settings | No        | Enable in-game player voices.                                       |
| --no-player-voices                    | CS:DM settings | No        | Disable in-game player voices.                                      |
| --death-notices-duration \<number\>   | CS:DM settings | No        | Duration in seconds of death notices.                               |
| --cfg \<string\>                      | CS:DM settings | No        | Plain text config executed before recording.                        |
| --focus-player \<steamID64\>          | -              | No        | Focus on a specific player by their SteamID64.                      |

### Examples

Record a video from tick 1200 to 4000 and use latest CS:DM settings:

```bash
csdm video "E:\cs\demo.dem" 1200 4000
```

Record a 1080p60 MP4 using FFmpeg:

```bash
csdm video "E:\cs\demo.dem" 1200 4000 --framerate 60 --width 1920 --height 1080 --encoder-software FFmpeg --ffmpeg-video-container mp4
```

Use HLAE + FFmpeg, disable X-Ray and focus on a specific player:

```bash
csdm video "E:\cs\demo.dem" 1200 4000 --recording-system HLAE --encoder-software FFmpeg --no-show-x-ray --focus-player 76561198000697560
```
