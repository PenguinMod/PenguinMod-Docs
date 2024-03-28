---
title: Errors
sidebar_position: 5
---

## The inevitable
When working on an extension, eventually one of your blocks will break and cause an error.  
This can appear in one of 3 ways:

### Unsandboxed Extension block errors
PenguinMod will glow your block red and show a red message box below the block if an error occurs.

The error will also appear in the console.

<img src="/img/docimages/errors-unsandboxed.png" alt="Red glow block with reported error"></img>

### Sandboxed Extension block errors
Sandboxed extensions will return the error as the output if it is a `BOOLEAN` or `REPORTER` block type.  
Otherwise, the error will just appear in the console. This may lead to unintended behavior if a certain value or operation was expected.

<img src="/img/docimages/errors-sandboxed.png" alt="Regular block with error output"></img>

### Full editor errors
These are only caused if something really went wrong.

A warning sign will appear in the top left of the editor and opening it will show the errors that occurred.

<img src="/img/docimages/errors-editor.png" alt="Editor errors dropdown"></img>

You will usually never see this while making an extension.

## Next steps
Let's start [handling inputs now shall we?](t4-arguments-and-their-types)