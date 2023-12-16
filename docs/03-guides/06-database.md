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
