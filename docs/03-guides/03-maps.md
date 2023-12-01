---
title: Maps
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To support a map the application needs to know some information about it (images, coordinates…).  
The application has built-in support for official Counter-Strike maps by default, but you can add your own maps.

## Adding/Editing a map

You can add or edit a map from the settings in the `Maps` tab.

![Maps](/img/documentation/guides/maps/maps_edition.png)

### Name _(mandatory)_

The name of the map is mandatory and must be unique.  
It must match the name of the map in-game.

### Coordinate/scale _(optional)_

The fields `x`, `y`, and `scale` are optional.  
Some features, such as heatmap and 2D replay will work only if they are present.

These values are available in a file called `map_name.txt` where `map_name` is the name of the map.  
Example with the map `de_dust2`, the file `de_dust2.txt` contains:

```
"de_dust2"
{
	"pos_x"		"-2476" // Coordinate X
	"pos_y"		"3239" // Coordinate Y
	"scale"		"4.4" // Scale
}
```

Follow the instructions below to find the files:

<Tabs groupId="game">
<TabItem value="cs2" label="CS2">

1. Download and launch [Source 2 viewer](https://valveresourceformat.github.io/)
2. Open the file `pak01_dir.vpk` located in the CS2 folder installation (`C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo`)
3. Reveal the content of the folder `resource/overviews`
4. Double click on the text file of the map that you want to open it and get the values

</TabItem>

<TabItem value="csgo" label="CS:GO">

1. Go to the folder `C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\resource\overviews`
2. Open the text file of the map that you want to get the values

</TabItem>
</Tabs>

:::warning
All official Counter-Strike maps have this file, but custom maps may not have it.  
If that's the case you will have to contact the map maker to get the values.
:::

### Thumbnail _(optional)_

The map's thumbnail is an image displayed in some application parts.
It's optional and must be in `PNG` format with a maximum resolution of `600x340`.

### Radars _(optional)_

There are 2 radar images, the upper and lower radars.  
They are used for features such as heatmap and 2D replay and are both optional.  
The lower radar should be filled if the map has 2 levels like `de_nuke`.  
Images must be in `PNG` format, and their resolution must be `1024x1024` pixels.

## Resetting default maps

:::info
Resetting maps will not delete your custom maps.  
It reset only the official Counter-Strike maps supported by the application.
:::

1. Go to the settings
2. Click on the `Maps` tab
3. Click on the `Reset default maps` button at the top
