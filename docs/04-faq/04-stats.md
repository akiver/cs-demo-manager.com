---
title: 'Stats'
hide_title: true
---

## What are the supported demo sources?

| Source         | CSGO | CS2 | Comment                                                                                                                 |
| -------------- | ---- | --- | ----------------------------------------------------------------------------------------------------------------------- |
| CEVO           | ❌   | ❌  | Dead platform but demos are still detected in the app                                                                   |
| eBot           | ✅   | ✅  |                                                                                                                         |
| ESL            | ✅   | ✅  | ESL is now FACEIT, newer demos from ESL events should use the FACEIT analyzer.                                          |
| ESEA           | ✅   | ❌  | ESEA is now FACEIT, their platform is almost dead and I din't find any CS2 demos recorded with their plugin             |
| Esportal       | ❌   | ❌  | ATM CS2 demos from Esportal (dathost.net) have a bug that require an (ugly) workaround to analyze them                  |
| FACEIT         | ✅   | ✅  |                                                                                                                         |
| FASTCUP        | ❌   | ❌  |                                                                                                                         |
| Gamers Club    | ❌   | ❌  |                                                                                                                         |
| PopFlash       | ⚠️   | ❌  | Demo analysis is enabled for CSGO demos but it may not work. Need some recent demos to update it.                       |
| Private server | ❌   | ❌  | Demos recorded without the built-in match system or a server plugin, i.e. running commands such as `tv_record` manually |
| Valve (MM)     | ✅   | ✅  |                                                                                                                         |

:::warning
Demos from private server are not supported however you can change the demo's source from the application and analyze
it but you may have incorrect data.
:::

## Demos date are wrong

The date corresponds to the creation date of the demo file.  
The only exception is for **Valve** demos that have their `.info` file next to the demo file.  
If it's the case, a more accurate date will be retrieved from this file.

## HLTV rating 2.0 accuracy

The HLTV 2.0 rating is calculated using the formula from [this post](https://flashed.gg/posts/reverse-engineering-hltv-rating/).  
Please note that it's an **estimated value** and may not be 100% accurate as the official HLTV formula is [private](https://www.hltv.org/news/20695/introducing-rating-20).

## Demos stats are wrong or missing

- Some application updates may require re-analyzing demos to have updated stats.
- If it's a CS2 demo, please ensure it's not related to a [CS2 limitation](/docs/cs2).
- Ensure the demo comes from a [supported platform](/docs/faq/stats#what-are-the-supported-demo-sources).
- Make sure the **source** is correct in the application. For example, if it says **Valve** when the demo comes from
  **FACEIT**, this may be the problem. You can update the source from the demos list (right-click on the demo).

## Why are team names always "Team 1" and "Team 2"?

Team names are available only if all players of a team have the same clan tag or when the team names have been
set in the server configuration.

## The rank displayed is not my current rank

The application displays the rank detected in the most recent demo analyzed (based on the date).  
If the displayed rank differs from your current one, it's probably because you still need to analyze your last demo.

## Ranks are all unknown on the scoreboard

- Ranks are available only with demos coming from Valve Matchmaking.
- If the Steam Game Coordinator was down when ranks are revealed, they may be missing from the demo.

## Damages stats are missing

- For CSGO demos, damages are available only for demos created after the [30/06/2015 CSGO update](https://blog.counter-strike.net/index.php/2015/06/12126/).
- For CS2 demos, damages may be missing in early demos created from the CS2 Limited Test.
