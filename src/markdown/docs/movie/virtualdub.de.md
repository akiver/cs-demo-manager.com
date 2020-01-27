### Nutzung

Wird [VirtualDub](http://www.virtualdub.org/) benutzt, wird das Video mit dem unkomprimierten VirtualDub Codec kodiert.

Das ist auch die empfohlene Möglichkeit wenn Sie das Video bearbeiten möchten.

Man kann bei der benutzung von FFmpeg die Qualität auf 0 (`-qp 0`) stellen, um ein verlustfreies Video zu generieren aber aufgrund von Codec-Variationen kann die Vorschau von Videobearbeitungssoftware jedoch nur schlecht gerendert werden.

---

### Optionen

Da VirtualDub nicht komprimierte Videos (im Anwendungskontext) generieren soll, sind keine Optionen für VirtualDub erforderlich.

---

### Wie Funktioniert es?

Die Anwendung benutzt die ["VirtualDub scripting language"](http://www.virtualdub.org/docs/vdscript.txt) um die Kodierung der Videos zu Automatisieren.

Jedes mal wenn man die generation eines Videos mit VirtualDub startet, wird eine Scriptdatei namens `csgodm.jobs` erstellt.

Man findet sie in VirtualDubs Installationsverzeichnis.

<br />
Das Script tut folgendes:

1. Import der Bilddateien (`.tga`)
2. Import der Audiodatei (`.wav`)
3. Stellt die Video Framerate ein
4. Setzt die Video / Audio komprimierung auf Unkomprimiert
5. Speichert es als AVI-Datei

<br />
Es führt im Wesentlichen die Aufgaben aus, die man beim manuellen Generieren der AVI-Datei ausgeführt hat.
