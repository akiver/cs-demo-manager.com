<a class="anchor" id="data-generation"></a>

### Comment les données sont générées? [#](/fr/docs/about#data-generation)

Valve a rendu public le programme demoinfogo écrit en C++ qui permet de récupérer les données contenu dans les fichiers .dem.

CSGO Demo Manager utilise en interne une version de demoinfogo écrite en C# par les developpeurs du projet DemoInfo (Merci a eux!).

---

<a class="anchor" id="pov-support"></a>

### Est-ce que les démos POV sont supportées? [#](/fr/docs/about#pov-support)

Les démos POV sont reconnues, c'est a dire visible dans la liste des démos sur votre disque dur mais il n'est pas possible de les "analyser". Pour des raisons techniques il est peu probable que cela change.

<a class="anchor" id="provider-support"></a>

### Est-ce que les démos provenant de FaceIt, ESEA... sont supportées? [#](/fr/docs/about#provider-support)

CSGO Demo Manager est capable d'"analyser" les démos provenant de Valve (Matchmaking / tournois officiels), ESEA, FaceIt, CEVO, eBot et PopFlash.

Les démos provenant de serveurs privés utilisant des commandes tels que mp_restartgame ou tv_record ne sont pas officiellement supportées. Il est possible de changer la source des démos depuis l'application puis l'analyser mais les données peuvent etre incorrectes car les démos provenant de serveurs privés ne sont pas supportés.

---

<a class="anchor" id="vac"></a>

### Est-ce que je peux avoir un ban VAC en utilisant l'application? [#](/fr/docs/about#vac)

Non. L'application ne modifie aucun fichiers du jeu et a aucun moment elle tente d'accéder au processus du jeu pour en modifier son contenu.

Depuis la version 2.2.0, l'application contient une option déstinée aux moviemakers qui permet de démarrer le jeu en utilisant HLAE. Techniquement HLAE est un "hack", quand cette option est activée CSGO est toujours lancé avec le paramètre -insecure qui empêche de se connecter aux serveurs utilisant VAC. Si vous n'avez pas besoin d'HLAE, n'activez pas cette option.

---

<a class="anchor" id="bug"></a>

### Je rencontre un bug, que faire? [#](/fr/docs/about#bug)

Si vous rencontrez un bug, merci de créer une issue sur [GitHub](https://github.com/akiver/CSGO-Demos-Manager/issues) en mettant en pièce jointe le fichier d'erreurs accessible depuis les options et la démo permettant de reproduire le bug.

---

<a class="anchor" id="os-compatibility"></a>

### Est-ce que l'application est compatible MAC OS / Linux? [#](/fr/docs/about#os-compatibility)

Non mais la prochaine version majeure le sera.

---

<a class="anchor" id="mobile-app"></a>

### Est-ce qu'il y a une version mobile? [#](/fr/docs/about#mobile-app)

Non.
