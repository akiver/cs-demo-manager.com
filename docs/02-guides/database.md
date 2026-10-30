---
title: Database
sidebar_position: 10
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Embedded database

CS Demo Manager comes with its own PostgreSQL server that the application starts and stops automatically, you don't
need to install PostgreSQL. It's the default for installations made since version 3.21, older installations keep using
the PostgreSQL server they were connected to (see below to switch).

The server runs only while the application (or the CLI) is running, and all its files live in the
[application folder](/docs/guides/application-folder):

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

- Data: `%USERPROFILE%\.csdm\postgres\data`
- Password of the `csdm` user: `%USERPROFILE%\.csdm\postgres\password`
- Server logs: `%USERPROFILE%\.csdm\postgres\data\log`

The server listens on `127.0.0.1` port `25432`, the password is required through it. If this port is already in use by
another program, a free one is used instead. You can find it in the `port` line of
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
application is running, for example with `psql`:

```bash
# Windows
psql -h 127.0.0.1 -p 25432 -U csdm -d csdm
# macOS
psql -h ~/.csdm/postgres -p 5432 -U csdm -d csdm
```

:::tip
To switch between the embedded server and an external one, disconnect from the current database by clicking on the
`Disconnect` button in `Settings` -> `Database`, then choose the server type on the connection screen. Switching to
the embedded server starts with an empty database, the data of the external server is not migrated.
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

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

```powershell
& "C:\Program Files\PostgreSQL\18\bin\pg_ctl.exe" -D "$env:USERPROFILE\.csdm\postgres\data" stop
```

</TabItem>
<TabItem value="macos" label="macOS">

```bash
/Library/PostgreSQL/18/bin/pg_ctl -D ~/.csdm/postgres/data stop
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
/usr/lib/postgresql/18/bin/pg_ctl -D ~/.config/csdm/postgres/data stop
```

</TabItem>
</Tabs>

### Step 2: Create the new database

1. Start the application, the connection screen shows the version error.
2. Click on `Delete data and start from scratch` and confirm.
3. The application connects to a new empty database, quit it **completely**.

### Step 3: Import the data into the new database

The new PostgreSQL server is bundled with the application, its programs (`pg_ctl`, `postgres`…) are in the
`resources/static/postgres/bin` folder of the application installation folder. `psql` is not bundled, use the one of
the version installed in step 1:

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

:::info
`pg_dump` and `psql` are not bundled with the application. Install the PostgreSQL command line tools of the same major
version as the server or newer: on Windows and macOS with the
[PostgreSQL installers](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) (only the
`Command Line Tools` component is needed), on Linux with your distribution packages (e.g. `postgresql-client`).
:::

```bash
pg_dump -h host -p port -U username -d db_name > backup.sql
```

