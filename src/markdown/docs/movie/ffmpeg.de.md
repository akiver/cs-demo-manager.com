### Nutzung

Bei der benutzung von FFmpeg wird das Video mit dem x264 Codec kodiert.

Das ist auch die empfohlene Möglichkeit wenn Sie ein direkt anschaubares Video möchten.

---

### Optionen

![FFmpeg options](/images/docs/movie/ffmpeg-options.png)

#### Video Qualität

- Entsprechend dem x264 `-qp` Parameter.
- Möglich ist ein Interval von 0 bis 51 bei dem 0 das bestmögliche ist (Ergebnis ist ein verlustfreies Video).

#### Video Framerate

- Das ist nicht das Selbe wie das bei der In-Game Aufnahme (`host_framerate`).
- Man ist zum Beispiel in der Lage mit 300fps aufzunehmen aber dabei nur ein 60fps Video zu Produzieren.

#### Audio Bitrate

- Das Audio wird mit dem [LAME MP3](http://lame.sourceforge.net/) Kodierer kodiert.
- Extra Eingabe Parameter.
- Weitere Eingabe Parameter für das FFmpeg CLI.
- Das ist jedoch nur für erfahrene Nutzer, Sie können allerdings alle möglichen Informationen in der FFmpeg [Documentation](https://www.ffmpeg.org/documentation.html) finden.

#### Extra Parameter

- Weitere Ausgabe Parameter für das FFmpeg CLI.
- Das ist jedoch nur für erfahrene Nutzer, Sie können allerdings alle möglichen Informationen in der FFmpeg [Documentation](https://www.ffmpeg.org/documentation.html) finden.

#### Befehlszeilen Eingabe

- Das ist der Befehl der genutzt wird um FFmpeg zu starten.
- Dieser ist nicht bearbeitbar, sondern bloss für die Informationen.

#### Wie funktioniert es?

- Die Anwendung startet FFmpeg mit den richtigen Parametern, um das Video aus den Roh-Datein zu generieren.
