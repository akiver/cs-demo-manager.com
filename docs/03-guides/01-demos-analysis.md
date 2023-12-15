---
title: Demos analysis
---

CS Demo Manager extracts data from Counter-Strike **demos** (`.dem` files) and generates **matches**.  
A **match** results from a demo analysis and contains all the information about the game (players, teams, positions, etc.).

## Where to get demos

- From the **Downloads** page in CS:DM. You can download your last 8 Valve Matchmaking or FACEIT demos.
- From the **Watch** page of CS2 client (Matchmaking only).
- From the platform website you are playing on (FACEIT, PopFlash, etc.).
- From [HLTV](https://www.hltv.org) for professional matches.

:::warning
HLTV and some platforms compress demos in archives. You have to decompress it otherwise the application will not _see_ them.
:::

:::warning
Demos links usually expire after around one month.
:::

## Analysing demos

![Demos analysis steps](/img/documentation/analysis/analysis-steps.png)

1. Go to the **Demos** page.
2. Select the correct folder where your demos are located (you can add folders from the application settings).
3. Select one or more demos.
4. Click on **Analyze** and wait for the analysis to finish. You can see the progress from the **Analyses** page.
5. Go to the **Matches** page to see the generated matches.

## Analysis errors

The following list describes analysis error codes that can occur during the analysis of a demo.  
They help understanding why a demo analysis failed.

### INSERT_MATCH_DUPLICATED_CHECKSUM

The `INSERT_MATCH_DUPLICATED_CHECKSUM` error code means you tried inserting an already known match in the database.

While this should not be possible, some users have reported the problem on [GitHub](https://github.com/akiver/cs-demo-manager/issues/657).  
Any help to reproduce the issue is welcome.

### INSERT_ROUNDS_ERROR

The `INSERT_ROUNDS_ERROR` error code means one or more demo rounds have missing mandatory data and as such can't
be inserted into the database.

It usually means the demo stopped during the middle of a round, and the cause **may be** because of a corrupted demo.  
A demo must end after the last round of the match to preserve data integrity - for example, a round without a winner is
not valid.

To confirm this, you should watch the demo in-game and:

1. Ensure the playback doesn't stop in the middle of a round
2. Open the demo player UI (`SHIFT + F2`) and check the information.  
   A non-corrupted demo should look like this:  
   ![Regular demo](/img/documentation/analysis/regular-demo-timeline.png)
   A corrupted demo look like this:  
   ![corrupted demo](/img/documentation/analysis/corrupted-demo-timeline.png)  
   As you can see, when a demo is corrupted, the total duration is `0:00` and _usually_ the round indicators are missing.

If the demo **doesn't stop in the middle of a round and is not corrupted**, please open an issue on
[GitHub](https://github.com/akiver/cs-demo-manager/issues/new?assignees=&labels=&projects=&template=bug_report.yml)
that includes the analysis logs and a link to download the demo.

### UNKNOWN

The `UNKNOWN` error code means the demo analysis failed for an unknown reason not documented yet.

Please open an issue on [GitHub](https://github.com/akiver/cs-demo-manager/issues/new?assignees=&labels=&projects=&template=bug_report.yml) that includes the analysis logs and a link to download the demo.
