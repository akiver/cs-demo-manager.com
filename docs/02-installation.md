---
title: Installation
description: How to install CS Demo Manager
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Reading the step by step instructions below **is highly recommended**.  
CS:DM requires an accessible **PostgreSQL** database to work properly.

You can watch the following videos to see the installation steps:

- [Windows](https://www.youtube.com/watch?v=WuqghTTfw7U)
- [macOS](https://www.youtube.com/watch?v=Q5RaSjo0DbQ)
- [Linux](https://www.youtube.com/watch?v=DLLwfNajSoY)

## Step 1: The database

A [PostgreSQL](https://www.postgresql.org/) database is required to use CS Demo Manager, the application will show the following screen until a connection has been established:

![Database connection](/img/documentation/installation/database-connection.png)

:::tip
If you want to run the database in a Docker container please read [this documentation](/docs/development/setup#database-in-docker).
:::

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

1. Download the last [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) installer and launch it.
2. Click on `Next` until you reach the `Select Components` step:  
   ![components](/img/documentation/installation/windows/components.png)
3. The mandatory components are **`PostgreSQL Server`** and **`Command Line Tools`**, the others are optional.
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
3. The mandatory components are **`PostgreSQL Server`** and **`Command Line Tools`**, the others are optional.  
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

Instructions depends on your Linux distribution, please refer to the [official documentation](https://www.postgresql.org/download/).  
Once PostgreSQL is installed (run `psql --version` to make sure it's installed), you have to change the `postgres` user password:

1. `sudo -u postgres psql`
2. `ALTER USER postgres PASSWORD 'mypassword';`
3. `\q` to quit `psql`

</TabItem>
</Tabs>

## Step 2: Setup psql

The `psql` program is the PostgreSQL command-line interface used by CS Demo Manager to create the database automatically.  
This step explains how to add `psql` to your `PATH` environment variable so that the application can find it and invoke it.

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

1. Make sure you installed the `Command Line Tools` component during the PostgreSQL installation.
2. Press `Windows+X` to open the the Power User Task Menu.
3. Click on `System`.
4. Click on `Advanced system settings`.
5. Click on `Environment Variables...`
6. Select the `Path` variable from the `User variables` panel at the top and click on `Edit`
7. Click on `Browse` and select the folder `C:\Program Files\PostgreSQL\16\bin`.
   :::caution
   If you changed the default PostgreSQL installation path (`C:\Program Files\PostgreSQL\VERSION\bin`), you have to select the correct folder.
8. Click on `OK`

</TabItem>

<TabItem value="macos" label="macOS">

1. Make sure you installed the `Command Line Tools` component during the PostgreSQL installation.
2. Open the macOS `Terminal` application, type `psql --version` and press `Enter`.  
   If the output is something like `psql (PostgreSQL) XX.XX`, **you can skip this step**, otherwise continue.
3. Still from the `Terminal` application, type the following command and press `Enter`:
   ```shell
   echo '\nexport PATH="/Library/PostgreSQL/16/bin:$PATH"' >> ~/.zshrc
   ```
   :::caution
   - If you changed the default PostgreSQL installation path (`/Library/PostgreSQL/VERSION/bin`), you have to adjust the above command accordingly.
   - The above command assumes that the you are using the default macOS shell `zsh` (since Catalina).  
     If you are using another shell, you have to replace `~/.zshrc` with the correct configuration file.
4. Quit completely the `Terminal` application.
5. Repeat the first step, this time the output should be something like `psql (PostgreSQL) XX.XX`.

</TabItem>

<TabItem value="linux" label="Linux">

It's automatically done during the PostgreSQL installation.

</TabItem>
</Tabs>

## Step 3: The application

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

1. Download the last CS Demo Manager installer from [GitHub](https://github.com/akiver/cs-demo-manager/releases) and install it.
2. Type the password you chose during the PostgreSQL installation and click on "Connect".

</TabItem>

<TabItem value="macos" label="macOS">

1. Download the last CS Demo Manager installer from [GitHub](https://github.com/akiver/cs-demo-manager/releases) and install it.
2. Type the password you chose during the PostgreSQL installation and click on "Connect".

</TabItem>

<TabItem value="linux" label="Linux">

1. **For RedHat Linux distributions only**, enable the Gnome tray extension:
   1. `sudo dnf install gnome-shell-extension-appindicator`
   2. `sudo dnf install gnome-extensions-app`
   3. Reboot
   4. Open the `Extensions` application and enable `AppIndicator and KStatusNotifierItem Support`.
2. Download the last CS Demo Manager installer from [GitHub](https://github.com/akiver/cs-demo-manager/releases) and install it.
3. Type the password you chose during the PostgreSQL installation and click on "Connect".

</TabItem>
</Tabs>

## Troubleshooting

Please read the [installation FAQ](/docs/faq/installation), and if your problem is not listed, feel free to [ask for help](https://github.com/akiver/cs-demo-manager/discussions).
