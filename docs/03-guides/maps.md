---
title: Maps
sidebar_position: 3
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
2. If it's an official Valve map, open the file `pak01_dir.vpk` located in the CS2 folder installation (`C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo`) otherwise open the `vpk` file of the map in `C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo_community_addons\map_name\map_name_dir.vpk`
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
Images must be in `PNG` format and square (1:1 aspect ratio).

Follow the instructions below to get the radar images:

<Tabs groupId="game">
<TabItem value="cs2" label="CS2">

1. Download and launch [Source 2 viewer](https://valveresourceformat.github.io/)
2. If it's an official Valve map, open the file `pak01_dir.vpk` located in the CS2 folder installation (`C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo`) otherwise open the `vpk` file of the map in `C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\game\csgo_community_addons\map_name\map_name_dir.vpk`
3. Reveal the content of the folder `panorama/images/overheadmaps`
4. Right click on the file `map_name_(lower)_radar.ctex_c` and click on `Decompile and export` to export it as a `PNG` image

</TabItem>

<TabItem value="csgo" label="CS:GO">

1. Go to the folder `C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Global Offensive\csgo\resource\overviews`
2. Convert the `.dds` file to a `PNG` image using either [GIMP](https://www.gimp.org/downloads/), [Paint.NET](https://www.getpaint.net/), or an online converter.

:::warning
All official Counter-Strike maps have this file, but custom maps may not have it.  
If that's the case you will have to contact the map maker to get the values.
:::

:::danger
Make sure to install your image editor plugin to support the `.dds` format.
:::

</TabItem>
</Tabs>

:::tip
[Simple Radar](https://readtldr.gg/simpleradar) offers high-quality radar images.
:::

## Resetting default maps

:::info
Resetting maps will not delete your custom maps.  
It reset only the official Counter-Strike maps supported by the application.
:::

1. Go to the settings
2. Click on the `Maps` tab
3. Click on the `Reset default maps` button at the top
