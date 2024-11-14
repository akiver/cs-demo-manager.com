---
title: 'SQL export'
---

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
