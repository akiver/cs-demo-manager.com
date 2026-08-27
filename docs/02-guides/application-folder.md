---
title: Application folder
sidebar_position: 14
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The application folder is where CS Demo Manager stores its data, such as:

- The [settings file](/docs/guides/settings) `settings.json`
- The [log files](/docs/guides/logs) in the `logs` subfolder
- The daemon discovery file `daemon.json` (see the [architecture documentation](/docs/development/architecture))

## Location

<Tabs groupId="os" queryString>
<TabItem value="windows" label="Windows">
`%USERPROFILE%\.csdm`
</TabItem>
<TabItem value="macos" label="macOS">
`~/.csdm`
</TabItem>
<TabItem value="linux" label="Linux">
`$XDG_CONFIG_HOME/csdm` if the `XDG_CONFIG_HOME` environment variable is set, otherwise `~/.config/csdm`
</TabItem>
</Tabs>

:::note
When running the application in [development](/docs/development/setup), the folder name is suffixed with `-dev` (`.csdm-dev` on Windows/macOS, `csdm-dev` on Linux) so it doesn't conflict with a production installation.
:::
