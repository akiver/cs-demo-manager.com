---
title: 'FAQ'
hide_title: true
---

## I encountered a bug or have a suggestion

Bug reports, suggestions or feature requests have to be submitted on [GitHub](https://github.com/akiver/cs-demo-manager/issues/new/choose).

## The application doesn't start or crash on startup

While it should happen on rare occasions, if the application keeps crashing on startup, you should try to delete the application
configuration folder and restart the application.

The configuration folder named `.csdm` is in your user directory, i.e. `C:\Users\USERNAME\.csdm` on Windows and `~/.csdm` on Linux/macOS.

## Does it work with POV demos?

Currently only with **CSGO** demos, but keep in mind that:

- Demos must have been recorded while playing on a server from a supported provider
- It's important to start recording before the match starts to get the best results

## Does it work with demos split in multiple files?

No, demos have to be a single file.

## Is it VAC safe?

The application always starts Counter-Strike with the launch parameter `-insecure` which prevents you to connect to any
server protected by VAC.

## Is there a mobile application?

No.

## I have visual glitches

If you encounter visual issues like in [this issue](https://github.com/akiver/cs-demo-manager/discussions/1055), try to disable hardware acceleration from the **UI application settings**.

## Anti-virus reports

CS:DM ships with four executables: [`cs-demo-manager.exe`](https://github.com/akiver/cs-demo-manager), [`csda.exe`](https://github.com/akiver/cs-demo-analyzer), [`csgove.exe`](https://github.com/akiver/csgo-voice-extractor), and [`boiler-writter.exe`](https://github.com/akiver/boiler-writter). Some antivirus may flag one or more of these as malicious (false positives).

The most common reason is that the binaries aren’t code‑signed: they don’t include a digital signature that verifies the publisher and the file’s integrity. Without that signature, Windows and antivirus may classify them as “Unknown publisher” and display warnings or block execution.  
Code signing certificates are costly and the project isn’t company‑backed, that's why the app is currently unsigned.

As long as you download the installer from [GitHub](https://github.com/akiver/cs-demo-manager/releases/latest) you are safe - the binaries are built and uploaded from a [remote server](https://github.com/akiver/cs-demo-manager/blob/main/.github/workflows/publish.yml).  
Since the app is open-source, you could also [build it from the sources](/docs/development/setup) if you prefer.
