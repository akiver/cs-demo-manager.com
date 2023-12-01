---
title: 'General'
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
