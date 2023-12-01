---
title: 'Setup'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Requirements

:::warning
On Windows use a shell such as [Git Bash](https://git-scm.com/), it will not work with `cmd.exe`!
:::

### Node.js

:::tip
The required Node.js version is available in the [`.node-version`](https://github.com/akiver/cs-demo-manager/blob/main/.node-version) file.
:::

<Tabs groupId="os" queryString>

<TabItem value="windows" label="Windows">

Installation instructions are [here](https://nodejs.org/en/download/package-manager#windows-1).

</TabItem>
<TabItem value="macos" label="macOS">

Installation instructions are [here](https://nodejs.org/en/download/package-manager#macos).

</TabItem>
<TabItem value="linux" label="Linux">

Installation instructions for the most common distributions are [here](https://nodejs.org/en/download/package-manager).

</TabItem>

</Tabs>

### Python 3

:::warning
Required only on Windows because of native dependencies!
:::

```shell
winget install -e --id Python.Python.3.9
```

Or manually with the [installer](https://www.python.org/downloads/windows/).

### Microsoft Visual C++ (MSVC)

:::warning
Required only on Windows because of native dependencies!
:::

Install [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) and make sure to select/install the component `Desktop development with C++` during the installation.

### PostgreSQL

The default database's name is `csdm` but it's recommended to create a development database, for example `csdm_dev`.  
Using a development database allows you to work on the application and play CS without worring about breaking your main database schema and data.

You can setup the database using [Docker](/docs/development/setup#database-in-docker) or the [classic PostgreSQL installation](/docs/installation).

## Database in Docker

### Installing psql

:::warning
While the PostgreSQL process can be run in a Docker container, the `psql` CLI **must be installed on the host machine**!
:::

To install only `psql`:

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

Follow the installation [documentation](/docs/installation?os=windows) and install only the `Command Line Tools` component during the process.

</TabItem>

<TabItem value="macos" label="macOS">

1. `brew install libpq`
2. `echo 'export PATH="/opt/homebrew/opt/libpq/bin:$PATH"' >> ~/.zshrc`

Or follow the installation [documentation](/docs/installation?os=macos) and install only the `Command Line Tools` component during the process.

</TabItem>
<TabItem value="linux" label="Linux">

Installation depends on your distribution, for example on Ubuntu:

```shell
sudo apt install postgresql-client -y
```

</TabItem>

</Tabs>

### Starting the container

From the root project folder:

1. [Optional] `cp .env.example .env` and edit configuration variables
2. `./docker/start.sh`

:::tip
If you are on Windows with WSL 2, you might notice a RAM usage increase by the process `vmmem`.  
It's a WSL known issue that haven't been fixed yet, you can use this [workaround](https://github.com/microsoft/WSL/issues/4166#issuecomment-526725261) in the meantime.
:::

### Stopping the container

From the root project folder:

1. `./docker/stop.sh`

## Start developing

1. `cp .env.example .env` and edit variables if needed
2. `npm install`
3. `npm run dev`

## Troubleshooting

### Cannot find module 'winregistry.node'

> [ERROR] [plugin native-node-modules] Cannot find module '../build/Release/winregistry.node'

This error occurs when `Python 3` or the `Desktop development with C++` Visual Studio component are not installed.  
Please make sure to install all [required dependencies](/docs/development/setup#requirements).
