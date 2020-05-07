<a class="anchor" id="how"></a>

### How does the application download my MM demos? [#](/docs/downloads#how)

CSGO Demos Manager uses [boiler-writter](https://github.com/akiver/boiler-writter), a custom version of [Boiler](https://bitbucket.org/ACB/boiler/). Thanks to _ACB_ for creating Boiler.

Boiler-writter retrieves the matches information from the Steam Game Coordinator, stores it into a file then the app uses it to download the demos and generate their `.info` files.

---

<a class="anchor" id="msvcp"></a>

### I have an error "MSVCP140.dll and VCRUNTIME140.dll is missing from your computer" [#](/docs/downloads#msvcp)

You have to install [Visual C++ VS 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145).

---

<a class="anchor" id="steam-status"></a>

### My Steam status is "ingame" when I click on download? [#](/docs/downloads#steam-status)

To be able to retrieve matches information, Steam must be running and connected to a Steam account. You appear as playing CSGO during some seconds because it's required to communicate with the Steam GC. If CSGO was running it will be closed automatically.

---

<a class="anchor" id="others-accounts"></a>

### How can I download demos of my others accounts? [#](/docs/downloads#others-accounts)

The app download demos of the current Steam account logged on. You have to switch to your others accounts on Steam.

---

<a class="anchor" id="notifications"></a>

### I don't have notifications to download newest demos? [#](/docs/downloads#notifications)

The BOT must be running, not necessarily the main application.

You can choose to start automatically the BOT when you launch CSGO Demos Manager from `Settings`.

![BOT settings](docs/downloads/bot-settings.png)

## <p class="has-text-warning">The BOT has an option to start automatically at Windows startup.</p>

<a class="anchor" id="matches-number"></a>

### I can only see my last 8 games? [#](/docs/downloads#matches-number)

At the moment only your last 8 games are available, this is the same behavior as in-game.

The app download it only if:

- The `.dem` and `.info` files are not in the download folder set from `Settings`.
- The demo's link is still available (Demos are deleted around 1 month after the match)
