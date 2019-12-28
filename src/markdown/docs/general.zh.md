<a class="anchor" id="empty-list"></a>

### Demo 列表为空？ [#](/docs/general#empty-list)

如果 Demo 列表为空，您将会在应用程序启动时收到一个弹出警告窗口。这是因为 CSGO 未安装在默认的 Steam 文件夹内。

您必须在设置中手动添加以下两个文件夹路径：

- `steamapps/common/Counter-Strike Global Offensive/replays` (竞技 Demo)
- `steamapps/common/Counter-Strike Global Offensive/csgo` (POV 和本地服务器的 Demo)

---

<a class="anchor" id="app-crash"></a>

### 应用运行中崩溃 [#](/docs/general#app-crash)

如果应用程序以前可以运行，并且您已经在该应用程序扫描的文件夹中添加了一些 Demo，则可能是 Demo 损坏。这种情况下，请尝试移动添加到临时文件夹中的最新 Demo 并启动应用程序。

否则，可能是配置错误或缓存损坏，在这种情况下，请尝试以下步骤：

1. 删除 `C:\Users\YOU USERNAME\AppData\Local\AkiVer` 中的所有文件夹，然后启动应用程序。
2. 如果不起作用，请删除位于 `C:\Users\YOU USERNAME\AppData\Roaming\AkiVer` 中的 `CSGO Demos Manager` 文件夹。