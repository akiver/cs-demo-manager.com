<a class="anchor" id="empty-list"></a>

### Aucune démos apparait dans la liste? [#](/fr/docs/general#empty-list)

Si aucune démos apparait un message demandant de renseigner les dossiers contenant les démos a du apparaitre au lancement de l'application. C'est du au faite que CSGO n'est pas installé dans le dossier Steam par défaut.

Pour voir les démos, vous devez manuellement ajouter ces 2 dossiers depuis les options de l'application:

- `steamapps/common/Counter-Strike Global Offensive/replays` (Démos provenant du MM)
- `steamapps/common/Counter-Strike Global Offensive/csgo` (Démos POV et provenant du serveur local)

---

<a class="anchor" id="app-crash"></a>

### L'application crash au lancement [#](/fr/docs/general#app-crash)

Si l'application fonctionnait avant d'avoir ajouté de nouvelles démos dans un des dossiers connus par l'application, il se pourrait qu'une des démos soit corrompue. Pour en etre sur, essayez de déplacer ces démos dans un dossier temporaire et de lancer l'application pour vérifier si c'est le cas.

Autrement cela peut-être lié a une corruption du cache / configuration. Dans ce cas essayez les instructions suivantes:

1. Supprimez tous les dossiers dans le répertoire `C:\Users\YOU USERNAME\AppData\Local\AkiVer` et lancez l'application.
2. Si l'application ne se lance toujours pas, supprimez le dossier `CSGO Demos Manager` qui se trouve dans `C:\Users\YOU USERNAME\AppData\Roaming\AkiVer`.
