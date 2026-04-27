---
title: Settings
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## File location

The settings file is a JSON file where the application stores its configuration, you can find it in the following location:

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">
`%USERPROFILE%\.csdm\settings.json`
</TabItem>
<TabItem value="macos" label="macOS">
`~/.csdm/settings.json`
</TabItem>
<TabItem value="linux" label="Linux">
`$XDG_CONFIG_HOME/csdm/settings.json` if the `XDG_CONFIG_HOME` environment variable is set, otherwise `~/.config/csdm/settings.json`
</TabItem>
</Tabs>

## Import and export

If you plan to reinstall your OS or move to a new computer, you can keep your settings and database by following these steps:

1. Keep your demo files where they are (or back them up if that disk will be wiped).
2. Back up [the settings file](#file-location) so you can restore it later.
3. [Export your database](/docs/guides/database#exporting-the-database).
4. Reinstall your OS, then install CS:DM on the new system and launch it once (so it generates the default settings file).
5. [Import the database backup](/docs/guides/database#importing-the-database).
6. Restore [the settings file](#file-location) (overwrite the file created by the new install).

## Third-party API keys

CS:DM uses API keys shared between all users to retrieve data from third-party HTTP APIs.  
These APIs have a rate limit, which means that if too many requests are sent with the same key, the API will return an error (HTTP 529 status code).

You can generate and use custom API keys to avoid this problem.

### Using a custom Steam API key

1. Generate a key from [Steam](https://steamcommunity.com/dev/apikey)
2. From the app, go to **Settings** -> **Integrations**
3. Copy/paste your key in the **Steam API key** text field
4. Click on **Apply**
5. If you don't have any error message, your key will be used for the next requests

### Using a custom FACEIT API key

1. Generate a client side API key from [FACEIT](https://developers.faceit.com/docs/auth/api-keys)
2. From the app, go to **Settings** -> **Integrations**
3. Copy/paste your key in the **FACEIT API key** text field
4. Click on **Apply**
5. If you don't have any error message, your key will be used for the next requests
