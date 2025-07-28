---
title: 2D viewer
slug: 2d-viewer
---

## Introduction

CS:DM allows you to watch your demos in 2D.  
It's accessible from the **"2D Viewer"** tab on a match page.

![2D Viewer](/img/documentation/guides/2d-viewer/2d-viewer.png)

## Audio playback

You can play an audio file along with the demo in the 2D viewer.  
The main purpose of this feature is to listen to team communication during demo playback.

The application automatically loads an audio file if one is located next to the demo file.
For example, if you have a demo named `demo.dem`, the application will look for an audio file named `demo.mp3`, `demo.wav`, etc. next to it.

:::tip
Supported audio formats, in order of priority, are: `mp3`, `wav`, `flac`, `aac`, `m4a`, and `ogg`.
:::

You can change the audio file and adjust the playback offset by clicking the **"Audio"** button in the playback bar, as shown in the screenshot below.

![Audio button](/img/documentation/guides/2d-viewer/audio-button.png)

If there is no audio file loaded, the following dialog will appear when you click the **"Audio"** button:

![Audio dialog](/img/documentation/guides/2d-viewer/audio-dialog.png)

1. The button **"Generate audio file"** extracts players' voices from the demo and generates an audio file next to the demo. The audio will be loaded automatically after generation.
2. The button **"Choose audio file"** allows you to select an audio file from your filesystem.

:::tip
It's recommended to use the **"Generate audio file"** button to create the demo's audio file.  
Since the generated audio file will match the demo's length, you won't need to adjust the playback offset.  
If you load an audio file with a different length, you will have to adjust the playback offset manually.
:::

:::danger
Some demos may not contain audio data; for example, demos from the Valve Matchmaking system do not.
:::

When an audio file is loaded, the following menu will appear when you click the **"Audio"** button:

![Audio controls](/img/documentation/guides/2d-viewer/audio-controls.png)

The main purpose of this menu is to synchronize audio playback with demo playback.  
To do this, seek through the audio to the position that matches the current demo playback position, then click the **"Set as current position"** button.  
This updates the audio **playback offset**—the number of seconds the audio playback is offset from the demo playback.

1. The waveform of the audio file, with controls to play, pause, seek, and adjust the volume.
2. The **"Set as current position"** button sets the current audio playback position as the offset for demo playback.
3. The **"Reset position"** button resets the offset to zero seconds.
4. The **"Unload audio"** button unloads the current audio file.
5. Displays the current offset in seconds.
