<a class="anchor" id="watch-highlow"></a>

### Les boutons pour regarder les highlights / lowlights sont grisés? [#](/fr/docs/watch#watch-highlow)

Vous devez ajouter au moins 1 compte dans l'application puis le définir comme `Compte ciblé` depuis les options.

Il y a 2 façons d'ajouter un compte:

- Depuis le scoreboard (recommendé, c'est le plus simple)
- Depuis les options

<a class="anchor" id="add-account-quick"></a>

#### Comment ajouter un compte depuis le scoreboard (recommendé) [#](/fr/docs/watch#add-account-quick)

1. Analysez une démo contenant votre compte et rendez-vous sur la fiche de la démo
2. Faite un clic droit sur le joueur depuis le scoreboard et cliquez sur `Ajouter aux comptes`

![Ajout compte depuis scoreboard](/images/docs/watch/add-account-scoreboard.png)

<a class="anchor" id="add-account-settings"></a>

#### Comment ajouter un compte depuis les options [#](/fr/docs/watch#add-account-settings)

1. Cliquez sur `Options` puis `Comptes`

![Options des comptes](/images/docs/watch/add-account-step1.png)

2. Cliquez sur `Ajouter compte`

![Ajouter compte](/images/docs/watch/add-account-step2.png)

3. Copiez / collez votre lien Steam community ou votre SteamID64 et cliquez sur `OK`

<a class="anchor" id="focus-account"></a>

#### Comment définir le compte ciblé pour les highlights / lowlights [#](/fr/docs/watch#focus-account)

1. Cliquez sur `Options` puis `Comptes`
2. Cliquez sur le compte que vous voulez puis cliquez sur `Se concentrer sur ce compte`

![Selection compte cible](/images/docs/watch/add-account-step3.png)

<p class="has-text-warning">TIP: Vous pouvez regarder les highlights / lowlights de n'importe quel joueur depuis le scoreboard.</p>

![Highlights / lowlights scoreboard](/images/docs/watch/scoreboard-highlow.png)

---

<a class="anchor" id="afx-cpp"></a>

### J'ai une erreur "AfxCppCli.dll" a la lecture de la démo [#](/fr/docs/watch#afx-cpp)

Vous devez installer [Visual C++ Redistributable pour Visual Studio 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145).

---

<a class="anchor" id="stuck-menu"></a>

### Ma démo ne démarre pas et le jeu reste sur le menu principal [#](/fr/docs/watch#stuck-menu)

C'est sans doute car il y a des caractères spéciaux dans le chemin de la démo.
Le jeu ne reconnait pas certains caractères ce qui fait qu'il ne la trouve pas et reste figé sur l'écran principal.

Déplacez la démo dans un répertoire sans caractères speciaux ni espaces pour résoudre ce probleme.

<p class="has-text-warning">Regardez la console du jeu pour avoir plus de détails.</p>

---

<a class="anchor" id="stuck-loading"></a>

### Mon jeu reste figé sur l'écran de chargement [#](/fr/docs/watch#stuck-loading)

La démo utilise sans doute une ancienne version de la map.
Le jeu ne l'indique peut-être pas mais il est en train de la télécharger depuis le Workshop CSGO.
Patientez et la lecture devrait commencer.

---

<a class="anchor" id="vdm"></a>

### Que sont les fichiers .VDM générés par l'application? [#](/fr/docs/watch#vdm)

Les [fichiers VDM](https://developer.valvesoftware.com/wiki/Demo_Recording_Tools) générés par l'application permettent d'indiquer au jeu les actions a faire pendant la lecture des démos (avance rapide, transitions, cibler un joueur...).

Il sont utilisés pour les highlights / lowlights, regarder des kills ou stuff précis. Ces fichiers ont le même nom que la démo, seul l'extension change.

A noter que si un fichier `.vdm` éxiste déjà, il sera écrasé par l'application.

---

<a class="anchor" id="hlae"></a>

### A quoi sert l'option "Activer HLAE"? [#](/fr/docs/watch#hlae)

Quand `Activer HLAE` est coché, le jeu se lance en utilisant [Half Life Advanced Effects](https://github.com/ripieces/advancedfx/wiki/AfxHookSource).

<p class="has-text-warning">Si vous n'etes pas un moviemaker ou que vous ne savez pas l'impact que ca a, laissez cette option désactivée.</p>

---

<a class="anchor" id="steam-client-error"></a>

### J'ai une erreur du client Steam quand je lance une démo [#](/docs/watch#steam-client-error)

C'est certainement parce que Steam a été lancé avec les droits administrateur. Il faut lancer Steam sans les droits d'administrateur.

Voir cette [issue pour plus d'informations](https://github.com/akiver/CSGO-Demos-Manager/issues/376).
