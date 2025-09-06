---
title: 2D viewer
slug: 2d-viewer
---

## Introduction

CS:DM lets you watch demos in 2D.  
Open it from the **"2D Viewer"** tab on a match page.

![2D Viewer](/img/documentation/guides/2d-viewer/2d-viewer.png)

## Radar levels

If a map includes a lower radar image, it is drawn beneath the upper radar.  
You can move the lower radar and adjust its opacity from the popover menu that appears when you hover over the radar button in the playback bar.

![Radar levels](/img/documentation/guides/2d-viewer/radar-button.png)

Use the `x` and `y` sliders to adjust the lower radar's position, and the `opacity` slider to change its transparency. The position is saved per map.  
For example, on `de_nuke`, it might look like this:

![Radar position](/img/documentation/guides/2d-viewer/radar-position.png)

## Drawing on the radar

Enable the **drawing mode** to draw on the radar.  
Press `D` to toggle it, or hover the drawing button in the playback bar to open the popover where you can configure tools and toggle the mode.

![Drawing on the radar](/img/documentation/guides/2d-viewer/drawing.png)

When the drawing button is red, drawing mode is active.  
There are two tools: the pen and the eraser. Click and drag on the radar to draw or erase.  
While in drawing mode, hold `Space` to temporarily pan/zoom, and press `ESC` to exit.

:::tip
Using the keyboard shortcuts can greatly enhance your workflow. Check the [Keyboard shortcuts](#keyboard-shortcuts) section for available shortcuts.
:::

## Audio playback

You can play an audio file alongside the demo in the 2D viewer.  
The main purpose of this feature is to listen to team communication during demo playback.

CS:DM automatically loads an audio file if one is located next to the demo file.
For example, for a demo named `demo.dem`, it looks for `demo.mp3`, `demo.wav`, etc., in the same folder.

:::tip
Supported audio formats, in order of priority, are: `mp3`, `wav`, `flac`, `aac`, `m4a`, and `ogg`.
:::

Click the **"Audio"** button in the playback bar to change the audio file and adjust the playback offset, as shown below.

![Audio button](/img/documentation/guides/2d-viewer/audio-button.png)

If no audio file is loaded, the following dialog appears when you click the **"Audio"** button:

![Audio dialog](/img/documentation/guides/2d-viewer/audio-dialog.png)

1. The **"Generate audio file"** button extracts players' voice chat from the demo and generates an audio file next to it. The audio loads automatically after generation.
2. The **"Choose audio file"** button lets you select an audio file from your filesystem.

:::tip
We recommend using the **"Generate audio file"** button to create the demo's audio file.  
Since the generated audio file matches the demo's length, you won't need to adjust the playback offset.  
If you load an audio file with a different length, you'll need to adjust the playback offset manually.
:::

:::danger
Some demos may not contain voice data; for example, Valve Matchmaking demos do not.
:::

When an audio file is loaded, clicking the **"Audio"** button opens this menu:

![Audio controls](/img/documentation/guides/2d-viewer/audio-controls.png)

Use this menu to synchronize audio playback with demo playback.  
Seek the audio to the position that matches the current demo playback position, then click **"Set as current position"**.  
This updates the audio **playback offset**—the number of seconds the audio playback is offset from the demo playback.

1. The waveform of the audio file, with controls to play, pause, seek, and adjust the volume.
2. The **"Set as current position"** button sets the current audio playback position as the offset for demo playback.
3. The **"Reset position"** button resets the offset to zero seconds.
4. The **"Unload audio"** button unloads the current audio file.
5. Displays the current offset in seconds.

## Keyboard shortcuts

| Shortcut                     | Action              | Context      |
| ---------------------------- | ------------------- | ------------ |
| `Arrow left`                 | Decrease speed      |              |
| `Arrow right`                | Increase speed      |              |
| `Space`                      | Play/Pause          |              |
| `Space` (hold)               | Pan/Zoom            | Drawing mode |
| `D`                          | Toggle drawing mode |              |
| `F`                          | Toggle fullscreen   |              |
| `ESC`                        | Exit drawing mode   | Drawing mode |
| `CTRL`/`CMD` + `Z`           | Undo                | Drawing mode |
| `CTRL`/`CMD` + `SHIFT` + `Z` | Redo                | Drawing mode |
| `CTRL`/`CMD` + `X`           | Clear drawing       | Drawing mode |
