---
title: Database
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Embedded database

Since version 3.21, CS Demo Manager comes with its own PostgreSQL server: there is nothing to install, the application
starts and stops it automatically. It's the default for new installations, existing installations keep using the
PostgreSQL server they were connected to.

The server runs only while the application (or the CLI) is running, and all its files live in the
[application folder](/docs/guides/application-folder):

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

- Data: `%USERPROFILE%\.csdm\postgres\data`
- Password of the `csdm` user: `%USERPROFILE%\.csdm\postgres\password`
- Server logs: `%USERPROFILE%\.csdm\postgres\data\log`

The server listens on `127.0.0.1` with a port chosen at each start, you can find it in the `port` line of
`%USERPROFILE%\.csdm\postgres\data\csdm.conf`.

</TabItem>
<TabItem value="macos" label="macOS">

- Data: `~/.csdm/postgres/data`
- Password of the `csdm` user: `~/.csdm/postgres/password`
- Server logs: `~/.csdm/postgres/data/log`

The server listens only on a Unix socket in `~/.csdm/postgres` (port `5432`), no password is required through it.

</TabItem>
<TabItem value="linux" label="Linux">

- Data: `~/.config/csdm/postgres/data`
- Password of the `csdm` user: `~/.config/csdm/postgres/password`
- Server logs: `~/.config/csdm/postgres/data/log`

The server listens only on a Unix socket in `~/.config/csdm/postgres` (port `5432`), no password is required through
it.

</TabItem>
</Tabs>

The database name and the user name are both `csdm`. You can connect to it with any PostgreSQL client while the
application is running, for example with `psql` on macOS:

```bash
psql -h ~/.csdm/postgres -p 5432 -U csdm -d csdm
```

:::tip
To switch between the embedded server and an external one, disconnect from the current database by clicking on the
`Disconnect` button in `Settings` -> `Database`, then choose the server type on the connection screen.
:::

## Upgrading the embedded database

Each CS Demo Manager release bundles a specific PostgreSQL version. A **major** PostgreSQL upgrade (for example from 18
to 19) changes the data files format: the new server cannot read the data created by the previous one and the
application shows an error mentioning both versions on the connection screen.

You then have two options:

- Click on `Delete data and start from scratch`. Match statistics can be restored by analyzing the demos again, but
  comments, tags, custom maps and cameras are lost.
- Follow the steps below to keep your data. It requires the previous PostgreSQL major version to read the old data,
  it's not bundled with the application.

:::warning
Make sure the application is **completely closed** (quit it from the tray/status bar menu) before running the commands
below, otherwise the embedded server may be running and the commands will fail.
:::

### Step 1: Export the data with the previous PostgreSQL version

1. Install the PostgreSQL version that created your data (the version is written in the `PG_VERSION` file of the data
   folder). The [PostgreSQL installers](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) work on
   Windows and macOS, on Linux use your distribution packages (e.g. `postgresql-18`).
2. Start the old server on the application data folder, on a port that is not in use, using the `pg_ctl` program of the
   version you just installed:

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

```powershell
& "C:\Program Files\PostgreSQL\18\bin\pg_ctl.exe" -D "$env:USERPROFILE\.csdm\postgres\data" -o "-c listen_addresses=127.0.0.1 -c port=5433" -l "$env:USERPROFILE\.csdm\postgres\upgrade.log" start
```

</TabItem>
<TabItem value="macos" label="macOS">

```bash
/Library/PostgreSQL/18/bin/pg_ctl -D ~/.csdm/postgres/data -o "-c listen_addresses=127.0.0.1 -c port=5433" -l ~/.csdm/postgres/upgrade.log start
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
/usr/lib/postgresql/18/bin/pg_ctl -D ~/.config/csdm/postgres/data -o "-c listen_addresses=127.0.0.1 -c port=5433" -l ~/.config/csdm/postgres/upgrade.log start
```

