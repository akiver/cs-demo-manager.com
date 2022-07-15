<a class="anchor" id="hltv-rating"></a>

### HLTV rating 2.0 accuracy [#](/docs/analyze#hltv-rating)

The HLTV 2.0 rating added in the version 2.14.0 use the formula from [this post](https://flashed.gg/posts/reverse-engineering-hltv-rating/).

Please note that it's an **estimated value** and may not be 100% accurate as the official HLTV formula is
[private](https://www.hltv.org/news/20695/introducing-rating-20).

---

<a class="anchor" id="cevo-efficacy"></a>

### Any chance to add CEVO efficacy? [#](/docs/analyze#cevo-efficacy)

No, CEVO keeps its algorithm private.

---

<a class="anchor" id="missing-data"></a>

### I have missing information after updating the application [#](/docs/analyze#missing-data)

Some updates may need to re-analyze demos to have correct values.

---

<a class="anchor" id="wrong-stats"></a>

### Demos stats are wrong [#](/docs/analyze#wrong-stats)

Firstly, always check if the demo's source correspond to its origin. You can switch between source from the demos list (right click on the demo).

If the source is correct it could be an analyze bug or demo with missing events (not related to CSGO Demo Manager in this case).

---

<a class="anchor" id="wrong-date"></a>

### Demos date are wrong [#](/docs/analyze#wrong-date)

The date corresponds to the creation date of the demo file (.dem). For Valve (Matchmaking) demos, it use the demo info file (.info) to detect the real date of the match. If the date is wrong and it's a Valve demo, it's because the .info file is missing. If you renamed a Valve demo file, you have to rename the .info too.

---

<a class="anchor" id="teams-names"></a>

### Why does teams name are always "Team 1" and "Team 2"? [#](/docs/analyze#teams-names)

Teams names are available only if 5 players had the same clantag ingame except for eBot demos that set automatically a name for both teams.

---

<a class="anchor" id="esea-rws"></a>

### ESEA RWS is not the same as displayed on the ESEA website? [#](/docs/analyze#esea-rws)

Due to missing damages events or algorithm variances, RWS is not exactly the same as ESEA website.
