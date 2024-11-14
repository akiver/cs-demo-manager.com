---
title: CS2 limitations
sidebar_label: CS2 limitations
slug: /cs2
description: Known limitations of CS:DM with CS2
---

Because **CS2** has missing console commands or different behaviors compared to **CS:GO**, some features are not yet available or partially available with **CS2**.  
This page lists the current limitations of **CS:DM** with **CS2**.

:::danger
**CS2** is not available on **macOS** which means features that require the CS2 client will not be visible on macOS!
:::

## Demo playback

- Watching a player "as a suspect" is not available because the `anonsuspect` argument of the `playdemo` command is not yet available in CS2.
- Watching a specific round from the **Player's round performance** section in the **Downloads** page is not available because the `startround:number_number` argument of the `playdemo` command is not yet available in CS2.

## Analyze

- The player's property that indicates when a player started/stopped inspecting his weapon doesn't update in CS2 demos. As a result, these stats are not available.
