---
title: CS2 demo playback UI
slug: cs2-demo-playback-ui
sidebar_position: 2.4
---

When CS2 is started from CS:DM, the application adds its own demo playback UI to the game. It's drawn on top of the
game by the [CS:DM plugin](/docs/development/cs-server-plugin).

It's hidden by default, type `csdm_ui` in the game console to toggle it, or bind the command to a key as explained in
the [CS2 console commands](/docs/guides/cs2-console-commands) guide.

![CS2 demo playback UI](/img/documentation/guides/cs2-demo-playback-ui/playback-ui.jpg)

The UI is made of:

- A **playback bar** at the bottom of the screen with the controls, a match timeline and a round timeline. Each
  timeline can be hidden from the [settings menu](#settings-menu).
- A **pressed keys overlay** showing the keyboard and mouse buttons pressed by the spectated player.
- A **voice indicator overlay** showing who is talking.

Hovering a control shows a tooltip explaining what it does, and all of them can be
[moved and resized](#moving-and-resizing).

:::note
The timelines, the rounds list and the kill, highlight and lowlight navigation require the demo to have been
[analyzed](/docs/guides/demos-analysis) with CS:DM. The other controls (pause, frame stepping, skip, speed, loop,
go to a time, players, cameras and voices) work with any demo.
:::

## Playback bar

![Playback bar](/img/documentation/guides/cs2-demo-playback-ui/toolbar.png)

From left to right:

1. **Drag handle**, drag it to move the bar anywhere on the screen. Dragging any empty area of the bar works too.
2. **Pause / resume**.
3. **Stop**, ends the playback. The bar then shows a single button to play the demo again.
4. **Previous frame**, available while playback is paused to step frame by frame.
5. **Skip back** and **skip forward**, the number of seconds is configurable in the [settings menu](#settings-menu).
6. **Next frame**, available while paused.
7. **Loop**, click it to set the loop start at the current time, click it again to set the end. The loop is drawn on the
   timelines and the playback repeats between the two points until you click it a third time to clear it.
8. **Video sequence**, click it to start a [video sequence](/docs/guides/video#sequence) at the current time and click
   it again to end it. The sequence is added to the video page of the match in CS:DM, with the spectated player as the
   camera focus. CS:DM must be running.
9. **Time**, the elapsed and total time of the demo with the current tick below. Click it to open the
   [go to menu](#go-to-menu).
10. **Round clock**, the time left in the round, the freeze time or the time before the bomb explodes.
11. **Speed slider**, the playback speed from slow motion to fast forward.
12. **Spectated player**, the arrows cycle through the players and the name opens the [players menu](#players-menu).
13. **Lock**, locks the camera on the spectated player so they are spectated again when they respawn, e.g. at the round
    after they died. Switching to another player while the locked one is alive moves the lock to them.
14. **Voices**, opens the [voice menu](#voice-menu).
15. **Cameras**, opens the [cameras menu](#cameras-menu).
16. **Settings**, opens the [settings menu](#settings-menu).

### Match timeline

![Match timeline](/img/documentation/guides/cs2-demo-playback-ui/match-timeline.jpg)

The match timeline shows the whole demo. It can be hidden with the **Match timeline** setting or the
`csdm_match_timeline` convar.

- The **rounds**, with a strip in the color of the team that won each one.
- The **bomb plants** as red marks and the **defuses** as green marks.
- The **kills** (cross) and **deaths** (circle) of the spectated player above the rounds, in the color of the killer's
  team.
- The **loop** and the **video sequence** being recorded, when there is one.

Hover the timeline to see the round and the time at the cursor, the score, both teams' buy types and how the round
ended, then click to seek there.

### Round timeline

![Round timeline](/img/documentation/guides/cs2-demo-playback-ui/round-timeline.jpg)

The round timeline shows the current round, with a dot in the color of the team that won it after the round number.
The freeze time and the time after the round ended are darkened, and the white line is the current time. It can be
hidden with the **Round timeline** setting or the `csdm_round_timeline` convar.

The kills of the round are drawn in the color of the killer's team: a circle when the spectated player or a teammate
died, a cross for the other kills. The kills and deaths of the spectated player are bigger than the others, a dot above
an icon marks a headshot and a dash below it a wallbang. With the **Spectated player only** setting, only the kills and
deaths of the spectated player are shown.

Hover a kill to see the killer, the weapon, the victim and the time, then click it to seek a few seconds before it.

The buttons on each side of the timeline navigate the demo:

- **Previous / next round**.
- **Previous / next highlight**, a highlight being the kills of a player grouped in a sequence, seeking to one
  spectates that player. Right-click for the lowlights (the deaths). With the **Spectated player only** setting, only
  the highlights and lowlights of the spectated player count.
- **Previous / next kill**, of the spectated player, or of anyone when no player is spectated.

With the **Follow the killer** setting, seeking to a kill spectates the killer.

### Go to menu

![Go to menu](/img/documentation/guides/cs2-demo-playback-ui/goto-menu.png)

Click the time to open it. Type a time as `minutes:seconds` or a tick and press `Enter` or **GO**, or click a round
number to seek to its start. The rounds are laid out by halves with a strip in the color of their winner, the current
one is highlighted, and hovering a round shows its summary.

### Players menu

![Players menu](/img/documentation/guides/cs2-demo-playback-ui/players-menu.png)

Click the name of the spectated player to open it. The players are grouped by team and the dead ones are greyed out,
click a player to spectate them. The number next to each player is the keyboard key that spectates them.

### Cameras menu

![Cameras menu](/img/documentation/guides/cs2-demo-playback-ui/cameras-menu.png)

Lists the cameras saved for the map from the [cameras](/docs/guides/cameras) page, numbered and with their color.
Click one to move the view to it, and **Back to players** to follow the players again. The number is the one the
`csdm_camera` command accepts.

### Voice menu

![Voice menu](/img/documentation/guides/cs2-demo-playback-ui/voice-menu.png)

Mute or unmute the voice of each player with its checkbox, of a whole team with the **ALL** and **NONE** buttons next
to the team name, or of everyone with the buttons at the top. The **Others** group holds the coaches and spectators. **Show who is talking** toggles the [voice indicator](#voice-indicator).

### Settings menu

![Settings menu](/img/documentation/guides/cs2-demo-playback-ui/settings-menu.png)

Each setting matches a convar, see the [convars](/docs/guides/cs2-console-commands#convars) list for the details and
defaults.

| Setting               | Convar                                  | Description                                                                                                   |
| --------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| X-Ray                 | `spec_show_xray`                        | Shows the players through the walls.                                                                          |
| Pressed keys          | `csdm_buttons_overlay`                  | Shows the [pressed keys overlay](#pressed-keys-overlay).                                                      |
| Match timeline        | `csdm_match_timeline`                   | Shows the [match timeline](#match-timeline).                                                                  |
| Round timeline        | `csdm_round_timeline`                   | Shows the [round timeline](#round-timeline).                                                                  |
| Spectated player only | `csdm_round_timeline_spectated_only`    | Limits the round timeline and the highlights navigation to the spectated player.                              |
| Follow the killer     | `csdm_follow_killer`                    | Spectates the killer after seeking to a kill.                                                                 |
| Tooltips              | `csdm_overlay_tooltips`                 | Explains the controls when hovering them.                                                                     |
| Auto-hide             | `csdm_playback_overlay_auto_hide_delay` | Hides the bar while the mouse is idle, the slider sets the delay.                                             |
| Skip length           | `csdm_playback_skip_seconds`            | How far the skip buttons go back or forward, 5, 10 or 30 seconds. The convar accepts any value from 1 to 300. |
| Background opacity    | `csdm_overlay_background_opacity`       | How much of the game shows through the UI.                                                                    |
| Size                  | `csdm_overlay_scale`                    | Size of the UI, on top of its scaling to the resolution.                                                      |

## Pressed keys overlay

![Pressed keys overlay](/img/documentation/guides/cs2-demo-playback-ui/buttons-overlay.png)

Shows the keyboard and mouse buttons pressed by the spectated player (movement, jump, duck, mouse buttons…) and their current speed in units per second.

Enable it from the **Pressed keys** setting or with `csdm_buttons_overlay 1`, and drag it to move it.

## Voice indicator

![Voice indicator](/img/documentation/guides/cs2-demo-playback-ui/voice-indicator.png)

Shows the name of the players currently talking, in their team color. It's enabled by default, disable it with
`csdm_voice_indicator 0`, and drag it to move it.

## Moving and resizing

The playback bar, the pressed keys overlay and the voice indicator can be dragged with the mouse from any area that
isn't a control, the bar also has a drag handle at its left. The **Size** and **Background opacity** settings apply to
all of them.

The settings, the positions and the muted players are saved in the file `game/csgo/cfg/csdm_settings.json` of the CS2
folder and restored on the next playback. Delete the file to put everything back to its defaults.

:::tip
Every action of the UI is also available as a console command that you can bind to a key, see the
[CS2 console commands](/docs/guides/cs2-console-commands) guide.
:::
