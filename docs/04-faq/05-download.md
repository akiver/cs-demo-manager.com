---
title: 'Download'
hide_title: true
---

## Why FACEIT downloads are disabled?

FACEIT restricted demos download through a [private API](https://docs.faceit.com/getting-started/Guides/download-api)
that prevents us from downloading demos from CS:DM.  
A request has been submitted to allow CS:DM. In the meantime, you have to download demos from your browser.

## My last demos are not downloaded automatically?

- Go to the _Download_ page and verify that the demo links are not expired.
- Ensure at least one option to download demos at application startup or in the background is enabled.
- The CS:DM icon must be visible in the system tray. If it's not, the background process is not running.
- Steam must be running and connected to a Steam account for Valve demos.

## My Steam status is "in game" when I click on download?

You appear as playing CS2 for a few seconds because the application communicates with the Steam Game Coordinator to
retrieve your last matches.

## How can I download demos of my other accounts?

The application downloads demos of the current Steam account logged on.  
You have to switch to your other accounts on Steam.

## I can only see my last 8 games?

The message from the Steam Game Coordinator contains only the last 8 matches.  
It's the same behavior as in-game.
