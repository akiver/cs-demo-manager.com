<a class="anchor" id="hltv-rating"></a>

### 有机会添加 HLTV rating 2.0 么？ [#](/docs/analyze#hltv-rating)

没有，HLTV 决定按照此[新闻](https://www.hltv.org/news/20695/introducing-rating-20)中的说明将其公式保密。

---

<a class="anchor" id="cevo-efficacy"></a>

### 有机会添加 CEVO 效果么？ [#](/docs/analyze#cevo-efficacy)

没有，CEVO 将其算法保密了。

---

<a class="anchor" id="missing-data"></a>

### 更新应用程序之后，我丢失了信息 [#](/docs/analyze#missing-data)

某些更新可能需要重新分析 Demo 以得到正确的值。

---

<a class="anchor" id="wrong-stats"></a>

### Demo 统计信息出错 [#](/docs/analyze#wrong-stats)

首先，请务必检查 Demo 的来源是否与其来源相对应。您可以从 Demo 列表中切换来源（右键单击 Demo）。

如果来源正确，则可能是分析 Bug 或 Demo 缺少事件（这种情况下与 CSGO Demos Manager 无关）。

---

<a class="anchor" id="wrong-date"></a>

### Demo 日期出错 [#](/docs/analyze#wrong-date)

该日期对应 Demo 文件（ .dem ）的创建日期。对于V社的官方竞技 Demo，其使用 Demo 信息文件（ .info ）检测比赛的真实信息。如果日期出错并且该 Demo 是V社的，那是因为缺少 .info 文件。如果重命名了V社的 Demo，则也必须重命名 .info 文件。

---

<a class="anchor" id="teams-names"></a>

### 为什么团队名称总是 "Team 1" 和 "Team 2"? [#](/docs/analyze#teams-names)

仅当5个玩家在游戏中具有相同的前缀名时，团队名称才可用。但是 eBot 的 Demo 会自动为两个团队设置一个名称。

---

<a class="anchor" id="esea-rws"></a>

### ESEA RWS 与 ESEA 网站上显示的不同？ [#](/docs/analyze#esea-rws)

由于缺乏伤害事件（ damages events ）或算法差异，RWS  与 ESEA 网站上的不完全相同。