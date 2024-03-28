---
title: Explaining Custom Extensions
sidebar_position: 0
---

# Custom Extensions

:::warning
These docs are not completely finished yet. We're slowly working on expanding the documentation while we work on other things, so please be patient with us!
:::

## What are Custom Extensions?
A custom extension adds a new category and blocks to the toolbox (sidebar).

Their main purpose is to add more blocks to PenguinMod that are not already implemented into PenguinMod already.  
See [our extension gallery](https://extensions.penguinmod.com/) for an example.

## How do I load a Custom Extension?
Open the "Choose an Extension" menu by clicking the blue blocks button at the bottom-left of the editor.

Then look at the sidebar until you reach "Actions", and click on "Load Custom Extension".

<img src="/img/docimages/load-custom.png" alt="Load Custom Extension"></img>

In this menu, you can choose to load an extension from a URL, Local File, or JavaScript text.  

<img src="/img/docimages/load-custom-2.png" alt="Load Custom Extension"></img>

As for what running an extension without a sandbox means,

## Types of Custom Extensions
Custom extensions can be loaded with an extension sandbox or not.  
The extension sandbox ensures the extension that the user is loading will never be able to do anything "too dangerous".

There are some key differences that may give you a reason to not use the sandbox though:

|                        | Blocks run as fast as possible | Can access/modify the project | Can open pop-ups/new tabs | Have the ability to corrupt the project | Can access all custom extension features |
| :--------------------: | :----------------------------: | :---------------------------: | :-----------------------: | :-------------------------------------: | :--------------------------------------: |
|  Sandboxed Extensions  |               ❌                |               ❌               |             ❌             |                    ❓                    |                    ❌                     |
| Unsandboxed Extensions |               ✅                |               ✅               |             ✅             |                    ✅                    |                    ✅                     |

Generally its faster & more compatible to load extensions unsandboxed, though you can't load non-trusted URLs into the editor unsandboxed for security.

## Project Uploading
You can't upload a PenguinMod project with a custom extension to PenguinMod without ranking up to "Penguin" rank on your profile.
<img src="/img/docimages/penguin_rank.png" alt="A profile with the Penguin Rank"></img>

If you want to upload a project with Custom Extensions, you'll need to upload some other projects & wait a couple days since you first signed in before you can rank up.

## Want to Create a Custom Extension?
:::warning
These docs are not completely finished yet. We're slowly working on expanding the documentation while we work on other things, so please be patient with us!
:::

Feel free to start reading our [Custom Extension guide.](/development/extensions/introduction)