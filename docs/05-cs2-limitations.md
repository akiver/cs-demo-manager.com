---
title: CS2 limitations
sidebar_label: CS2 limitations
slug: /cs2
description: Known limitations of CS:DM with CS2
---

Because CS2 has missing console commands or different behaviors compared to CSGO, some features are not yet available or partially available with CS2.  
This page lists the current limitations of CS:DM with CS2.

## Demo playback

- To avoid restarting CSGO each time you want to watch a demo, the application uses the `-netconport` launch option to communicate with CSGO.  
  Unfortunately, this launch option in CS2 works only on Windows when the **Workshop tools** are installed and the launch parameters `-tools` is set.  
  As a workaround, CS:DM uses a "**server plugin**" loaded when the game is launched that should be transparent for the user. You can find more information about this plugin [here](/docs/development/cs2-server-plugin).
- To focus the camera on a player, CS:DM uses the `spec_player_by_accountid` command with CS:GO.  
  This command is not yet available in CS2. As a (hopefully temporary) workaround, the plugin send keyboard inputs to the game to focus the camera on the player.  
  **It works only on Windows and the game window must be focused** (You can still manually focus the camera on the player for Linux users).
- Watching a player "as a suspect" is not available because the `anonsuspect` argument of the `playdemo` command is not yet available in CS2.
- Watching a specific round from the **Player's round performance** section in the **Downloads** page is not available because the `startround:number_number` argument of the `playdemo` command is not yet available in CS2.

## Video generation

- Video generation is currently available only on Windows because the `startmovie` command is not "officially available" yet and requires HLAE to work.
- Death notice edition (players name, duration...) is not available because **HLAE** doesn't support it yet for CS2.
- The **Focus camera on player** feature requires to keep the game window focused during recording and is available only on Windows.

## Analyze

- The player's property that indicates when a player started/stopped inspecting his weapon doesn't update in CS2 demos. As a result, these stats are not available.
