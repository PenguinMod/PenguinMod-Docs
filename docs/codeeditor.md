---
title: Understanding the Code Editor
sidebar_position: 4
---

# Understanding the Code Editor

The code editor has lots of individual parts that can be named, seen below:
<img src="/img/docimages/studio-diagram.png" alt="Diagram of the Studio"></img>

## The Toolbox
The Toolbox is the menu on the left that allows you to place individual blocks onto the Workspace in the center.
<img src="/img/docimages/toolbox.png" alt="Image of the toolbox" height="640"></img>

Click and drag a block from the Toolbox, then release the mouse on the Workspace to place a block there.

### Categories
Categories are individual sections of the toolbox that contain groups of blocks.
<img src="/img/docimages/categories.png" alt="Categories in the toolbox" height="320"></img>

Each category has blocks related to the name of the category:
- **Motion:** Blocks related to moving & rotating the Sprite
- **Looks:** Blocks related to the visual look & style of the Sprite or parts of it
- **Sound:** Blocks related to playing or modifying sounds
- **Events:** Blocks that run when certain things happen in the project, or run other events
- **Control:** Logical blocks that allow you to control how a block stack runs or ends
- **Sensing:** Blocks related to sensing things on the screen, things about sprites, or sensing devices on the computer
- **Operators:** Blocks related to mathematical operations, modifying text, mechanical operations, etc

We'll return to Variables, Lists, and My Blocks later.

### Extensions
Extensions are various new categories you can import in your project if your project needs them.
<img src="/img/docimages/extension-list.png" alt="Extension list in PenguinMod Studio"></img>

Most simple projects will not require the use of any extensions, but extensions allow for additional functionality in your projects.

You can access this menu by clicking the button with the blocks and a plus at the bottom of the toolbox.
<img src="/img/docimages/extensions-list-button.png" alt="Extension list button in PenguinMod Studio"></img>

Clicking the category filters on the left will allow you to filter out extensions that you aren't looking for.
<img src="/img/docimages/extension-list-filters.png" alt="Extension list filters in PenguinMod Studio"></img>

### Monitors
Click the checkbox next to certain blocks in the toolbox to show a monitor for it.
<img src="/img/docimages/monitorsexample.png" alt="Monitors in the toolbox"></img>

A monitor will appear on the stage, which shows the value of the block that has it's monitor enabled.
<img src="/img/docimages/monitorsexample2.png" alt="Monitors in the stage"></img>

You can right-click on a monitor to change it's look or hide the monitor again.
<img src="/img/docimages/monitorsexampleoption.png" alt="Monitors in the stage"></img>

Dragging a monitor will also move it around on the stage.

## The Workspace
The workspace is where you will place blocks in your project to make things happen in the project.
<img src="/img/docimages/workspace.png" alt="Image of the workspace" height="320"></img>

Drag a block from the Toolbox onto the Workspace to add blocks.

You can drag the block around the Workspace to move it, or drag it back onto the Toolbox to delete it.

Connecting blocks on the top or bottom of another block will create Block Stacks, and spots to place blocks inside of other blocks can be known as Inputs, or Arguments.

**Note: Block Stacks are commonly referred to as Scripts.**

### Shortcuts
View the list of editor shortcuts [here.](/shortcuts#editor)

### Right-click menu
Right-clicking on an empty part of the workspace will open this menu:
<img src="/img/docimages/contextmenu.png" alt="Right-click menu on the workspace"></img>

You might see different options if you have other blocks on the workspace, custom extensions, or addons.

Right-clicking on a block will show different menus based on what the block is, and what addons you have enabled.
<img src="/img/docimages/right-click-block.png" alt="Right click block"></img>

Right-clicking certain blocks with the **Block switching** Editor Addon (enabled by default) will show options to switch it with another block:
<img src="/img/docimages/right-click-switch.png" alt="Right click switch"></img>

### Comments
Adding comments on the Workspace or other blocks will create a small note where you can type any information you want.
<img src="/img/docimages/comment.png" alt="Workspace comment"></img>

- Clicking the arrow on the top of a comment will minimize the comment
- Clicking the X icon on the top of a comment will delete the comment
- Dragging the dashed lines at the bottom right of a comment will resize the comment
- Dragging the top bar of a comment will move the comment around on the workspace

## The Stage
The stage is the area where sprites and backgrounds will appear in the project.
<img src="/img/docimages/stage.png" alt="Editor stage"></img>

Drag a sprite on the screen to move it somewhere else. (Enable the **Non-draggable sprites in editor** addon to change this behavior.)

- Clicking the Blue Flag acts like starting the project, resetting Sprite effects,
  resetting clones and activating <img src="/img/docimages/blocktype_event.png" alt="when flag clicked" height="48"></img> event blocks
- Clicking the Pause icon will pause all blocks and sounds in the project
- Clicking the Stop icon will stop the project, resetting Sprite effects,
  deleting clones and activating <img src="/img/docimages/stop_event.png" alt="when stop clicked" height="48"></img> event blocks

You can click the outwards-pointing arrows button to enter a fullscreen mode,
or click the buttons next to it to scale down the stage in the editor if it takes up too much space.

### Selecting the stage sprite
Next to the Sprite list, the Stage is selectable on the right side.

Selecting the stage will disable certain categories if the stage cannot use any blocks from them:
<img src="/img/docimages/stage-disabled-category.png" alt="Stage disabled category"></img>

The Stage also replaces **Costumes** with **Backdrops**, acting as a background to the project.

## The Sprite List
The Sprite List is a grid list of the sprites inside the project.
<img src="/img/docimages/sprite-list.png" alt="Sprite List"></img>

Hovering over the blue button in the bottom right will allow you to import or draw a sprite.

### What actually is a Sprite?
A Sprite is an object that has Costumes to determine how it looks, has Block Code to determine what it does, and has Sounds to determine the noises it can make.
<img src="/img/docimages/sprite-diagram.png" alt="Sprite diagram"></img>

Block code can switch to different sprite costumes, move the sprite around, resize the sprite, play sprite sounds, etc.

## The Backpack
The Backpack is a menu at the bottom of the editor where you can store Sprites, Costumes, Sounds, or even Block stacks.
<img src="/img/docimages/backpack.png" alt="Backpack"></img>

Content inside the backpack is accessible for other projects you may create.

:::note
Backpacks in PenguinMod save to your computer. If you switch browsers or clear your browsing data, you may lose your backpack.
:::

:::warning
As of now, including a Custom Extension in Code or Sprites inside your backpack may cause unexpected behavior.
Try loading extensions inside the code or sprites before trying to import the content from your backpack.
:::

## Restore Points
Restore Points are an auto-saving feature in PenguinMod in the case you forgot to save your project.
:::danger
Do not rely on Restore Points for saving as they may be randomly deleted by your computer or browser.
If you switch browsers or clear your browsing data, you may lose any restore points you had.

You can save your projects to a file by clicking "Save to your computer" in the top right when you make changes.
:::

<img src="/img/docimages/restore-points.png" alt="Restore Points menu"></img>

You can change the auto-save period between when Restore Points are created in this menu, or delete all existing Restore Points.

Clicking on a Restore Point will confirm if you'd like to load the project from that Restore Point.

It is recommended to configure this auto-save period to your liking depending on how long you spend in the editor, how often you save, and how often you load other projects.