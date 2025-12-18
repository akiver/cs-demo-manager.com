---
title: 'SQL export'
sidebar_position: 11
---

## Introduction

CS:DM allows you to export essential data, such as kills, players, rounds, etc, into **JSON** or **XLSX** files.  
While this is enough for most users, you may want to export more specific data.

Because it would be impossible to fit everyone's needs, you can benefit from data being stored in a database and creating custom exports using **SQL**.  
If you are unfamiliar with SQL, you can read the [W3Schools course](https://www.w3schools.com/sql/default.asp) to learn the basics.

Here is an example of a query that returns the most bought rifles per map:

```sql
SELECT weapon_name, map_name, COUNT(player_buys.id) AS "buy_count"
FROM player_buys
JOIN matches
ON matches.checksum = player_buys.match_checksum
WHERE weapon_type = 'rifle'
GROUP BY map_name, weapon_name
ORDER BY map_name, buy_count DESC
```

Example result:

| weapon_name | map_name   | buy_count |
| ----------- | ---------- | --------- |
| AK-47       | de_ancient | 112       |
| M4A1        | de_ancient | 85        |
| Galil AR    | de_ancient | 13        |
| AK-47       | de_inferno | 102       |
| M4A1        | de_inferno | 91        |
| AK-47       | de_nuke    | 123       |
| M4A1        | de_nuke    | 88        |

To make it easier, it's recommended to use a database tool such as [DBeaver](https://dbeaver.io/),
[HeidiSQL](https://www.heidisql.com/), [TablePlus](https://tableplus.com/),
[DataGrip](https://www.jetbrains.com/datagrip/) etc. to run your queries and export the results more easily.

:::warning
You should only read from the database, not modify it!  
It could create potential issues in the application, please do not open an issue in that case.
:::

## SQL recipes

### Find quick multi-kills

This query will list all 5K that happened in less than 20 seconds.

```sql
SELECT
	"k1"."killer_steam_id",
	"k1"."killer_name",
	"matches"."map_name",
	"matches"."date",
	(MAX("k1"."tick") - MIN("k1"."tick")) / "matches"."tickrate" AS "duration",
	"matches"."demo_path"
FROM
	"kills" AS "k1"
	INNER JOIN "kills" AS "k2" ON "k1"."match_checksum" = "k2"."match_checksum"
	AND "k1"."round_number" = "k2"."round_number"
	AND "k1"."killer_steam_id" = "k2"."killer_steam_id"
	INNER JOIN "matches" ON "k1"."match_checksum" = "matches"."checksum"
GROUP BY
	"k1"."killer_steam_id",
	"k1"."killer_name",
	"k1"."round_number",
	"k1"."match_checksum",
	"matches"."map_name",
	"matches"."demo_path",
	"matches"."date",
	"matches"."tickrate"
HAVING
	COUNT(DISTINCT "k1"."id") = 5 -- Replace with the number of multi-kills you want to filter
	AND (MAX("k1"."tick") - MIN("k1"."tick")) / "matches"."tickrate" < 20 -- Replace with the desired duration
ORDER BY
	"matches"."date" DESC,
	"k1"."match_checksum",
	"k1"."killer_name",
	"k1"."round_number";
```

Example result:

| killer_steam_id   | killer_name | map_name | date                   | duration | demo_path           |
| ----------------- | ----------- | -------- | ---------------------- | -------- | ------------------- |
| 76561198000000000 | Player1     | de_dust2 | 2024-06-21 07:31:21+00 | 15       | C:\path\to\demo.dem |

### Find specific weapon kills

This query will list all headshot kills made with the Scout (SSG 08).

:::tip
You can find all available weapon names in [this file](https://github.com/akiver/cs-demo-analyzer/blob/main/pkg/api/constants/weapon.go).  
If you want to filter for a different weapon, replace `'SSG 08'` with the desired weapon name.  
If you want to filter for non-headshot kills, change `kills.is_headshot = true` to `kills.is_headshot = false` or remove that line entirely to get all kills with that weapon.
:::

```sql
SELECT *
FROM kills
WHERE kills.weapon_name = 'SSG 08'
AND kills.is_headshot = true;
```
