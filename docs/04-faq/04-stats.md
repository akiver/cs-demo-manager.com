---
title: 'Stats'
hide_title: true
---

## The demo source is not supported

This message is displayed when:

1. The demo's source has not been detected automatically.  
   In this case, the **Source** column in the list shows a `?` icon.  
   ![Unknown source](/img/documentation/stats/unknown-source.png)  
   You have to update the demo's source to the correct one and analyze it again.
2. The application does not support the demo's source.
   See the [table below](/docs/faq/stats#what-are-the-supported-demo-sources) for the list of supported sources.  
   You can change the demo's source to a supported source and analyze it, **but it may not work correctly if the demos come from a non-supported source**.  
   You can vote for the next source you would like to see supported [here](https://github.com/akiver/cs-demo-manager/discussions/674).

:::tip
To change a demo's source, right-click on it in the demos list and click on **Change source**.
:::

## What are the supported demo sources?

| Source         | CSGO | CS2 | Comment                                                                                                                 |
| -------------- | ---- | --- | ----------------------------------------------------------------------------------------------------------------------- |
| 5EPlay         | ✅   | ✅  |                                                                                                                         |
| CEVO           | ❌   | ❌  | Dead platform but demos are still detected in the app                                                                   |
| Challengermode | ✅   | ✅  |                                                                                                                         |
| eBot           | ✅   | ✅  |                                                                                                                         |
| ESL            | ✅   | ✅  | ESL is now FACEIT, newer demos from ESL events should use the FACEIT analyzer.                                          |
| ESEA           | ✅   | ❌  | ESEA is now FACEIT, their platform is almost dead and I didn't find any CS2 demos recorded with their plugin            |
| Esportal       | ❌   | ❌  | ATM CS2 demos from Esportal (dathost.net) have a bug that require an (ugly) workaround to analyze them                  |
| FACEIT         | ✅   | ✅  |                                                                                                                         |
| FASTCUP        | ✅   | ✅  |                                                                                                                         |
| Gamers Club    | ❌   | ❌  |                                                                                                                         |
| Perfect World  | ✅   | ✅  |                                                                                                                         |
| PopFlash       | ⚠️   | ❌  | Demo analysis is enabled for CSGO demos but it may not work. Need some recent demos to update it.                       |
| Private server | ❌   | ❌  | Demos recorded without the built-in match system or a server plugin, i.e. running commands such as `tv_record` manually |
| Valve (MM)     | ✅   | ✅  |                                                                                                                         |

:::warning
Demos from private server are not supported however you can change the demo's source from the application and analyze
it but you may have incorrect data.
:::

## Players names are "Player 1", "Player 2", etc. and avatars are missing

When you go to the demo's details page of a demo from Valve with a `.dem` and a `.info` file, the application reads the
`.info` file to generate a minimal scoreboard similar to the game shows.  
The `.info` file contains only players' Steam IDs - we retrieve players' names and avatars from the Steam WEB API.  
In the case of **matches** (i.e., analyzed demos), we only need to retrieve players avatars as names are available when parsing the `.dem`
file.

If you see _"Player 1"_, _"Player 2"_… on a demo's scoreboard or avatars are missing on both demos or matches scoreboard,
it means the Steam API key used by the application has reached its rate limit, and we can't retrieve players' names and
avatars.  
You should use your [own Steam API key](/docs/guides/settings#third-party-api-keys) to avoid this issue.

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
