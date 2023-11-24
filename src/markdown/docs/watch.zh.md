<a class="anchor" id="watch-highlow"></a>

### 为什么我无法观看我的 高光/低谷 片段？ [#](/docs/watch#watch-highlow)

您必须添加至少 1 个帐户，然后在设置里选择该账户作为您要关注的帐户。

您可以在设置或记分板里添加帐户。

<a class="anchor" id="add-account-quick"></a>

#### 如何通过计分板添加账户（更简便的方法） [#](/docs/watch#add-account-quick)

1. 进入 Demo 的详情页。
2. 右键单击想要添加的玩家，然后单击 `添加到账户列表`。

![Add account from scoreboard](/images/docs/watch/add-account-scoreboard.png)

<a class="anchor" id="add-account-settings"></a>

#### 如何通过设置添加账户 [#](/docs/watch#add-account-settings)

1. 点击 `设置` 进入 `账户` 菜单

![Accounts settings](/images/docs/watch/add-account-step1.png)

2. 点击 `添加账户`

![Add account](/images/docs/watch/add-account-step2.png)

3. 复制粘贴您的 Steam 社区链接（或 SteamID 64）然后点击 `确定`

<a class="anchor" id="focus-account"></a>

#### 如何设置要关注的账户 [#](/docs/watch#focus-account)

1. 单击设置，然后进入账户菜单
2. 选择您的账户，然后单击 `使用此账户进行观看`

![Select account to focus on](/images/docs/watch/add-account-step3.png)

<p class="has-text-warning">提示：您可以通过计分板快速观看玩家的 高光/低谷 片段。</p>

![通过计分板查看 高光/低谷](/images/docs/watch/scoreboard-highlow.png)

---

<a class="anchor" id="afx-cpp"></a>

### 观看 Demo 时出现 "AfxCppCli.dll" 错误 [#](/docs/watch#afx-cpp)

您必须安装 [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145)。

---

<a class="anchor" id="stuck-menu"></a>

### Demo 无法播放，停留在主菜单 [#](/docs/watch#stuck-menu)

可能是因为 Demo 路径中有数字或特殊字符。游戏无法识别字符，导致路径中断。您必须更改 Demo 的路径才能修复这个问题。

<p class="has-text-warning">检查控制台输出以获取更多详细信息。</p>

---

<a class="anchor" id="stuck-loading"></a>

### 观看 Demo 时，我的游戏卡在了加载画面上 [#](/docs/watch#stuck-loading)

如果您的游戏停留在加载画面上，则可能是因为您的 Demo 使用了旧版本的地图，这时游戏正在从创意工坊中下载旧地图。在 Demo 开始播放前您必须进行等待。

---

<a class="anchor" id="vdm"></a>

### 什么是 VDM 文件？ [#](/docs/watch#vdm)

[VDM files](https://developer.valvesoftware.com/wiki/Demo_Recording_Tools) 由应用程序生成，用于定义在 Demo 播放过程中何时以及在哪个玩家身上发生的事，用于突出显示某一玩家的高光、低谷，用于观看该玩家的击杀和道具使用。 VDM 文件与 Demo 文件具有相同的名称，只是扩展名有所更改。不要忘记，如果 .vdm 文件已经存在，它将被覆盖。

---

<a class="anchor" id="hlae"></a>

### 什么是 “启用 HLAE ”？ [#](/docs/watch#hlae)

选中 `启用 HLAE` 后，将使用 [Half Life Advanced Effects](https://github.com/ripieces/advancedfx/wiki/AfxHookSource) 启动游戏。

<p class="has-text-warning">如果您不是电影作者，或者您不知道自己在做什么，只需要将其禁用即可。</p>

---

<a class="anchor" id="steam-client-error"></a>

### 尝试观看 Demo 时出现 Steam 客户端错误 [#](/docs/watch#steam-client-error)

这主要是因为 Steam 正以管理员权限运行。您必须以普通用户权限运行 Steam。

查看这个 [错误的原因](https://github.com/akiver/cs-demo-manager/issues/376)。
