---
title: Username Blocks
sidebar_position: 1
---

# Username Blocks
The Username blocks can be found at the bottom of the Sensing category in the Toolbox.

PenguinMod deals with usernames in very different ways compared to Scratch, and maybe even TurboWarp.

:::warning
Extensions or even players/users can mess with the username blocks to lie to the project.
Please be careful to not use these blocks as full security behind an important menu.
:::

## (username)
<img src="/img/docimages/username.png" alt="(username)" width="96"></img>
This returns either the logged-in user's username, or a random username that can be changed by the person playing the project.
This value can be spoofed (faked) by an extension or the player themselves. Please be careful when using this block.

### Logged In
When you login on the [home page](https://penguinmod.com), this block will return the username of the currently logged in player.
This block might still return this username if the player logs out during the project, or another block or extension changes this info.

### Logged Out
This block can be any username, usually `player####` with `####` set to random numbers.
This block can be a real Scratch user's name even if the player is logged out.
This name can be changed at the top in `Edit > Change Username` if the player is logged out.

## &lt;logged in?&gt;
<img src="/img/docimages/loggedin.png" alt="&lt;logged in?&gt;" width="96"></img>
This returns either `true` or `false` depending on if the player is logged in on the [Home page](https://penguinmod.com) of PenguinMod.
This value will be false if the username is changed using the `set username to ()` block in the Sensing Expansion extension.
This value can be spoofed (faked) by an extension or the player themselves. Please be careful when using this block.