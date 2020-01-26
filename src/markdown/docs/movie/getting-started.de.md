<a class="anchor" id="must-known"></a>

### Sollte man Wissen [#](/docs/movie/getting-started#must-known)

CSGO Demos Manager erstellt nicht auf die selbe Art und Weise ein Video wie es Anwendungen wie Fraps oder Dxtory tun.

Da diese Funktion hauptsächlich für die Videobearbeitung genutzt wird, wird die beste Qualität benötigt.

Das ist der Grund warum die Anwendung den In-Game Befehl `startmovie` benutzt.

<br />

Der `startmovie` Befehl generiert Roh-Dateien die sich aus einer menge Bild Datein (`.tga`) und einer Audio Datei (`.wav`) zusammensetzt.

Die genaue Anzahl der Bilder kommt auf die gewählte Framerate und auf die länge der Sequenz an.

Zum Beispiel hat man bei einer Framerate von `60` und einer länge von `20` Sekunden am Ende `20 * 60 = 1200` Bilder.

<p class="has-text-warning">
Roh-Dateien verbrauchen sehr viel Speicherplatz, die Anwendung zeigt an wie viel Platz benötigt wird gibt eine Warnung sollte diser 30GB überschreiten.
</p>

<br />

Um den Interval zu definieren den man aufnehmen will, muss man einen `start tick` und einen `end tick` angeben.

Ticks sind in dem Spiel die Einheit für Zeit, man kann sie mit Sekunden vergleichen.

Wie viele Ticks jedoch einer Sekunde entsprechen hängt von der Tickrate des Servers ab.

Zum Beispiel, die Tickrate der Matchmaking Server ist `64`, somit ist dort `1 second` gleichzusetzten mit `64 ticks`.

<p class="has-text-warning">
Weil es für uns als Menschen leichter ist, Sekunden zu benutzen ermöglicht es die anwendung die länge in Sekunden an zu geben da diese dann automatisch zu den Start / End Ticks umgerechnet wird.
</p>

---

<a class="anchor" id="how-it-works"></a>

### Wie Funktioniert es? [#](/docs/movie/getting-started#how-it-works)

Wenn man eine Video generation startet, werden folgende Schritte erfüllt:

1. Erstellung einer `.vdm` Datei welche beschreibt was alles während der Wiedergabe passiert (gototick, startmovie...)
2. Erstellung einer `.cfg` Datei welche die benuzerdefinierte Konfiguration des Nutzers beinhaltet
3. Das Spiel wird gestartet und somit auch die Demo
4. Die `.vdm` zwingt die Wiedergabe dazu Dinge auszuführen wie zum Beispiel die `.cfg file`, Aufnahme startet...
5. VirtualDub oder FFmpeg werden gestartet um das Video zu Kodieren sobald die Aufname fertig ist und das Spiel beendet
6. Alle Daten die dabei entstanden sind werden entsorgt sobald die Kodierung fertig gestellt ist

---

<a class="anchor" id="known-issues"></a>

### Bekannte Probleme [#](/docs/movie/getting-started#known-issues)

Manchmal stürzt Steam beim starten von CSGO ab, ein einfach Neustart behebt die allerdings in den meisten Fällen schon.

---

<a class="anchor" id="vd-ffmpeg"></a>

### Wo liegt der unterschied zwischen VirtualDub und FFmpeg? [#](/docs/movie/getting-started#vd-ffmpeg)

[VirtualDub](http://www.virtualdub.org/) wird von der Anwendung nur genommen um unkomprimierte Videos zu erstellen und [FFmpeg](https://www.ffmpeg.org/) um komprimierte x264 Videos zu generieren.

---

<a class="anchor" id="why-vd"></a>

### Warum nicht nur VirtualDub nutzen? [#](/docs/movie/getting-started#why-vd)

Weil VirtualDub keinen Codec wie den x264 standartmäßig mit inklusive hat, man müsste es dann Selbst instalieren was ein sehr Nerviger Prozess ist.

---

<a class="anchor" id="pov-demos"></a>

### Funktionieren POV Demos? [#](/docs/movie/getting-started#pov-demos)

Ja aber nur ohne Zeitleiste..

Allerdings kann man sich wichtige Ticks dann mit einem Kommentar notieren.

---

<a class="anchor" id="corrupted-demos"></a>

### Notiz über beschädigte Demos [#](/docs/movie/getting-started#corrupted-demos)

Ist eine Demo Beschädigt, kann man dennoch Videos generieren allerdings fehlen einem dann die Zeitleiste und die benötigte Speicherplatzrechnung.

---

<a class="anchor" id="csgo-compatibility"></a>

### CSGO Kompatibilität [#](/docs/movie/getting-started#csgo-compatibility)

Die Film Funktion funktioniert aber auch nur mit [CSGO 1.36.1.8](http://blog.counter-strike.net/index.php/2017/12/19817/) und allen folgenden.

Man kann es nicht mit Älteren Varianten nutzen.

---

<a class="anchor" id="howto-video"></a>

### Wie macht mans (Video) [#](/docs/movie/getting-started#howto-video)

[This video](https://www.youtube.com/watch?v=83anQLF9z18) zeigt wie man ein Video mit VirtualDub generiert und das ist fast der gleiche Prozess wie bei FFmpeg.

Um FFmpeg an stelle von VirtualDub zu nutzen muss man oben erst den Schalter umlegen.

