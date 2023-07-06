<a class="anchor" id="bot"></a>

### Qu'est que "CSGO Suspects BOT"? [#](/fr/docs/suspects#bot)

`CSGO Suspects BOT` est un petit programme visible dans la traybar de Windows qui a interval régulier vérifie si un ou des suspects ont été bannis.
Le bot communique avec l'application principale mais il est possible de le lancer indépendamment car se sont 2 applications distinctes.

<br/>

Par défaut le bot se lance avec CSGO Demo Manager et reste actif a la fermeture de l'application principale.
Vous pouvez changer se comportement depuis les options accessible en faisant un clic droit sur l'icone dans la traybar de Windows.

![CSGO Suspects Bot](/images/docs/suspects/bot.jpg)

<p class="has-text-warning">Le bot est inactif lorsque CSGO est lancé.<p>

---

<a class="anchor" id="found-suspects"></a>

### Où puis-je voir si un suspect a été banni? [#](/fr/docs/suspects#found-suspects)

Le nombre de suspects bannis depuis le dernier lancement de l'application est affiché sur un "badge" près du bouton `"Suspects"`. Ce nombre peut prendre quelques secondes avant de se mettre a jour au lancement de l'application.

Si le bot est lancé et qu'il détecte un ban alors il enverra une notification Windows.

---

<a class="anchor" id="still-playing"></a>

### Un suspect a été banni mais il peut toujours jouer a CSGO? [#](/fr/docs/suspects#still-playing)

Un bannissement VAC ne veut pas toujours signifier un bannissement CSGO.
L'API de Steam n'indique pas pour quel jeu le compte a été banni.

---

<a class="anchor" id="steam-api-key"></a>

### Using a custom Steam API key [#](/docs/suspects#steam-api-key)

1. Generate a key from [Steam](https://steamcommunity.com/dev/apikey)
2. Copy/paste your key in the text field from the settings (in the "Misc" tab)
3. Click on "Apply"
4. If you don't have any error message, your key will be used for the next requests
