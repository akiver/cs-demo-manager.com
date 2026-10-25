---
title: 'Setup'
sidebar_position: 2
---

## Requirements

:::warning
On Windows use a shell such as [Git Bash](https://git-scm.com/), it will not work with `cmd.exe`!
:::

### Vite+

The Vite+ CLI is an all-in-one developer tool that handles Node.js version management, package installation, task running, code formatting, and more.  
Follow the installation instructions [here](https://viteplus.dev/guide/) to install it.

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

Install [Visual Studio 2026](https://visualstudio.microsoft.com/downloads/) and make sure to select/install the component `Desktop development with C++` during the installation.

### PostgreSQL

In development, the application uses its own [application folder](/docs/guides/application-folder) and settings. It allows you to work on the application and play CS without worrying
about breaking your main database schema and data.

You have 3 options to run the database:

- **Embedded server** (recommended): nothing to install. `vp install` downloads the PostgreSQL binaries into the
  `static/postgres` folder and the application starts the server on its own, its data lives in the `postgres` folder of
  the development application folder. Keep `Embedded` selected on the connection screen.
- [**Docker**](/docs/development/setup#database-in-docker): a PostgreSQL container, useful to test the application
  against an external server.
- A [**classic PostgreSQL installation**](/docs/installation#using-an-external-postgresql-server) on your machine.

With Docker or a classic installation, create a dedicated development database (for example `csdm_dev`) and select
`External` on the connection screen.

## Database in Docker

:::warning
[Docker](https://docs.docker.com/get-docker/) must be installed with the `docker` CLI and its Compose plugin, the scripts
run `docker compose`.
:::

### Starting the container

From the root project folder:

1. [Optional] `cp docker/.env.example docker/.env` and edit the database name, password and port. The defaults are
   `csdm_dev`, `password` and `5432`.
2. `./docker/start.sh`

Connect the application to the database by
selecting `External` on the connection screen with the host `127.0.0.1`, the port, the database name, the user
`postgres` and the password from the `docker/.env` file.

:::tip
If you are on Windows with WSL 2, you might notice a RAM usage increase by the process `vmmem`.  
It's a WSL known issue that haven't been fixed yet, you can use this [workaround](https://github.com/microsoft/WSL/issues/4166#issuecomment-526725261) in the meantime.
:::

### Stopping the container

From the root project folder:

1. `./docker/stop.sh`

## Start developing

1. `cp .env.example .env` and edit variables if needed
2. `vp install`
3. `vp run dev`

## Troubleshooting

### Cannot find module 'winregistry.node'

> [ERROR] [plugin native-node-modules] Cannot find module '../build/Release/winregistry.node'

This error occurs when `Python 3` or the `Desktop development with C++` Visual Studio component are not installed.  
Please make sure to install all [required dependencies](/docs/development/setup#requirements).

### chrome-sandbox error (Linux)

On Ubuntu >= 20.04, you might encounter the following error:

```bash
You need to make sure that /electron/dist/chrome-sandbox is owned by root and has mode 4755.
```

The quick fix is to run the following command to disable the sandbox:

```bash
sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0
```

### Error: listen EACCES: permission denied 0.0.0.0:4574

If you are on Windows, open a PowerShell terminal as administrator and run the following commands:

```powershell
net stop winnat
net start winnat
```
