# Installation

## Can I use a remote database?

Yes, see the [documentation](/docs/guides/database#using-a-remote-database).

## PSQL binary not found

If you have the error message "**PSQL binary not found**" it means that the PostgreSQL `psql` program is not in your `PATH` environment variable.  
Please follow the [Step 2: Setup psql](/docs/installation#step-2-setup-psql) instructions to fix this issue.

## ECONNREFUSED error

This error means the PostgreSQL server is not running **or** is not reachable.  
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

## The app tray icon is missing

On RedHat-based Linux distributions the system tray is not enabled by default.  
You have to install the "Gnome extensions app" and enable it to see the tray icon as mentioned in the [installation instructions](/docs/installation?os=linux#step-3-the-application).
