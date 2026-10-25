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

## Before you start

- **Connect to the database** with a PostgreSQL client. The connection details of the embedded server are in the
  [database](/docs/guides/database#embedded-database) guide. A database tool such as [DBeaver](https://dbeaver.io/),
  [HeidiSQL](https://www.heidisql.com/), [TablePlus](https://tableplus.com/) or
  [DataGrip](https://www.jetbrains.com/datagrip/) makes it easier to run queries and export the results.
- **Find a match** by its checksum: it's the `checksum` column of the `matches` table, which also holds the demo path
  and the map name. Most tables reference it through a `match_checksum` column.
- **Convert ticks to seconds** by dividing a number of ticks by the `tickrate` column of the `demos` table.
- **Positions** used by the 2D viewer are stored in packed binary columns that need dedicated functions to be read.
  The [position tables](/docs/guides/database#position-tables) section of the database guide explains their layout and
  the available functions, the recipes below show how to use them.

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
	"demos"."map_name",
	"demos"."date",
	(MAX("k1"."tick") - MIN("k1"."tick")) / "demos"."tickrate" AS "duration",
	"matches"."demo_path"
FROM
	"kills" AS "k1"
	INNER JOIN "kills" AS "k2" ON "k1"."match_checksum" = "k2"."match_checksum"
	AND "k1"."round_number" = "k2"."round_number"
	AND "k1"."killer_steam_id" = "k2"."killer_steam_id"
	INNER JOIN "matches" ON "k1"."match_checksum" = "matches"."checksum"
	INNER JOIN "demos" ON "demos"."checksum" = "matches"."checksum"
GROUP BY
	"k1"."killer_steam_id",
	"k1"."killer_name",
	"k1"."round_number",
	"k1"."match_checksum",
	"demos"."map_name",
	"matches"."demo_path",
	"demos"."date",
	"demos"."tickrate"
HAVING
	COUNT(DISTINCT "k1"."id") = 5 -- Replace with the number of multi-kills you want to filter
	AND (MAX("k1"."tick") - MIN("k1"."tick")) / "demos"."tickrate" < 20 -- Replace with the desired duration
ORDER BY
	"demos"."date" DESC,
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

### Player positions of a round

Player movements are stored for every tick of the round in parallel packed arrays.  
The `unnest()` function turns the decoded arrays into rows, one per tick.

```sql
SELECT p.player_name,
       t.tick,
       t.x,
       t.y,
       t.z,
       t.yaw,
       t.flash_duration_remaining,
       t.is_ducking,
       t.is_airborne
FROM player_positions p,
     unnest(
       int32_be_array(p.ticks),
       float32_be_array(p.x),
       float32_be_array(p.y),
       float32_be_array(p.z),
       float32_be_array(p.yaw),
       float32_be_array(p.flash_duration_remaining),
       bool_array(p.is_ducking),
       bool_array(p.is_airborne)
     ) AS t(tick, x, y, z, yaw, flash_duration_remaining, is_ducking, is_airborne)
WHERE p.match_checksum = '770317d2a950d4da'
  AND p.round_number = 4
ORDER BY t.tick, p.player_name;
```

Example result:

| player_name | tick | x        | y        | z       | yaw    | flash_duration_remaining | is_ducking | is_airborne |
| ----------- | ---- | -------- | -------- | ------- | ------ | ------------------------ | ---------- | ----------- |
| Player1     | 9517 | -1476.13 | -763.63  | -167.97 | 48.12  | 0                        | false      | false       |
| Player2     | 9517 | 1214.03  | -1023.97 | -119.97 | 150.71 | 0                        | false      | false       |
| Player1     | 9521 | -1470.42 | -757.03  | -167.97 | 48.12  | 0                        | false      | false       |

### Player positions at a specific tick

When you only need one tick, avoid decoding the whole columns: find the index of the tick by comparing the raw bytes
with `int4send()` and decode only that index.

```sql
SELECT player_name,
       ('x' || encode(substring(ticks FROM i * 4 + 1 FOR 4), 'hex'))::bit(32)::int AS tick,
       float32_be(x, i) AS x,
       float32_be(y, i) AS y,
       float32_be(z, i) AS z,
       float32_be(flash_duration_remaining, i) AS flash_duration_remaining,
       get_byte(is_ducking, i) = 1 AS is_ducking
FROM player_positions,
     generate_series(0, length(ticks) / 4 - 1) AS i
WHERE match_checksum = 'e66a0ea9f216e540'
  AND round_number = 4
  AND substring(ticks FROM i * 4 + 1 FOR 4) = int4send(15000);
```

### Player state changes of a round

States (health, money, weapons…) are stored only when they change, so this query returns one row per change (death,
purchase, weapon switch…). The weapon columns are regular `text[]` arrays and can be unnested directly.

```sql
SELECT p.player_name,
       s.tick,
       s.is_alive,
       s.side,
       s.health,
       s.armor,
       s.money,
       s.has_helmet,
       s.has_defuse_kit,
       s.active_weapon_name,
       s.rifles,
       s.grenades
FROM player_positions p,
     unnest(
       int32_be_array(p.state_ticks),
       bool_array(p.is_alive),
       int32_be_array(p.side),
       int32_be_array(p.health),
       int32_be_array(p.armor),
       int32_be_array(p.money),
       bool_array(p.has_helmet),
       bool_array(p.has_defuse_kit),
       p.active_weapon_name,
       p.rifles,
       p.grenades
     ) AS s(tick, is_alive, side, health, armor, money, has_helmet, has_defuse_kit, active_weapon_name, rifles, grenades)
WHERE p.match_checksum = '770317d2a950d4da'
  AND p.round_number = 4
ORDER BY p.player_name, s.tick;
```

Example result:

| player_name | tick  | is_alive | side | health | armor | money | has_helmet | has_defuse_kit | active_weapon_name | rifles | grenades                |
| ----------- | ----- | -------- | ---- | ------ | ----- | ----- | ---------- | -------------- | ------------------ | ------ | ----------------------- |
| Player1     | 9517  | true     | 3    | 100    | 100   | 4250  | true       | true           | M4A1               | M4A1   | Flashbang,Smoke Grenade |
| Player1     | 9630  | true     | 3    | 100    | 100   | 4250  | true       | true           | Smoke Grenade      | M4A1   | Flashbang,Smoke Grenade |
| Player1     | 9700  | true     | 3    | 100    | 100   | 4250  | true       | true           | M4A1               | M4A1   | Flashbang               |
| Player1     | 11250 | true     | 3    | 27     | 83    | 4250  | true       | true           | M4A1               | M4A1   | Flashbang               |
| Player1     | 11431 | false    | 3    | 0      | 83    | 4250  | true       | true           | M4A1               | M4A1   | Flashbang               |

### Player state at a specific tick

The state at a tick is the last state with a tick lower than or equal to it.  
This query returns the health, money and active weapon of each player at tick `15000`.

```sql
SELECT p.player_name,
       s.tick AS state_tick,
       s.is_alive,
       s.health,
       s.money,
       s.active_weapon_name
FROM player_positions p
CROSS JOIN LATERAL (
  SELECT s.tick, s.is_alive, s.health, s.money, s.active_weapon_name
  FROM unnest(
         int32_be_array(p.state_ticks),
         bool_array(p.is_alive),
         int32_be_array(p.health),
         int32_be_array(p.money),
         p.active_weapon_name
       ) AS s(tick, is_alive, health, money, active_weapon_name)
  WHERE s.tick <= 15000
  ORDER BY s.tick DESC
  LIMIT 1
) AS s
WHERE p.match_checksum = '770317d2a950d4da'
  AND p.round_number = 4;
```

### Grenade, chicken and hostage positions

These three tables share the same layout: one row per entity with `ticks`, `x`, `y` and `z` packed arrays, a position
being stored only when the entity moves.  
This query returns the trajectory of each smoke of a round.

```sql
SELECT g.grenade_name,
       g.thrower_name,
       g.projectile_id,
       t.tick,
       t.x,
       t.y,
       t.z
FROM grenade_positions g,
     unnest(int32_be_array(g.ticks), float32_be_array(g.x), float32_be_array(g.y), float32_be_array(g.z)) AS t(tick, x, y, z)
WHERE g.match_checksum = '770317d2a950d4da'
  AND g.round_number = 4
  AND g.grenade_name = 'Smoke Grenade'
ORDER BY g.projectile_id, t.tick;
```

Example result:

| grenade_name  | thrower_name | projectile_id | tick | x       | y       | z       |
| ------------- | ------------ | ------------- | ---- | ------- | ------- | ------- |
| Smoke Grenade | Player1      | 3254          | 9630 | -1340.5 | -703.21 | -103.08 |
| Smoke Grenade | Player1      | 3254          | 9631 | -1321.7 | -692.45 | -97.52  |
| Smoke Grenade | Player1      | 3254          | 9632 | -1302.9 | -681.68 | -92.29  |

For chickens and hostages, replace `grenade_positions` with `chicken_positions` or `hostage_positions` and remove the
grenade columns, these tables only have `match_checksum` and `round_number` to identify the row:

```sql
SELECT c.round_number,
       t.tick,
       t.x,
       t.y,
       t.z
FROM chicken_positions c,
     unnest(int32_be_array(c.ticks), float32_be_array(c.x), float32_be_array(c.y), float32_be_array(c.z)) AS t(tick, x, y, z)
WHERE c.match_checksum = '770317d2a950d4da'
  AND c.round_number = 4
ORDER BY t.tick;
```

### Grenade landing positions

The last tick of a projectile is when it disappeared, so its last position is where it landed.  
This query decodes only the last value of each row instead of the whole columns.

```sql
SELECT g.round_number,
       g.thrower_name,
       (int32_be_array(g.ticks))[length(g.ticks) / 4] AS tick,
       float32_be(g.x, length(g.x) / 4 - 1) AS x,
       float32_be(g.y, length(g.y) / 4 - 1) AS y,
       float32_be(g.z, length(g.z) / 4 - 1) AS z
FROM grenade_positions g
WHERE g.match_checksum = '770317d2a950d4da'
  AND g.grenade_name = 'Smoke Grenade'
ORDER BY g.round_number, tick;
```

Example result:

| round_number | thrower_name | tick | x       | y       | z      |
| ------------ | ------------ | ---- | ------- | ------- | ------ |
| 4            | Player1      | 9632 | -1302.9 | -681.68 | -92.29 |

### Inferno fires

Infernos have a fixed position, only the shape of the fire (`convex_hulls_2d`) changes over time.  
The `text[]` column is unnested with the decoded ticks, an empty hull means the inferno has no active fires anymore.

```sql
SELECT i.thrower_name,
       i.x,
       i.y,
       i.z,
       t.tick,
       t.convex_hull_2d
FROM inferno_positions i,
     unnest(int32_be_array(i.ticks), i.convex_hulls_2d) AS t(tick, convex_hull_2d)
WHERE i.match_checksum = '770317d2a950d4da'
  AND i.round_number = 4
ORDER BY i.unique_id, t.tick;
```

Example result:

| thrower_name | x      | y      | z      | tick | convex_hull_2d             |
| ------------ | ------ | ------ | ------ | ---- | -------------------------- |
| Player1      | 659.25 | -133.5 | -165.9 | 4556 | 659,-133                   |
| Player1      | 659.25 | -133.5 | -165.9 | 4564 | 695,-192,659,-133,612,-150 |
| Player1      | 659.25 | -133.5 | -165.9 | 5836 |                            |

### Hostage state changes

Hostages have a second timeline for their state (`state_ticks` and `states`), stored only when it changes.

```sql
SELECT h.round_number,
       s.tick,
       CASE s.state
         WHEN 0 THEN 'Idle'
         WHEN 1 THEN 'Being untied'
         WHEN 2 THEN 'Getting picked up'
         WHEN 3 THEN 'Being carried'
         WHEN 4 THEN 'Following player'
         WHEN 5 THEN 'Getting dropped'
         WHEN 6 THEN 'Rescued'
         WHEN 7 THEN 'Dead'
       END AS state
FROM hostage_positions h,
     unnest(int32_be_array(h.state_ticks), int32_be_array(h.states)) AS s(tick, state)
WHERE h.match_checksum = '770317d2a950d4da'
ORDER BY h.round_number, s.tick;
```

Example result:

| round_number | tick | state             |
| ------------ | ---- | ----------------- |
| 1            | 66   | Idle              |
| 1            | 3590 | Being untied      |
| 1            | 3596 | Getting picked up |
| 1            | 3597 | Being carried     |
| 1            | 4812 | Rescued           |
