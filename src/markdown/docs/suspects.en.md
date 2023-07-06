<a class="anchor" id="bot"></a>

### What is CSGO Suspects BOT? [#](/docs/suspects#bot)

The bot is a small windowless application, accessible from the systray that check if new suspects have been banned. It's an independent application so you can run it without CSGO Demo Manager.

By default the bot start with CSGO Demo Manager and is still running when the app is closed but you can change it from settings. It's configurable by right clicking on the systray icon and it stop working when you are ingame.

![CSGO Suspects Bot](/images/docs/suspects/bot.jpg)

---

<a class="anchor" id="found-suspects"></a>

### Where can I see if suspects have been banned? [#](/docs/suspects#found-suspects)

The number of new suspects banned since the last time you used the application is displayed in the small badge next to the button `"Suspects"`. You have to wait some seconds when the application is started to have the updated number.

---

<a class="anchor" id="still-playing"></a>

### A suspect has been banned but he still can play CSGO [#](/docs/suspects#still-playing)

VAC ban doesn't mean necessary a CSGO ban. The Steam API doesn't indicates on which games a player has been banned.

---

<a class="anchor" id="steam-api-key"></a>

### Using a custom Steam API key [#](/docs/suspects#steam-api-key)

1. Generate a key from [Steam](https://steamcommunity.com/dev/apikey)
2. Copy/paste your key in the text field from the settings (in the "Misc" tab)
3. Click on "Apply"
4. If you don't have any error message, your key will be used for the next requests
