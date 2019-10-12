<a class="anchor" id="how"></a>

### Comment l'application télécharge mes démos MM? [#](/fr/docs/downloads#how)

CSGO Demos Manager utilise [boiler-writter](https://github.com/akiver/boiler-writter), une version de [Boiler](https://bitbucket.org/ACB/boiler/) adapté au besoin de CSGO Demos Manager. Merci _ACB_ pour avoir créé Boiler!

Boiler-writter retrouve les données des matchs depuis le "Steam Game Coordinator", stock ces informations dans un fichier que CSGO Demos Manager utilise ensuite pour télécharger les démos et générer leur fichier `.info`.

---

<a class="anchor" id="msvcp"></a>

### J'ai une erreur "MSVCP140.dll and VCRUNTIME140.dll is missing from your computer" [#](/fr/docs/downloads#msvcp)

Vous devez installer [Visual C++ VS 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145).

---

<a class="anchor" id="steam-status"></a>

### Mon status Steam passe a "En jeu" quand je clique sur "Télécharger"? [#](/fr/docs/downloads#steam-status)

Afin de retrouver les données des matchs, Steam doit être lancé et connecté a un compte.
Le status change pendant quelques secondes car il est nécessaire d'établir une connexion avec le "Steam Game Coordinator" pour avoir accès aux données des matchs.

Si CSGO était lancé au moment de cliquer sur `"Télécharger"`, il sera automatiquement fermé.

---

<a class="anchor" id="others-accounts"></a>

### Comment télécharger les démos de mes autres comptes? [#](/fr/docs/downloads#others-accounts)

L'application télécharge les démos du compte Steam actuellement connecté. Vous devez vous connecter sur le compte que vous désirez pour télécharger les démos de ce dernier.

---

<a class="anchor" id="notifications"></a>

### Je ne reçois pas de notification pour télécharger mes nouvelles démos? [#](/fr/docs/downloads#notifications)

Le bot doit être lancé pour les recevoir, pas nécessairement l'application principale.

Vous pouvez lancer automatiquement le bot au lancement de CSGO Demos Manager depuis les `Options`.

![BOT settings](docs/downloads/bot-settings.png)

<p class="has-text-warning">Le bot a une option pour démarrer automatiquement au lancement de Windows.</p>

---

<a class="anchor" id="matches-number"></a>

### Je ne vois que mes 8 derniers matchs? [#](/fr/docs/downloads#matches-number)

Actuellement il est possible de récupérer que les 8 derniers matchs, c'est exactement comme dans le menu du jeu.

L'application télécharge une démo seulement si:

- Les fichiers `.dem` et `.info` ne se sont pas présents dans le dossier de téléchargement défini dans les `Options`.
- Le lien de la démo n'a pas encore expiré (Les liens expirent environ 1 mois après le match)
