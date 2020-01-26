### Warum ist HLAE notwendig?

Einer Seits bietet es viele nützliche Funktionen, die im Spiel standartmäßig nicht sind und anderer Seits ist HLAE notwendig weil es ein Audio [Sync Problem](https://github.com/ValveSoftware/csgo-osx-linux/issues/1534) mit dem `startmovie` Befehl gibt, das so gelöst wird.

---

### Optionen

![HLAE Optionen](docs/movie/hlae-options.png)

#### csgo.exe Pfad

- Standpunkt der `csgo.exe` Datei.
- Diese wir benötigt damit HLAE funktioniert.
- 
#### Aktiviere Movie Making Config Parent Ordner

- Aus der HLAE Dokumentation:

<em>
Wenn aktiviert, setzt du ein übergeordneten Ordner für deine Movie-Making-Config für das Spiel. Das Spiel wird sich selbst einen Unterordner names CFG anlegen mit der config.cfg und den Video Einstellungen drin. Du kannst deine Movie-Making-Config auch in den CFG Ordner legen, allerdings wird das Spie sie nur laden wenn sie nicht bereits in dem CSGO/CFG Ordner ist.
</em>

#### Wie füge ich meine eigenen mirv_ befehle hinzu?

- Du kannst `mirv_` Befehle in der Eingabe des CFG eintragen, diese werden bei der Wiedergabe ausgeführt.

#### Notiz über HLAE Update

- Um Spielabstürze zu vermeiden, wird es sehr geraten die neuste HLAE Version zu besitzen.
- Man kann es jederzeit über den *"Update"* Knopf aktualisieren.
