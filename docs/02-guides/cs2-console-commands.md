---
title: CS2 console commands
sidebar_position: 2.5
---

When CS2 is started from CS:DM, the application adds console commands and convars prefixed with `csdm_` to the game.  
They control the demo playback, the cameras, the voices and the [demo playback UI](/docs/guides/cs2-demo-playback-ui), and can be typed in the game console or
bound to a key.

They only exist in a game started from CS:DM. Type `help` followed by a command name in the console, `help csdm_ui`
for example, to print its help.

## Example CFG

Binding the commands to keys makes the navigation much faster than typing them, here is an example CFG that mixes the
CS:DM commands with the demo commands built into CS2:

```
// CS2 built-in demo commands
bind Space demo_togglepause
bind F2 demoui
bind x "toggle spec_show_xray 0 1"
bind c "toggle cl_drawhud 0 1"

// Speed, keypad 1 to 5 from slowest to fastest
bind kp_1 "demo_timescale 0.25"
bind kp_2 "demo_timescale 0.5"
bind kp_3 "demo_timescale 1"
bind kp_4 "demo_timescale 2"
bind KP_5 "demo_timescale 4"

// Players, the number keys 1 to 0 keep their default behavior and spectate the player with that number
bind n spec_next
bind b spec_prev
bind v spec_mode
bind f "toggle csdm_follow_killer 0 1"

// Panels
bind F5 csdm_ui
bind F8 "toggle csdm_buttons_overlay 0 1"

// Kills, rounds, highlights and lowlights, up and right go forward
bind RIGHTARROW csdm_demo_goto_next_kill
bind LEFTARROW csdm_demo_goto_previous_kill
bind UPARROW csdm_demo_goto_next_round
bind DOWNARROW csdm_demo_goto_previous_round
bind PGUP csdm_demo_goto_next_highlight
bind PGDN csdm_demo_goto_previous_highlight
bind HOME csdm_demo_goto_next_lowlight
bind END csdm_demo_goto_previous_lowlight

// Skip 10 seconds with , and . and 1 minute with [ and ]
bind "." "csdm_demo_skip 10"
bind "," "csdm_demo_skip -10"
bind "]" "csdm_demo_skip 60"
bind "[" "csdm_demo_skip -60"
bind l "csdm_demo_loop clear"

// Cameras
bind kp_plus csdm_camera_next
bind kp_minus csdm_camera_previous
bind kp_0 csdm_camera_off

// Voices
bind F6 "csdm_voice_mute all"
bind F7 "csdm_voice_unmute all"
```

Save it as `csdm.cfg` in the `game/csgo/cfg` folder of your CS2 installation, the app executes it when it starts CS2
to watch a demo. It's not executed during video generation so it doesn't alter your recordings. If CS2 is already
running, type `exec csdm` in the game console to load your changes.

