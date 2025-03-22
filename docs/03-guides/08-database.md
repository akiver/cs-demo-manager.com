---
title: Database
---

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

To use a remote database, you have to set the IP address, port, and credentials of the database with the one of your
remote database.

If you are already connected to a database, you must first disconnect from it by clicking on the `Disconnect` button in
`Settings` -> `Database`.

:::warning
**Only** the **psql CLI** must be installed on your host machine when using a remote database!  
If you have a **PSQL binary not found** error, please follow this [guide](/docs/development/setup?os=windows#installing-psql)
to install **only** the `psql` CLI.
:::

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
