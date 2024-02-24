---
title: Creating a Custom Extension
---

:::warning
These docs are not completely finished yet. We're slowly working on expanding the documentation while we work on other things, so please be patient with us!
:::

## What is a Custom Extension?
A custom extension adds a new category and blocks to the toolbox (sidebar).  
You create these using [JavaScript](https://en.wikipedia.org/wiki/JavaScript), so you'll need at least a basic understanding of JavaScript to create one.

## How do I load a Custom Extension?
Open the "Choose an Extension" menu by clicking the blue blocks button at the bottom-left of the editor.

Then look at the sidebar until you reach "Actions", and click on "Load Custom Extension".

<img src="/img/docimages/load-custom.png" alt="Load Custom Extension"></img>

In this menu, you can choose to load an extension from a URL, Local File, or JavaScript text.  
When creating your extension, you likely want to load from Text and check the box to run the extension without the sandbox, however loading from a local server on port 8000 (http://localhost:8000) will run without it too.

<img src="/img/docimages/load-custom-2.png" alt="Load Custom Extension"></img>

As for what running an extension without a sandbox means,

## Types of Custom Extensions
Custom extensions can be loaded with an extension sandbox or not.  
The extension sandbox ensures the extension that the user is loading will never be able to do anything "too dangerous".

There are some key differences that may give you a reason to not use the sandbox though:

| |Blocks run as fast as possible|Can access/modify the project|Can open pop-ups/new tabs|Have the ability to corrupt the project|Can access all custom extension features
|:-:|:-:|:-:|:-:|:-:|:-:|
|Sandboxed Extensions|❌|❌|❌|❓|❌|
|Unsandboxed Extensions|✅|✅|✅|✅|✅|

Generally its faster & more compatible to load extensions unsandboxed, though you can't load non-trusted URLs into the editor unsandboxed for security.

## Project Uploading
You can't upload a PenguinMod project with a custom extension without ranking up to "Penguin" rank.  
If you want to upload a project with your extension, you'll need to upload some other projects & wait a couple days since you first signed in before you can rank up.

## Recommendations
As mentioned earlier, it is highly recommended that you have some knowledge of [JavaScript](https://en.wikipedia.org/wiki/JavaScript).  
This'll help you actually program things once your done here.

It is also recommended that you use a browser with Developer Tools enabled.  
If you are using a mobile device or a device owned by an organization or school, you might not be able to access it.

You can access the Developer Tools with one of 3 methods:
- Right Click > Inspect element (or just Inspect)
- Ctrl + Shift + I (or Option + Command + I on MacOS)
- F12 (on most browsers)

The most useful tool in the Developer Tools is the Console tab, which can be changed at the top.  
The Console tab will show errors or warnings coming from the page, or your extension.  
You can differentiate errors from your extension and errors from the website by looking at the link next to the error or warning.

- Errors coming from a custom extension loaded from URL
<img src="/img/docimages/error-console-url.png" alt="Unsandboxed URLs include the website link, Sandboxed URLs will say Custom extension block error"></img>

- Errors coming from a custom extension loaded from File or Text
<img src="/img/docimages/error-console-local.png" alt="The error has a link to a data: url"></img>

## Extra Support
You may have some unexpected errors or problems when developing extensions.  
If you need any extra help, feel free to [join our Discord](https://discord.gg/NZ9MBMYTZh) to ask any questions.

## First Steps
Let's begin by [creating a basic extension.](/development/extensions/starting-out)