### Usecase

When using [VirtualDub](http://www.virtualdub.org/), the video is encoded with the VirtualDub uncompressed codec.

This is the recommended choice if you are going to edit the video.

You can use FFmpeg and set the quality to 0 (`-qp 0`) to generate a lossless video, but due to codecs variations, video editing Software will perform poorly rendering its preview.

---

### Options

Because VirtualDub is intended to generate uncompressed videos (in the application context), there is no need to have options related to VirtualDub.

---

### How does it work?

The application uses [VirtualDub scripting language](http://www.virtualdub.org/docs/vdscript.txt) to automated the video encoding.

Every time you start a video generation using VirtualDub, a script file named `csgodm.jobs` is created.

You can find it in the VirtualDub installation folder.

<br />
This script does the following:

1. Import the images files (`.tga`)
2. Import the audio file (`.wav`)
3. Set the video framerate
4. Set video / audio compression to uncompressed
5. Save as AVI file  

<br />
It basically perform the tasks that you used to do manually to generate the avi file.
