<a class="anchor" id="data-generation"></a>

### How is the data generated? [#](/docs/about#data-generation)

Valve has released a tool written in C++ called demoinfogo which allow to parse .dem files to retrieve a lot of data.

CSGO Demo Manager use a C# version of this tool ported by the guys behind the project called DemoInfo (Thanks guys!).

---

<a class="anchor" id="pov-support"></a>

### Does it work with POV demos? [#](/docs/about#pov-support)

No and for technicals reasons I don't think it will, sorry.

---

<a class="anchor" id="provider-support"></a>

### Does it work with ESEA, Faceit and other leagues demos? [#](/docs/about#provider-support)

At the moment CSGO Demo Manager support demos from Valve (Matchmaking / officials tournaments), ESEA, FaceIt, CEVO, eBot and PopFlash.

Demos from private servers that are using commands such as mp_restartgame and tv_record are not officially supported. However you can change the demo's source from the application and re-analyze it but you may still have incorrect data as demos from private servers are not fully supported.

---

<a class="anchor" id="vac"></a>

### Is it VAC safe? [#](/docs/about#vac)

Yes. The application doesn't modify any game's files nor access game's process.

Since version 2.2.0 there is an option available from settings to start the game using HLAE. HLAE is technically a hack and when this options is enabled the game is always started with the parameter -insecure which prevents you to connect to any server protected by VAC, so you are safe. If you don't need HLAE don't enable this option.

---

<a class="anchor" id="bug"></a>

### I encountered a bug, what can I do? [#](/docs/about#bug)

If you encountered a bug or demos data are incorrect, please create an issue on [GitHub](https://github.com/akiver/CSGO-Demos-Manager/issues) with the errors log file (accessible from settings). If it's related to a specific demo, please attach a link to download it, thank you.

---

<a class="anchor" id="os-compatibility"></a>

### Does it work on MAC OS / Linux? [#](/docs/about#os-compatibility)

No but the next major version will.

---

<a class="anchor" id="mobile-app"></a>

### Is there a mobile application? [#](/docs/about#mobile-app)

No.
