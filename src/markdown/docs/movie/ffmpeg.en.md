### Usecase

When using FFmpeg, the video is encoded with the x264 codec.

This is the recommended choice if you just want a ready to watch video.

---

### Options

![FFmpeg options](/images/docs/movie/ffmpeg-options.png)

#### Video quality

- Correspond to the x264 `-qp` parameter.
- Range is 0 to 51 with 0 the best (result in a lossless video).

#### Video framerate

- This is not the same as the one used for in-game recording (`host_framerate`).
- You can for example record at 300 fps but generate a 60 fps video.

#### Audio bitrate

- The audio is encoded with the [LAME MP3](http://lame.sourceforge.net/) encoder.
- Extra input parameters
- Additional input parameters passed to the FFmpeg CLI.
- This is for advanced usage, you can find all available options in the FFmpeg [documentation](https://www.ffmpeg.org/documentation.html).

#### Extra parameters

- Additional output parameters passed to the FFmpeg CLI.
- This is for advanced usage, you can find all available options in the FFmpeg [documentation](https://www.ffmpeg.org/documentation.html).

#### Command-line input

- This is the command that will be used to start FFmpeg.
- This is not editable, it's only for information.

#### How does it work?

- The application simply start FFmpeg with the correct parameters to generate the video from raw files.
