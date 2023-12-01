---
title: 'VAC tracker'
hide_title: true
---

## How often is the data updated?

Once a day, at application startup or in the background if the application is running.

:::warning
The main application window can be closed but if you fully quit the application from the system tray icon, the
background process will be stopped.
:::

## A player is VAC banned but he still plays

A VAC ban doesn't necessarily mean the player has been banned from Counter-Strike.  
The Steam API doesn't indicate which games a player has been banned from.

## I got a too many requests error

If you see an error **Steam API returned a 429 status code** it means that the Steam API key used by the application has reached its rate limit.  
That's why it's recommended to use your [own Steam API key](/docs/guides/third-party#using-a-custom-steam-api-key).
