### Why is HLAE required?

In addition to offering useful features not available by default in the game, HLAE is required because there is an audio [sync issue](https://github.com/ValveSoftware/csgo-osx-linux/issues/1534) with the `startmovie` command.

---

### Options

![HLAE options](docs/movie/hlae-options.png)

#### csgo.exe path

- Location to the `csgo.exe` file.
- This is required to have HLAE working.
- 
#### Enable movie making config parent folder

- From the HLAE documentation:

<em>
When enabled you can set a parent folder for your movie making config for the game. The game will create a sub-folder called cfg there and store config.cfg and video settings in that folder. Also you can put your movie making config into that cfg sub-folder, however the game will load those only if they are not present in the csgo/cfg folder already.
</em>

#### How can I add my own mirv_ commands?

- You can add `mirv_` commands in the CFG input, they will be executed when the playback start.

#### Note about HLAE update

- To avoid game crashes, it's strongly recommended to have the latest HLAE version.
- You can update it by clicking on the *"Update"* button.