Some keys replace default binds that are useless during a demo, like the jump key and the buy menu, so avoid
putting it in your `autoexec.cfg` unless you change them. Avoid `F12`, Steam takes a screenshot with it whatever the
game binds (or disable it in Steam's settings).

The other [convars](#convars) are not in the CFG on purpose, the plugin saves their values between playbacks and the
`csdm_ui` panel changes them.

## Commands

### Playback

| Command                                  | Description                                                                                                                                                                      |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `csdm_ui`                                | Toggles the CS:DM demo playback UI.                                                                                                                                              |
| `csdm_demo_goto <minutes:seconds\|tick>` | Seeks the demo to a time as minutes:seconds or to a tick.                                                                                                                        |
| `csdm_demo_goto_round <round_number>`    | Seeks the demo to the start of a round.                                                                                                                                          |
| `csdm_demo_goto_next_round`              | Seeks the demo to the start of the next round.                                                                                                                                   |
| `csdm_demo_goto_previous_round`          | Seeks the demo to the start of the previous round.                                                                                                                               |
| `csdm_demo_goto_next_kill`               | Seeks the demo a few seconds ahead of the next kill of the spectated player, or of anyone when no player is spectated.                                                           |
| `csdm_demo_goto_previous_kill`           | Seeks the demo a few seconds ahead of the previous kill of the spectated player, or of anyone when no player is spectated.                                                       |
| `csdm_demo_goto_next_highlight`          | Seeks the demo to the start of the next highlight and spectates its player. With `csdm_round_timeline_spectated_only` on, only the highlights of the spectated player count.     |
| `csdm_demo_goto_previous_highlight`      | Seeks the demo to the start of the previous highlight and spectates its player. With `csdm_round_timeline_spectated_only` on, only the highlights of the spectated player count. |
| `csdm_demo_goto_next_lowlight`           | Seeks the demo to the start of the next lowlight and spectates its player. With `csdm_round_timeline_spectated_only` on, only the lowlights of the spectated player count.       |
| `csdm_demo_goto_previous_lowlight`       | Seeks the demo to the start of the previous lowlight and spectates its player. With `csdm_round_timeline_spectated_only` on, only the lowlights of the spectated player count.   |
| `csdm_demo_skip <seconds>`               | Seeks the demo forward by a number of seconds, or back when it's negative.                                                                                                       |
| `csdm_demo_loop <from> <to>`             | Loops the playback between two times as minutes:seconds or ticks, in any order. `csdm_demo_loop` clear stops looping, without arguments the current loop is shown.               |

:::note
The round, kill, highlight and lowlight navigation requires the demo to have been [analyzed](/docs/guides/demos-analysis)
with CS:DM.
:::

### Cameras

The cameras are the ones saved for the map from the [cameras](/docs/guides/cameras) page.

| Command                | Description                                                                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `csdm_cameras`         | Prints the cameras saved for the map, the current one marked with a *.                                                                                |
| `csdm_camera <target>` | Moves the view to a camera saved for the map, where the target is the number of the camera or the start of its name. Use `csdm_cameras` to list them. |
| `csdm_camera_next`     | Moves the view to the next camera saved for the map, back to the first after the last.                                                                |
| `csdm_camera_previous` | Moves the view to the previous camera saved for the map, back to the last before the first.                                                           |
| `csdm_camera_off`      | Leaves the cameras to follow the players again.                                                                                                       |

### Players and voices

A player target is a player slot, a SteamID64 or the start of a player name, `csdm_players` lists them. The voice
commands also accept `all`, `ct`, `t` and `others`.

| Command                                    | Description                                                                                                                                                                                             |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `csdm_players`                             | Prints the players of the demo.                                                                                                                                                                         |
| `csdm_replace_player_name <target> [name]` | Changes the name the game shows for a player, where the target is a player slot, a SteamID64 or the start of a player name, and no name brings the demo's name back. Use `csdm_players` to list them.   |
| `csdm_lock_player [SteamID64]`             | Locks the camera on a player so they are spectated again when they respawn, the spectated player without a SteamID64. Switching to another player while the locked one is alive moves the lock to them. |
| `csdm_unlock_player`                       | Unlocks the camera locked on a player.                                                                                                                                                                  |
| `csdm_voice_mute <target...>`              | Mutes the voice of players, where a target is all, ct, t, others, a player slot, a SteamID64 or the start of a player name. Use `csdm_players` to list them.                                            |
| `csdm_voice_unmute <target...>`            | Unmutes the voice of players, where a target is all, ct, t, others, a player slot, a SteamID64 or the start of a player name. Use `csdm_players` to list them.                                          |

### UI

| Command     | Description               |
| ----------- | ------------------------- |
| `csdm_info` | Prints CS:DM plugin info. |

The panels are moved by dragging them with the mouse, or with the `csdm_*_pos` convars below.

## Convars

| Convar                                  | Default    | Description                                                                                                                                            |
| --------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `csdm_follow_killer`                    | `0`        | Spectates the killer after seeking to a kill (arrows, goto kill commands, round timeline), 0 to keep the current view, 1 to follow.                    |
| `csdm_playback_skip_seconds`            | `10`       | Seconds the skip buttons of the playback panel go back or forward, from 1 to 300.                                                                      |
| `csdm_playback_overlay_auto_hide_delay` | `0`        | Seconds without moving the mouse before the playback panel hides, it comes back on the next mouse move or click. 0 to keep it always shown.            |
| `csdm_match_timeline`                   | `1`        | Shows the timeline of the whole match in the playback panel, 0 to hide it, 1 to show it.                                                               |
| `csdm_round_timeline`                   | `1`        | Shows the timeline of the current round in the playback panel, 0 to hide it, 1 to show it.                                                             |
| `csdm_round_timeline_spectated_only`    | `0`        | Limits the round timeline and the highlight navigation to the spectated player, 0 for everyone, 1 for them only.                                       |
| `csdm_buttons_overlay`                  | `0`        | Draws the buttons pressed by the currently spectated player, 0 to hide it, 1 to show it.                                                               |
| `csdm_voice_indicator`                  | `1`        | Shows who is talking in the overlay, the panel can be moved by dragging it.                                                                            |
| `csdm_playback_overlay_pos`             | `0.5 1`    | Position of the playback panel as fractions of the screen size, "x y" from 0 0 (top left) to 1 1 (bottom right). Dragging the panel updates it.        |
| `csdm_buttons_overlay_pos`              | `0.98 0.5` | Position of the pressed buttons panel as fractions of the screen size, "x y" from 0 0 (top left) to 1 1 (bottom right). Dragging the panel updates it. |
| `csdm_voice_indicator_pos`              | `0.02 0.5` | Position of the voice indicator as fractions of the screen size, "x y" from 0 0 (top left) to 1 1 (bottom right). Dragging the panel updates it.       |
| `csdm_overlay_scale`                    | `1`        | Size of the overlays on top of their scaling to the resolution, from 0.5 (half) to 2 (double).                                                         |
| `csdm_overlay_background_opacity`       | `0.63`     | Opacity of the background of the overlays (playback panel and its menus, pressed keys, voice indicator), from 0 (transparent) to 1 (opaque).           |
| `csdm_overlay_tooltips`                 | `1`        | Explains the controls of the overlays with tooltips, 0 to hide them, 1 to show them. The timelines keep theirs.                                        |

The convars and the positions of the panels are saved in the file `game/csgo/cfg/csdm_settings.json` of the CS2
folder and restored on the next playback. Delete the file to put everything back to its defaults.
