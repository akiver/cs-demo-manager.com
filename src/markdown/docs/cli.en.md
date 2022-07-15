Since version 2.14.0, CSGO Demo Manager comes with a command line interface (CLI).

The CLI has multiple commands allowing you to do the following tasks without running the GUI:

- Analyze demos (data will be available from the application then)
- Export demos to JSON
- Export demos to XLSX
- Download the last Matchmaking demos of the logged Steam account or from CSGO share codes

<a class="anchor" id="installation"></a>

# Installation [#](/docs/cli#installation)

The CLI is automatically installed when you install the application.

The binary's name is `csgodm.exe` and its default location is `C:\Program Files (x86)\CSGO Demos Manager\csgodm.exe`.

<p class="has-text-warning">
It's recommended to enable the checkbox "Add to PATH variable" during the installation, it will allow running the CLI by typing <code>csgodm</code> instead of the full path from your terminal.
</p>

![Checkbox PATH variable](/images/docs/cli/checkbox-installation-path.png)

<a class="anchor" id="usage"></a>

# Usage [#](/docs/cli#usage)

Open a Windows terminal and type `csgodm`, it will diplay all available commands.

If you have a message <i>"csgodm not found"</i>, it means that the CSGO Demo Manager installation folder (where `csgodm.exe` is located) is not in your `PATH` environment variable.

To resolve this, you have to add the folder where CSGO Demo Manager is installed [to your "PATH" environment variable](https://windowstect.com/add-new-path-to-path-environment-variable-in-windows/).  
The default installation folder is `C:\Program Files (x86)\CSGO Demos Manager`.  
You could also type the full binary location in your terminal (`C:\Program Files (x86)\CSGO Demos Manager\csgodm.exe` by default).

<a class="anchor" id="commands"></a>

# Commands [#](/docs/cli#commands)

<a class="anchor" id="command-analyze"></a>

## analyze [#](/docs/cli#command-analyze)

Analyze demos and cache data locally.

<br />

Usage:  
`csgodm analyze demoPaths... [--source] [--force]`

- Demos path can be either .dem files location or a directory. It can be relative or absolute.
- The `--source` argument force the analysis logic of the demo analyzer. Available values: `valve`,`esea`,`ebot`,`faceit`,`cevo`.
- The `--force` argument force re-analyzing demos that have already been analyzed.

<br />

Examples:

Analyze 1 demo:  
`csgodm analyze "C:\Users\username\Desktop\demo.dem"`

Analyze multiple demos:

`csgodm analyze "C:\Users\username\Desktop\demo.dem" "C:\Users\username\Desktop\demo2.dem"`

Analyze all demos in a directory using the ESL analyzer and re-analyze demos that have already been analyzed:

`csgodm analyze "C:\Users\username\Desktop\MyFolder" --source esl --force`

<a class="anchor" id="command-download"></a>

## download [#](/docs/cli#command-download)

Download the last Matchmaking demos of the logged Steam account or from CSGO share codes.

<br />

Usage:  
`csgodm download [shareCodes...] [--output]`

- The `--output` argument specify the directory where demos will be downloaded.  
  Default to the CSGO `"replays"` folder or the current directory if the `"replays"` folder doesn't exsits.

<br />

Examples:

To download the last MM demos of the current Steam account:  
`csgodm download`

To download demos from share codes:  
`csgodm download CSGO-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX CSGO-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX`

To change the directory where demos will be downloaded:  
`csgodm download --output "C:\Users\username\Downloads"`

<a class="anchor" id="command-json"></a>

## json [#](/docs/cli#command-json)

Export demos into JSON files.

<br />

Usage:  
`csgodm json demoPaths... [--output] [--source] [--force-analyze]`

- Demos path can be either .dem files location or a directory. It can be relative or absolute.
- The `--output` argument specify the directory where output files will be saved.
- The `--source` argument force the analysis logic of the demo analyzer. Available values: `valve`,`esea`,`ebot`,`faceit`,`cevo`.
- The `--force-analyze` argument force re-analyzing demos that have already been analyzed.

<br />

Examples:

Export a single demo:  
`csgodm json "C:\Users\username\Desktop\demo.dem"`

Export multiple demos:  
`csgodm json "C:\Users\username\Desktop\demo.dem" "C:\Users\username\Desktop\demo2.dem"`

Export all demos in a directory using the ESL analyzer and save it in a custom directory:  
`csgodm json "C:\Users\username\Desktop\MyFolder" --output "C:\Users\username\Documents" --source esl`

<a class="anchor" id="command-xlsx"></a>

## xlsx [#](/docs/cli#command-xlsx)

Export demos into XLSX files

Usage:  
`csgodm xlsx demoPaths... [--output] [--source] [--single] [--force-analyze]`

- Demos path can be either `.dem` files location or a directory. It can be relative or absolute.
- The `--output` argument specify the directory where output files will be saved.
- The `--source` argument force the analysis logic of the demo analyzer. Available values: `valve`,`esea`,`ebot`,`faceit`,`cevo`.
- The `--single` argument generates a single XLSX file instead of one per demo.
- The `--force-analyze` argument force re-analyzing demos that have already been analyzed.

<br />

Examples:

Export a demo:  
`csgodm xlsx "C:\Users\username\Desktop\demo.dem"`

Export multiple demos:  
`csgodm xlsx "C:\Users\username\Desktop\demo.dem" "C:\Users\username\Desktop\demo2.dem"`

Export all demos in a directory using the ESL analyzer and save it in a custom directory:  
`csgodm xlsx "C:\Users\username\Desktop\MyFolder" --output "C:\Users\username\Documents" --source esl`
