---
title: Custom Modal API
---

# Custom Modal API

This modal allows you to create ScratchBlocks modals meant to contain custom content.

To use this API, you need a reference to ScratchBlocks/Blockly:

```js
/* get ScratchBlocks if availiable... */
if (Scratch.gui) {
    Scratch.gui.getBlockly().then(ScratchBlocks => {
        // ScratchBlocks can be used here safely
    });
}
```

## Creation

```js
const modal = ScratchBlocks.customPrompt("title", {
    width: 500,
    height: "auto",
}, { name: "OK", callback: () => console.log("Confirmed") }, { name: "Cancel", callback: () => console.log("Cancelled") });
```

The first parameter of `customPrompt` determines the title of the modal.

<img src="/img/docimages/custommodal_title.png" alt="Image showing modal title"></img>

The second parameter determines the scale of the modal on the page.

You can either provide CSS units for `width` and `height`:

```js
ScratchBlocks.customPrompt("title", {
    width: 500,
    height: "auto",
}, ...)
```

or provide numbers:

```js
ScratchBlocks.customPrompt("title", {
    width: 500,
    height: 500,
}, ...)
```

:::warning
Note that making `height` bigger than the content of the modal may cause the modal's outline to be larger than the modal.
You probably don't need to use a value other than `"auto"` for the height, so it's best to just use that so the scale is correct.

<img src="/img/docimages/custommodal_height_warning.png" height="256px" alt="Image showing modal height error"></img>
:::

The third and fourth parameters of `customPrompt` determine the confirmation button's name & function, then the cancel button's name & function respectively.

```js
ScratchBlocks.customPrompt("title", {
    width: 500,
    height: "auto",
},
// Confirmation
{ name: "OK", callback: () => console.log("Confirmed") },
// Cancel
{ name: "Cancel", callback: () => console.log("Cancelled") },
)
```

The <img src="https://penguinmod.com/dismiss.svg" height="18px" alt="X"></img> button on the modal will also run the callback for the cancel button.

## Adding elements

Now that you have your modal on the screen, you can add elements to it just by appending to the element returned:

```js
const modal = ScratchBlocks.customPrompt("title", {
    width: 500,
    height: "auto",
}, { name: "OK", callback: () => console.log("Confirmed") }, { name: "Cancel", callback: () => console.log("Cancelled") });

modal.appendChild(document.createElement("textarea"));
```