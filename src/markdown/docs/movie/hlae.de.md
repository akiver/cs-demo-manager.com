### Warum ist HLAE notwendig?

Einer Seits bietet es viele nützliche Funktionen, die im Spiel standartmäßig gegeben sind und anderer Seits ist HLAE notwendig weil es ein Audio [Sync Problem](https://github.com/ValveSoftware/csgo-osx-linux/issues/1534) mit dem `startmovie` Befehl gibt, dass so gelöst wird.

---

### Optionen

![HLAE Optionen](docs/movie/hlae-options.png)

#### csgo.exe Pfad

- Standpunkt der `csgo.exe` Datei.
- Diese wird benötigt damit HLAE funktioniert.

#### Aktiviere "movie making config parent folder"

- Aus der HLAE Dokumentation:

<em>
Wenn aktiviert kannst du einen übergeordneten Ordner für deine Movie Making Config festlegen. Das Spiel erstellt dort einen Unterordner mit dem Namen cfg und speichert die config.cfg und Videoeinstellungen in diesem Ordner. Du kannst deine Movie-Making-Config auch in den cfg Unterordner legen, allerdings wird das Spie sie nur laden wenn sie nicht bereits in dem csgo/cfg Ordner sind.
</em>

#### Wie füge ich meine eigenen mirv_ befehle hinzu?

- Du kannst `mirv_` Befehle in der cfg Eingabe eintragen, diese werden bei bei beginn der Wiedergabe ausgeführt.

#### Notiz über HLAE Update

- Um Spielabstürze zu vermeiden, wird es sehr geraten die neuste HLAE Version zu besitzen.
- Man kann es jederzeit über den *"Update"* Knopf aktualisieren.
