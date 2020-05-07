<a class="anchor" id="how"></a>

### 应用程序如何下载我的 MM demo？ [#](/docs/downloads#how)

CSGO Demos Manager 使用 [boiler-writter](https://github.com/akiver/boiler-writter)，一个 [Boiler](https://bitbucket.org/ACB/boiler/) 的自定义版本。感谢 _ACB_ 创建了 Boiler。

Boiler-writter 从 Steam Game Coordinator 中检索比赛信息，将比赛信息存储到文件中，然后应用程序使用比赛信息下载 Demo 并生成其 `.info` 文件。

---

<a class="anchor" id="msvcp"></a>

### 我遇到错误 "MSVCP140.dll and VCRUNTIME140.dll is missing from your computer" [#](/docs/downloads#msvcp)

您必须安装 [Visual C++ VS 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145)。

---

<a class="anchor" id="steam-status"></a>

### 单击下载之后，我的 Steam 状态将变为 "游戏中" 么？ [#](/docs/downloads#steam-status)

为了能够检索比赛信息，Steam 必须正在运行并且已经连接到 Steam 账户。因此看起来您在几秒钟之内正在游玩 CSGO，因为这需要与 Steam GC 进行通信。如果 CSGO 正在运行，它将会被自动关闭。

---

<a class="anchor" id="others-accounts"></a>

### 如何下载我其它账户的 Demo ？ [#](/docs/downloads#others-accounts)

应用程序下载当前已登录 Steam 账户的 Demo。您必须在 Steam 上切换登陆账户。

---

<a class="anchor" id="notifications"></a>

### 没有通知提示我下载最新的 Demo 么？ [#](/docs/downloads#notifications)

BOT 必须正在运行，而不一定是主应用程序。

您可以在 `Settings` 中选择启动 CSGO Demos Manager 时选择自动启动 BOT。

![BOT settings](docs/downloads/bot-settings.png)

## <p class="has-text-warning">可以选择 BOT 在 Windows 启动时自启动。</p>

<a class="anchor" id="matches-number"></a>

### 我只能看我最近的 8 场比赛？ [#](/docs/downloads#matches-number)

目前您只有最近 8 场比赛可用，这与 CSGO 游戏内的设置相同。

应用程序仅在下述情况下载 Demo：

- `.dem` 和 `.info` 文件不在 `Setting` 设置的下载文件夹中。
- Demo 的链接仍然可用（比赛后一个月左右将会删除该场比赛的 Demo）。
