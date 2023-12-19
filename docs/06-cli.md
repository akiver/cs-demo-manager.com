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

Open a Windows terminal and type `csdm`, it will diplay all available commands.

:::caution
If you have a message **csdm not found**, it means that the folder where the CLI executable `csdm.exe` is located is not in your `PATH` environment variable.  
The default path is **C:\Users\Username\AppData\Programs\CS Demo Manager** and you can follow this [guide](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/#how-to-add-a-folder-to-your-path) to add it to your `PATH` variable.
:::

</TabItem>

<TabItem value="macos" label="macOS">

Open a terminal and type `csdm`, it will diplay all available commands.

:::caution
If you have a message **command not found**, it means the folder where the CLI executable `csdm` is located is not in your `PATH` environment variable.  
Please follow the [installation instructions](/docs/cli?os=macos#installation) above.
:::

</TabItem>

<TabItem value="linux" label="Linux">

Open a terminal and type `csdm`, it will diplay all available commands.

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
This command is currrently disabled, see [here](/docs/faq/download#why-faceit-downloads-are-disabled) for details.
:::

Download the last 8 demos of the current FACEIT account set in the application or from its nickname.

```bash
csdm dl-faceit [shareCodes...] [--output]
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

## Analyze demos

Analyze demos and persist them in the database.

```bash
csdm analyze [demoPaths...] [--source] [--force]
```

| Name      | Default | Mandatory | Description                                                                                                                        |
| --------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| demoPaths |         | Yes       | Demos paths, can be either a `.dem` files path or a directory. It can be relative or absolute.                                     |
| --source  |         | No        | Force the analysis logic of the demo analyzer. Available values: `challengermode,ebot,esea,esl,faceit,perfectworld,popflash,valve` |
| --force   | `false` | No        | Force demos analyzes even if they are already in the database.                                                                     |

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

| Name            | Default           | Mandatory | Description                                                                                                                        |
| --------------- | ----------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| demoPaths       |                   | Yes       | Demos paths, can be either a `.dem` files path or a directory. It can be relative or absolute.                                     |
| --source        |                   | No        | Force the analysis logic of the demo analyzer. Available values: `challengermode,ebot,esea,esl,faceit,perfectworld,popflash,valve` |
| --output-folder | Current directory | No        | Directory where output files will be saved.                                                                                        |
| --single        | `false`           | No        | Generates a single XLSX file instead of one per demo.                                                                              |
| --sheets        | All sheets        | No        | Includes only sheets identified by its name. Available values: [general,players,rounds,kills].                                     |
| --force-analyze | `false`           | No        | Force demos analyzes even if they are already in the database.                                                                     |

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
