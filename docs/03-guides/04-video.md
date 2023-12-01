---
title: Video
---

## Introduction

CS:DM allows you to generate videos and raw files (images and audio) from demos.  
The feature is accessible by clicking on the **Video** link from a match page.

You have to select one or more **sequences** (a part of the demo you want to record).  
You can then decide to merge all sequences into 1 video or generate 1 video per sequence.

## Compatibility

| OS      | CSGO | CS2 | Death notice edition (HLAE) | Encoding software |
| ------- | ---- | --- | --------------------------- | ----------------- |
| Windows | ✅   | ✅  | ⚠️ CS:GO only               | FFmpeg/VirtualDub |
| Linux   | ✅   | ❌  | ❌                          | FFmpeg            |
| macOS   | ✅   | -   | ❌                          | FFmpeg            |

About CS2 compatibility, see [CS2 limitations](/docs/cs2#video-generation) for details.

## How does it work?

To get the best result, CS:DM uses the game's `startmovie` command to record sequences.  
This command generates many images (**.tga**) and an audio file (**.wav**).

Once done, the application uses [FFmpeg](https://ffmpeg.org) or [VirtualDub](https://www.virtualdub.org) to generate the
video(s) from the raw files.

## Must know

The number of images depends on the framerate you chose and the total duration of the sequences.  
For example, with a framerate set to `60` and a duration of `20` seconds, you will have `20 * 60 = 1200` images.

:::warning
Raw files can take a lot of disk space. The application warns you if the amount exceeds 20GB.
:::

To define the interval which you want to record, you have to enter a start tick and an end tick.  
Ticks are a unit of time the game uses; you can think of it as seconds, for example.  
For CS2, 1 seconds correspond to `64` ticks, for CS:GO, it depends of server's tickrate (usually `64` or `128`).  
Because it's easier for humans to use seconds, the application allows you to edit the duration in seconds and convert
automatically to ticks.

## FAQ

See the [FAQ](/docs/faq/video) page.