Example with the [embedded database](#embedded-database), the application must be running:

```bash
# Windows
pg_dump -h 127.0.0.1 -p 25432 -U csdm -d csdm > backup.sql
# macOS
pg_dump -h ~/.csdm/postgres -p 5432 -U csdm -d csdm > backup.sql
# Linux
pg_dump -h ~/.config/csdm/postgres -p 5432 -U csdm -d csdm > backup.sql
```

Example with an external PostgreSQL server using the default values:

```bash
pg_dump -h 127.0.0.1 -p 5432 -U postgres -d csdm > backup.sql
```

Positions take a lot of space, you can exclude them from the backup using the `--exclude-table-data` option:

```bash
pg_dump -h host -p port -U username -d db_name --exclude-table-data='*positions*' > backup.sql
```

See the [official documentation](https://www.postgresql.org/docs/current/app-pgdump.html) for advanced usage.

## Importing the database

You can import the database using `psql`, the backup must be imported into a fresh database.

### With an external server

```bash
psql -h host -p port -U username -d postgres -c "DROP DATABASE IF EXISTS db_name;" -c "CREATE DATABASE db_name;"
psql -h host -p port -U username -d db_name -f backup.sql
```

Example with the default values:

```bash
psql -h 127.0.0.1 -p 5432 -U postgres -d postgres -c "DROP DATABASE IF EXISTS csdm;" -c "CREATE DATABASE csdm;"
psql -h 127.0.0.1 -p 5432 -U postgres -d csdm -f backup.sql
```

### With the embedded server

The database can't be replaced while the application is connected to it, you have to start the
[embedded database](#embedded-database) server yourself while the application is closed. The application must have
connected to the embedded database at least once so that its data folder exists.

:::warning
Make sure the application is **completely closed** (quit it from the tray/status bar menu) before running the commands
below.
:::

1. Start the server with the `pg_ctl` program bundled with the application, on a port that is not in use:

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">

```powershell
& "$env:LOCALAPPDATA\Programs\CS Demo Manager\resources\static\postgres\bin\pg_ctl.exe" -D "$env:USERPROFILE\.csdm\postgres\data" -o "-c listen_addresses=127.0.0.1 -c port=5433" -l "$env:USERPROFILE\.csdm\postgres\import.log" start
```

</TabItem>
<TabItem value="macos" label="macOS">

```bash
"/Applications/CS Demo Manager.app/Contents/Resources/static/postgres/bin/pg_ctl" -D ~/.csdm/postgres/data -o "-c listen_addresses=127.0.0.1 -c port=5433" -l ~/.csdm/postgres/import.log start
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
"/opt/CS Demo Manager/resources/static/postgres/bin/pg_ctl" -D ~/.config/csdm/postgres/data -o "-c listen_addresses=127.0.0.1 -c port=5433" -l ~/.config/csdm/postgres/import.log start
```

If you use the AppImage, `pg_ctl` is in the `resources/static/postgres/bin` folder where the AppImage is extracted.

</TabItem>
</Tabs>

2. Replace the database and import the backup, the password is the content of the `password` file of the `postgres`
   folder:

```bash
psql -h 127.0.0.1 -p 5433 -U csdm -d postgres -c "DROP DATABASE csdm;" -c "CREATE DATABASE csdm;"
psql -h 127.0.0.1 -p 5433 -U csdm -d csdm -f backup.sql
```

3. Stop the server by running the same `pg_ctl` command as in step 1 with `stop` instead of the options and `start`, for
   example on Windows:

```powershell
& "$env:LOCALAPPDATA\Programs\CS Demo Manager\resources\static\postgres\bin\pg_ctl.exe" -D "$env:USERPROFILE\.csdm\postgres\data" stop
```

4. Start the application, it connects to the imported data and runs the pending migrations if any.

## Position tables

Since version 3.21, positions are stored in a packed binary format to reduce the database size and speed up reading
them. The following tables share this format:

| Table                     | 1 row per              | Used by                             |
| ------------------------- | ---------------------- | ----------------------------------- |
| `player_positions`        | player and round       | [2D viewer](/docs/guides/2d-viewer) |
| `grenade_positions`       | grenade projectile     | [2D viewer](/docs/guides/2d-viewer) |
| `inferno_positions`       | inferno (molotov fire) | [2D viewer](/docs/guides/2d-viewer) |
| `chicken_positions`       | chicken and round      | [2D viewer](/docs/guides/2d-viewer) |
| `hostage_positions`       | hostage and round      | [2D viewer](/docs/guides/2d-viewer) |
| `player_position_samples` | player and round       | **Positions** event of the heatmaps |

The tables used by the 2D viewer are filled when the match is analyzed with positions enabled in the **Analyze**
settings, or else the first time the match is opened in the 2D viewer. The `player_position_samples` table is always
filled when the match is analyzed.

The `Delete positions` option described above deletes only the tables used by the 2D viewer.

This section describes how these tables are laid out and the functions available to read them.  
See the [SQL export](/docs/guides/export) guide for ready-to-use queries.

### Layout

Instead of one row per tick, each row holds the whole timeline of an entity in `bytea` columns that are **parallel
arrays**: the value at index `i` of a column is the value at `ticks[i]`.

```
index       | 0     | 1     | 2
ticks       | 1     | 2     | 3
x           | 100   | 120   | 145
y           | 50    | 52    | 55
is_ducking  | false | false | true
```

Values are packed as **big-endian** binary:

| Kind    | Size per value | Used for                                  |
| ------- | -------------- | ----------------------------------------- |
| int32   | 4 bytes        | ticks and integers (health, money, side…) |
| float32 | 4 bytes        | coordinates and decimals (x, y, z, yaw…)  |
| boolean | 1 byte         | `1` for true, `0` for false               |

Values that rarely change are stored **only when they change**, with their own ticks column (for example `state_ticks`
for player states). The value at a tick is the **last one whose tick is lower than or equal to it**: with the example
below, the player has 73 HP at tick 60.

```
index       | 0     | 1     | 2
state_ticks | 1     | 40    | 95
health      | 100   | 73    | 0
is_alive    | true  | true  | false
```

### Columns

#### `player_positions`

Movements are stored for every tick of the round, states only when they change.

| Column                                                                                                                    | Type          | Description                                                                                |
| ------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------ |
| `match_checksum`, `round_number`, `player_steam_id`, `player_name`                                                        | regular       | Identify the row                                                                           |
| `ticks`                                                                                                                   | int32 array   | Ticks of the movement columns below                                                        |
| `x`, `y`, `z`, `yaw`, `flash_duration_remaining`                                                                          | float32 array | Movement, parallel to `ticks`                                                              |
| `is_ducking`, `is_airborne`                                                                                               | boolean array | Movement, parallel to `ticks`                                                              |
| `state_ticks`                                                                                                             | int32 array   | Ticks of the state columns below, one entry per state change                               |
| `side`, `money`, `health`, `armor`                                                                                        | int32 array   | State, parallel to `state_ticks`. `side` is `2` for terrorists, `3` for counter-terrorists |
| `is_alive`, `has_helmet`, `has_bomb`, `has_defuse_kit`, `is_scoping`, `is_defusing`, `is_planting`, `is_grabbing_hostage` | boolean array | State, parallel to `state_ticks`                                                           |
| `active_weapon_name`, `equipments`, `grenades`, `pistols`, `smgs`, `rifles`, `heavy`                                      | `text[]`      | State, parallel to `state_ticks`. Weapon lists are comma-separated                         |

#### `grenade_positions`, `chicken_positions`, `hostage_positions`

A position is stored only when the entity moves. The last tick is when the entity disappeared or the round ended.

| Column        | Type          | Description                                                                       |
| ------------- | ------------- | --------------------------------------------------------------------------------- |
| `ticks`       | int32 array   | Ticks of the position columns below                                               |
| `x`, `y`, `z` | float32 array | Position, parallel to `ticks`                                                     |
| `state_ticks` | int32 array   | `hostage_positions` only: ticks of the hostage state changes                      |
| `states`      | int32 array   | `hostage_positions` only: hostage state, parallel to `state_ticks` (values below) |

`grenade_positions` also has regular columns identifying the projectile (`grenade_id`, `projectile_id`,
`grenade_name`) and its thrower at the time of the throw (`thrower_steam_id`, `thrower_name`, `thrower_side`,
`thrower_team_name`, `thrower_velocity_x`, `thrower_velocity_y`, `thrower_velocity_z`, `thrower_yaw`,
`thrower_pitch`).

Hostage state values: `0` idle, `1` being untied, `2` getting picked up, `3` being carried, `4` following player, `5`
getting dropped, `6` rescued, `7` dead.

#### `inferno_positions`

An inferno never moves, only the shape of its fire changes.

| Column                                          | Type        | Description                                                                                                     |
| ----------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `unique_id`, `thrower_steam_id`, `thrower_name` | regular     | Identify the inferno and its thrower                                                                            |
| `x`, `y`, `z`                                   | `real`      | Position of the inferno                                                                                         |
| `ticks`                                         | int32 array | Ticks of the convex hull changes                                                                                |
| `convex_hulls_2d`                               | `text[]`    | 2D shape of the fire as a list of points `"x1,y1,x2,y2,..."`, parallel to `ticks`. Empty when no fire is active |

#### `player_position_samples`

The position of each alive player is stored once per second, from the end of the freeze time to the end of the round.
Matches analyzed with a version older than 3.21 have no samples until they are analyzed again.

| Column                                              | Type          | Description                                                           |
| --------------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| `match_checksum`, `round_number`, `player_steam_id` | regular       | Identify the row                                                      |
| `side`                                              | regular       | Side of the player, `2` for terrorists and `3` for counter-terrorists |
| `ticks`                                             | int32 array   | Ticks of the samples                                                  |
| `x`, `y`, `z`                                       | float32 array | Position, parallel to `ticks`                                         |

### Helper functions

PostgreSQL cannot read these binary values natively, so CS:DM adds the following functions to the database:

| Function                    | Returns     | Description                                                 |
| --------------------------- | ----------- | ----------------------------------------------------------- |
| `int32_be_array(column)`    | `integer[]` | Decodes a whole int32 column (`ticks`, `health`…)           |
| `float32_be_array(column)`  | `real[]`    | Decodes a whole float32 column (`x`, `y`…)                  |
| `bool_array(column)`        | `boolean[]` | Decodes a whole boolean column (`is_ducking`, `is_alive`…)  |
| `float32_be(column, index)` | `real`      | Decodes a single float32 value at the given 0-based `index` |

The `*_array` functions are the fastest way to read many values because the column is decompressed once.  
`float32_be()` is faster when you only need one or a few values of a row.

:::tip
To read a single int32 value such as a tick, compare the raw bytes with `int4send()`, which produces the same big-endian
format: `substring(ticks FROM i * 4 + 1 FOR 4) = int4send(15000)`.  
A single boolean value is read with `get_byte(is_ducking, i) = 1`.
:::
