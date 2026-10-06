---
title: Installation
description: How to install CS Demo Manager
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installing the application

:::info
CS Demo Manager stores the data extracted from your demos (matches, players, statistics…) in a
[PostgreSQL](https://www.postgresql.org/) database. The application comes with its own PostgreSQL server, but you can also use [your own PostgreSQL server](#using-an-external-postgresql-server).
:::

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

1. Download the last CS Demo Manager installer from [GitHub](https://github.com/akiver/cs-demo-manager/releases) and install it.
2. Start the application, keep `Embedded (recommended)` selected on the connection screen and click on `Connect`.

</TabItem>

<TabItem value="macos" label="macOS">

1. Download the last CS Demo Manager installer from [GitHub](https://github.com/akiver/cs-demo-manager/releases) and install it.
2. Start the application, keep `Embedded (recommended)` selected on the connection screen and click on `Connect`.

</TabItem>

<TabItem value="linux" label="Linux">

<Tabs groupId="distro" queryString>
<TabItem value="debian" label="Debian-based distributions">

1. Download the latest `deb` installer from [GitHub](https://github.com/akiver/cs-demo-manager/releases)
2. `sudo apt install ./cs-demo-manager_<version>_amd64.deb` (replace `<version>` with the actual version number)

</TabItem>

<TabItem value="redhat" label="Red Hat-based distributions">

:::warning
You must enable the GNOME AppIndicator tray extension to see the app icon!

1. `sudo dnf install gnome-shell-extension-appindicator`
2. `sudo dnf install gnome-extensions-app`
3. Reboot
4. Open the `Extensions` application and enable `AppIndicator and KStatusNotifierItem Support`
   :::

5. Download the latest `rpm` installer from [GitHub](https://github.com/akiver/cs-demo-manager/releases)
6. `sudo dnf install ./cs-demo-manager-<version>.rpm` (replace `<version>` with the actual version number)

</TabItem>

<TabItem value="arch" label="Arch Linux">
For Arch-based distros there is a community-maintained [AUR package](https://aur.archlinux.org/packages/cs-demo-manager-appimage) based on the AppImage releases for easier installation and updating. Using `paru` you can install `cs-demo-manager-appimage` with

```bash
paru -S cs-demo-manager-appimage
```

or with `yay`

```bash
yay -S cs-demo-manager-appimage
```

Other AUR helpers or pacman wrappers obviously work also. Do **NOT** report build or installation issues on Github; instead use the comment section on the AUR. Likewise please don't report application specific bugs on the AUR, except in the rare case that the bug only happens when using the AUR package.

</TabItem>

<TabItem value="app-image" label="AppImage">

1. Download the latest AppImage from [GitHub](https://github.com/akiver/cs-demo-manager/releases)
2. Make it executable: `chmod +x cs-demo-manager-<version>.AppImage` (replace `<version>` with the actual version number)
3. Run it: `./CS-Demo-Manager-<version>.AppImage`

</TabItem>
</Tabs>

</TabItem>
</Tabs>

The first connection creates the database, it takes a few seconds. See the
[database guide](/docs/guides/database#embedded-database) to know where the data is stored and how to connect to it
with a PostgreSQL client.

## Using an external PostgreSQL server

Using the embedded database is recommended, but you can connect the application to a PostgreSQL server that you manage
yourself, for example to share it between several machines. The server must be PostgreSQL **version 17** or later.

You can watch the following videos to see the installation steps:

- [Windows](https://www.youtube.com/watch?v=WuqghTTfw7U)
- [macOS](https://www.youtube.com/watch?v=Q5RaSjo0DbQ)
- [Linux](https://www.youtube.com/watch?v=DLLwfNajSoY)

:::tip
If you want to run the database in a Docker container please read [this documentation](/docs/development/setup#database-in-docker).
:::

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

1. Download the last [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) installer and launch it.
2. Click on `Next` until you reach the `Select Components` step:  
   ![components](/img/documentation/installation/windows/components.png)
3. The only mandatory component is **`PostgreSQL Server`**, the others are optional.
4. Click on `Next` until you reach the `Password` step:  
   ![password](/img/documentation/installation/windows/password.png)
5. Choose a password for the `postgres` user and **remember it**. You will need it later.
6. Click on `Next` until you reach the `Port` step:  
   ![port](/img/documentation/installation/windows/port.png)
7. It's recommended to use the default port `5432` but you can change it if you want.
8. Click on `Next` and when the installation is finished, click on `Finish`.

</TabItem>
<TabItem value="macos" label="macOS">

1. Download the last [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) installer and launch it.
2. Click on `Next` until you reach the `Select Components` step:  
   ![components](/img/documentation/installation/macos/components.png)
3. The only mandatory component is **`PostgreSQL Server`**, the others are optional.  
   `pgAdmin` is a GUI tool to manage the database, you may find it useful.
4. Click on `Next` until you reach the `Password` step:  
   ![password](/img/documentation/installation/macos/password.png)
5. Choose a password for the `postgres` user and **remember it**. You will need it later.
6. Click on `Next` until you reach the `Port` step:  
   ![port](/img/documentation/installation/macos/port.png)
7. It's recommended to use the default port `5432` but you can change it if you want.
8. Click on `Next` and when the installation is finished, click on `Finish`.

</TabItem>
<TabItem value="linux" label="Linux">

Instructions depend on your Linux distribution, please refer to the [official documentation](https://www.postgresql.org/download/).  
Once PostgreSQL is installed (run `psql --version` to make sure it's installed), you have to change the `postgres` user password:

1. `sudo -u postgres psql`
2. `ALTER USER postgres PASSWORD 'mypassword';`
3. `\q` to quit `psql`

</TabItem>
</Tabs>

Once your server is running, select `External` on the connection screen of the application and enter its address, port
and credentials. If you are already connected to the embedded database, disconnect first from `Settings` -> `Database`.

## Troubleshooting

### Anti-virus reports

See the [FAQ](/docs/faq#anti-virus-reports).

### Can I use a remote database?

Yes, see the [documentation](/docs/guides/database#using-a-remote-database).

### The embedded database could not be started

The error message shown on the connection screen and the server log files (see the [database guide](/docs/guides/database#embedded-database))
contain the reason. If it mentions that the data was created by another PostgreSQL version, follow the
[upgrade guide](/docs/guides/database#upgrading-the-embedded-database).

### ECONNREFUSED error

This error only concerns [external PostgreSQL servers](#using-an-external-postgresql-server), it means the server is
not running **or** is not reachable.  
You should:

1. Make sure the **postgresql** service is running. On Windows you can do this by doing the following:
   1. Search for **services** from the Windows search bar and open the **Services** application.
   2. Find the service **postgresql-x64** and ensure it's running. If it's missing, it means PostgreSQL is not installed.
      ![Windows Services](/img/documentation/installation/windows/services.png)
2. Make sure the **port** is correct. The default port is **5432**, but you may have changed it during installation.
   1. Open a terminal (**cmd.exe** on Windows)
   2. Type `psql -h 127.0.0.1 -U postgres -p 5432` and press enter. If you have the same error, chances are the port is incorrect.
3. Re-install PostgreSQL and make sure to set the port to **5432** during the installation.

:::note
If you are using a remote database, ensure the server is running, and the IP **and** port are correct.
:::

### The app tray icon is missing

On RedHat-based Linux distributions the system tray is not enabled by default.  
You have to install the "Gnome extensions app" and enable it to see the tray icon as mentioned in the [installation instructions](/docs/installation?os=linux#installing-the-application).
