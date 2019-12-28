<a class="anchor" id="data-generation"></a>

### 数据是如何生成的？ [#](/docs/about#data-generation)

Valve（以下简称V社）已发布了用 C++ 编写的名为 demoinfogo 的工具，该工具可解析 .dem 文件以检索大量数据。

CSGO Demos Manager 使用了该工具的 C# 版本，该工具由名为 DemoInfo 的项目背后的人员移植。（谢谢！）

---

<a class="anchor" id="pov-support"></a>

### 可以与 POV Demo 一起使用么？ [#](/docs/about#pov-support)

抱歉，出于技术原因我认为不可以。

---

<a class="anchor" id="provider-support"></a>

### 它支持 ESEA、Faceit 和其它联赛的 Demo 么？ [#](/docs/about#provider-support)

目前，CSGO Demos Manager 支持 V社（竞赛/官方锦标赛）、ESEA、FaceIt、CEVO、eBot 和 PopFlash。

官方不支持使用诸如 mp_restartgame 和 tv_record 之类的命令的私人服务器上的 Demo。但是，您可以在应用程序中更改 Demo 的来源并重新分析。由于不完全支持来自私有服务器上的 Demo，因此您仍然可能得到不正确的数据。

---

<a class="anchor" id="vac"></a>

### 工具是 VAC 安全的么？ [#](/docs/about#vac)

是的。该应用程序不会修改任何游戏的文件，也不会访问游戏的进程。

从 2.2.0 版本开始，设置中提供了一个选项，可通过 HLAE 启动游戏。HLAE 从技术上讲是一种技巧，启用此选项后，游戏始终用 -insecure 参数启动，该参数可防止您连接到受 VAC 保护的任何服务器上，因此该工具很安全。如果您不需要 HLAE，请不要启用此选项。

---

<a class="anchor" id="bug"></a>

### 我遇到了 BUG，怎么办？ [#](/docs/about#bug)

如果您遇到 BUG 或 Demo 数据不正确的情况，请发送邮件至 contact@csgo-demos-manager.com，该邮件需要包含错误日志文件（可从设置访问）。如果该错误与特定的 Demo 有关，请附加该 Demo 的链接，谢谢。

---

<a class="anchor" id="os-compatibility"></a>

### 可以在 MAC OS/Linux 上运行么？ [#](/docs/about#os-compatibility)

不可以，但下一个主版本将提供支持。

---

<a class="anchor" id="mobile-app"></a>

### 是否有移动应用？ [#](/docs/about#mobile-app)

没有。