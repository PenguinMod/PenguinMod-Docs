---
title: Creating a Custom Extension
sidebar_position: 1
---

:::warning
These docs are not completely finished yet. We're slowly working on expanding the documentation while we work on other things, so please be patient with us!
:::

## How do I begin creating a Custom Extension?
You create Custom Extensions using [JavaScript](https://en.wikipedia.org/wiki/JavaScript), so you'll need at least a basic understanding of JavaScript to create one.
There are plenty of tutorials online or guides, classes, and resources that you can use to learn JavaScript.

## How can I test my Custom Extension?
<img src="/img/docimages/load-custom-2.png" alt="Load Custom Extension"></img>
When creating your extension, you likely want to load from Text and check the box to run the extension without the sandbox, however loading from a local server on port 8000 (http://localhost:8000) will run without it too.

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