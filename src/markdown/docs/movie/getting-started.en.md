<a class="anchor" id="must-known"></a>

### Must know [#](/docs/movie/getting-started#must-known)

CSGO Demos Manager doesn't create videos the same way as application such as Fraps or Dxtory does.

As this feature is attended mainly for video editing, the best quality is required.

This is why the application uses the in-game `startmovie` command.

<br />

The `startmovie` command generates raw files which are composed of a lot of images (`.tga`) and an audio file (`.wav`).

The number of images depends of the framerate you chose and the duration of the sequence.

For example with a framerate set to `60` and a duration of `20` seconds, you will have `20 * 60 = 1200` images.

<p class="has-text-warning">
Raw files takes a lot of disk space, the application display how much space is required and warn you if the amount is greater than 30GB.
</p>

<br />

To define the interval which you want to record, you have to enter a `start tick` and an `end tick`.

Ticks are a unit of time used by the game, you can think of it like seconds for example.

How many ticks correspond to 1 second depends of the tickrate of the server.

For example, the tickrate of matchmaking servers is `64`, so `1 second` equals `64 ticks`.

<p class="has-text-warning">
Because it's easier for us humans to use seconds, the application allow you to edit the duration in seconds and convert automatically the start / end tick.
</p>

---

<a class="anchor" id="how-it-works"></a>

### How does it work? [#](/docs/movie/getting-started#how-it-works)

When you start a video generation, the following steps are done:

1. Create a `.vdm` file which describes actions during playback (gototick, startmovie...)
2. Create a `.cfg` file which contains the user's custom config
3. Start the game and play the demo
4. The `.vdm` force the playback to perform actions such as executing the `.cfg file`, start recording...
5. Start VirtualDub or FFmpeg to encode the video when the game is closed
6. Delete all files generated previously when the encoding is done

---

<a class="anchor" id="known-issues"></a>

### Known issues [#](/docs/movie/getting-started#known-issues)

Sometimes Steam may crash on CSGO launch, just restart it and it will work.

---

<a class="anchor" id="vd-ffmpeg"></a>

### What's the difference between VirtualDub and FFmpeg? [#](/docs/movie/getting-started#vd-ffmpeg)

[VirtualDub](http://www.virtualdub.org/) is used by the application only to generate uncompressed videos whereas [FFmpeg](https://www.ffmpeg.org/) generate a compressed x264 video.

---

<a class="anchor" id="why-vd"></a>

### Why not use only VirtualDub? [#](/docs/movie/getting-started#why-vd)

Because VirtualDub doesn't include codecs like x264 by default, you have to install it manually which is quiet annoying.

---

<a class="anchor" id="pov-demos"></a>

### Does it work with POV demos? [#](/docs/movie/getting-started#pov-demos)

Yes but you will not have the timeline.

You can add a comment to the demo to remember important ticks.

---

<a class="anchor" id="corrupted-demos"></a>

### Note about corrupted demos [#](/docs/movie/getting-started#corrupted-demos)

If a demo is corrupted, you can still generate videos but the timeline and required disk space calculation are not available.

---

<a class="anchor" id="csgo-compatibility"></a>

### CSGO compatibility [#](/docs/movie/getting-started#csgo-compatibility)

The movie feature works only with [CSGO 1.36.1.8](http://blog.counter-strike.net/index.php/2017/12/19817/) and after.

You can't use it with older branches.

---

<a class="anchor" id="howto-video"></a>

### How to (video) [#](/docs/movie/getting-started#howto-video)

[This video](https://www.youtube.com/watch?v=83anQLF9z18) shows how to generate a video with VirtualDub but it's the same process with FFmpeg.

You have to switch to FFmpeg by clicking on the toggle button at the top of the window if you want to use FFmpeg instead of VirtualDub.

