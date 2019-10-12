<a class="anchor" id="empty-list"></a>

### Demos list is empty? [#](/docs/general#empty-list)

If the demos list is empty you should had a warning popup at app startup. It's because CSGO isn't installed on the default Steam folder.

You have to add manually these 2 following folders from settings:

- `steamapps/common/Counter-Strike Global Offensive/replays` (MM demos)
- `steamapps/common/Counter-Strike Global Offensive/csgo` (POV and local server demos)

---

<a class="anchor" id="app-crash"></a>

### App crash on startup [#](/docs/general#app-crash)

If the application worked before and you added some demos into a folder scanned by the app, it could be due to a corrupted demo. In this case try to move the last demos added in a temporary folder and start the app.

Otherwise it could be a configuration or cache corruption, in this case try the following steps:

1. Delete all folders within `C:\Users\YOU USERNAME\AppData\Local\AkiVer` and start the application.
2. If it didn't work delete the folder `CSGO Demos Manager` located in `C:\Users\YOU USERNAME\AppData\Roaming\AkiVer`.
