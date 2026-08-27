---
title: 'Debugging'
sidebar_position: 3
---

## WebSocket server (daemon)

The daemon is a detached process with its `stdio` ignored, so its console output is **not** visible in the terminal running `vp run dev`.  
In development, the daemon starts with its `Node.js` inspector listening on port `9229`, so you can attach a debugger to it:

1. Open `chrome://inspect` in Chrome.
2. Click **Open dedicated DevTools for Node**.
3. In the **Connection** tab, click **Attach** next to the daemon target (`out/server.js` on `localhost:9229`).

The DevTools will show the daemon's console output, set breakpoints, inspect network requests, etc.

To inspect what happens from the very beginning (e.g. network requests made at startup), set the `CSDM_DAEMON_INSPECT_WAIT` environment variable - the daemon will pause until a debugger attaches:

```bash
CSDM_DAEMON_INSPECT_WAIT=1 vp run dev
```

All processes also write their logs to the [application log file](/docs/guides/logs#log-file-locations), each line prefixed with the process name.

## Renderer process

In development, Electron starts with `--remote-debugging-port=9222`, so a debugger can attach to the renderer process on this port.  
You can also simply open the Chrome DevTools from the application window.

## VS Code

The repository ships with launch configurations in `.vscode/launch.json`.  
The recommended configuration is **Debug app + renderer**, which starts the application and attaches to all processes.

| You want breakpoints in…                | Configuration               |
| --------------------------------------- | --------------------------- |
| Everywhere                              | **Debug app + renderer**    |
| Electron main process or server process | **Debug app**               |
| Renderer process (UI)                   | **Attach to renderer**      |
| Server process (daemon)                 | **Attach to daemon**        |
| CLI command                             | **Debug CLI**               |
| A test file                             | **Debug current test file** |

The **Debug** configurations launch the process themselves (and auto-attach to the child processes it spawns), while the **Attach** configurations connect to an application that is already running (from **Debug app** or `vp run dev`).
