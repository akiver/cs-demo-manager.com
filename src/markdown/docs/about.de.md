<a class="anchor" id="data-generation"></a>

### Wie werden die Daten generiert? [#](/docs/about#data-generation)

Valve hat ein Tool namens Demoinfogo, geschrieben in C++, veröffentlicht welches .dem-Datein Analysiert un dadurch eine Menge Daten abruft.

CSGO Demos Manager benutzt eine C# version von diesem Tool welche die Leute hinter DemoInfo (Thanks guys!) übertragen haben.

---

<a class="anchor" id="pov-support"></a>

### Funktionieren POV Demos? [#](/docs/about#pov-support)

Nein und aufgrund Technischer Gründe denke Ich das wird auch nichts mehr, sorry.

---

<a class="anchor" id="provider-support"></a>

### Funktioniert es bei ESEA, Faceit oder anderen Liga Demos? [#](/docs/about#provider-support)

Momentan unterstützt der CSGO Demos Manager Demos von Valve (Matchmaking / Officials Turniere), ESEA, FaceIt, CEVO, eBot und PopFlash.

Demos von privaten Servern, die Befehle wie mp_restartgame und tv_record verwenden, werden offiziell nicht unterstützt. Man kann jedoch die Demo-Quelle in der Anwendung ändern und erneut analysieren. Möglicherweise sind jedoch noch falsche Daten vorhanden, da Demos von privaten Servern nicht vollständig unterstützt werden.

---

<a class="anchor" id="vac"></a>

### Ist es VAC Sicher? [#](/docs/about#vac)

Ja. Weder modizfizert die Anwendung die Spieldatein, noch hat sie Zugang zu dem Prozesses.

Seit Version 2.2.0 ist in den Einstellungen eine Option verfügbar, um das Spiel mit HLAE zu starten. HLAE ist technisch gesehen ein Hack, wenn diese Option aktiviert ist wird das Spiel immer mit dem Parameter "-insecure" gestartet, der verhindert dass man eine Verbindung zu einem durch VAC geschützten Server herstellen kann. Wenn Sie HLAE nicht benötigen, aktivieren Sie diese Option auch nicht.

---

<a class="anchor" id="bug"></a>

### Ich bin auf einen Käfer getroffen, was kann ich tun? [#](/docs/about#bug)

Wenn Sie auf einen Fehler gestoßen sind oder Demodaten falsch sind, senden Sie bitte eine E-Mail an contact@csgo-demos-manager.com mit der Fehlerprotokolldatei (über die Einstellungen zugänglich). Wenn es sich um eine bestimmte Demo handelt, fügen Sie bitte einen Link zum Herunterladen hinzu. Vielen Dank.

---

<a class="anchor" id="os-compatibility"></a>

### Funktioniert es auch auf MAC OS / Linux? [#](/docs/about#os-compatibility)

Nein aber die nächste Hauptversion wird dass.

---

<a class="anchor" id="mobile-app"></a>

### Gibt es eine Mobile Anwendung? [#](/docs/about#mobile-app)

Nein.