</TabItem>
</Tabs>

3. Export the database, the password is the content of the `password` file of the `postgres` folder:

```bash
pg_dump -h 127.0.0.1 -p 5433 -U csdm -d csdm > backup.sql
```

4. Stop the old server:

```bash
pg_ctl -D <data folder> stop
```

### Step 2: Create the new database

1. Start the application, the connection screen shows the version error.
2. Click on `Delete data and start from scratch` and confirm.
3. The application connects to a new empty database, quit it **completely**.

### Step 3: Import the data into the new database

The new PostgreSQL version is bundled with the application, its programs are in the `resources/static/postgres/bin`
folder of the application installation folder:

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

`%LOCALAPPDATA%\Programs\CS Demo Manager\resources\static\postgres\bin`

</TabItem>
<TabItem value="macos" label="macOS">

`/Applications/CS Demo Manager.app/Contents/Resources/static/postgres/bin`

</TabItem>
<TabItem value="linux" label="Linux">

`/opt/CS Demo Manager/resources/static/postgres/bin` (or the folder where the AppImage is extracted)

</TabItem>
</Tabs>

1. Start the new server the same way as in step 1, this time with the bundled `pg_ctl` (the `password` file has been
   regenerated during step 2).
2. Replace the empty database created by the application and import the backup:

```bash
psql -h 127.0.0.1 -p 5433 -U csdm -d postgres -c "DROP DATABASE csdm;" -c "CREATE DATABASE csdm;"
psql -h 127.0.0.1 -p 5433 -U csdm -d csdm -f backup.sql
```

3. Stop the server with `pg_ctl -D <data folder> stop`.
4. Start the application, it connects to the imported data and runs the pending migrations if any.

## Optimizing the database

You can optimize the database (reduce disk usage, query time…) from the application settings.

1. Go to the application settings
2. Go to the `Database` tab
3. Click on `Optimize database` button
   ![Optimize database](/img/documentation/guides/database/optimize.png)
4. Select what you want to do:
   - `Delete positions`: This will delete all positions used for the 2D viewer - It **strongly** reduces disk usage.
   - `Delete demos that are not on the filesystem anymore`: This will delete demos references **in the database only**
     known by the application that doesn't exist on the filesystem anymore.
   - `Clear demos cache`: This will delete all demos references **in the database only** known by the application.
5. Confirm and wait for the process to finish.

## Using a remote database

To use a remote database, select the `External` server type on the connection screen and set the IP address, port,
and credentials of your remote database.

If you are already connected to a database, you must first disconnect from it by clicking on the `Disconnect` button in
`Settings` -> `Database`.

:::warning
You may encounter the following error (see [the issue](https://github.com/akiver/cs-demo-manager/issues/1083)):

```
connection is insecure (try using sslmode=require)
```

In this case, you have to set the environment variable `PGSSLMODE` to `require` and restart the application.
:::

## Exporting the database

You can export the database using `pg_dump`.

```bash
pg_dump -h host -p port -U username -d db_name > backup.sql
```

Example with the default values:

```bash
pg_dump -h 127.0.0.1 -p 5432 -U postgres -d csdm > backup.sql
```

Positions take a lot of space, you can exclude them from the backup using the `--exclude-table-data` option:

```bash
pg_dump -h 127.0.0.1 -p 5432 -U postgres -d csdm --exclude-table-data='*positions*' > backup.sql
```

See the [official documentation](https://www.postgresql.org/docs/current/app-pgdump.html) for advanced usage.

## Importing the database

You can import the database using `psql`.

```bash
psql -h host -p port -U username -d db_name -f backup.sql
```

Example with the default values:

```bash
psql -h 127.0.0.1 -p 5432 -U postgres -d csdm -f backup.sql
```

:::warning
You must have created a fresh database before importing it.

1. `DROP DATABASE IF EXISTS db_name;`
2. `CREATE DATABASE db_name;`
   :::
