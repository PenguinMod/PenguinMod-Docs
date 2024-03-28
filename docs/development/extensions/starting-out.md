---
title: First steps
sidebar_position: 2
---

:::note
Anything that only works unsandboxed will be noted, but regardless, we will assume you are creating an unsandboxed extension during this tutorial.
:::

## Let's start simple
Let's create the first beginnings of our extension.  
Create a new JavaScript file (file extension is `.js`) and place a function that runs on start.

We'll want this function to take an input, a `Scratch` global object that is given to extensions.  
This object gives us some tools we'll need for creating blocks.

The cleanest way to do this is like this:

```js
(function(Scratch) {
  'use strict';
  
})(Scratch);
```

We are using a function with `'use strict'` here to prevent any variables we create to enter the global scope.  
This will prevent any *weirdness* once other extensions try to create variables or things with the same name.

Next let's create a class for our extension. This will be where most of the code for our extension will be.

This can be done as follows:

```js
(function(Scratch) {
  'use strict';
  class Extension {
  
  }
})(Scratch);
```

We still have 2 more things to add on before we can load this into PenguinMod.  
Let's add the code to register this into PenguinMod, so we don't forget later.

```js
(function(Scratch) {
  'use strict';
  class Extension {
  
  }
  Scratch.extensions.register(new Extension());
})(Scratch);
```

This is our first use of the `Scratch` object.  
The `extensions` property of the `Scratch` object gives us some small information, and the ability to register our extension.

There are a few more things that the `Scratch.extensions` object has:
```js
{
    "unsandboxed": (boolean),
    "isPenguinMod": (boolean)
}
```

- `unsandboxed` will be true if the extension is run unsandboxed.
- `isPenguinMod` will be true if loaded into the PenguinMod editor, or if it's in a packaged project.

## Defining our extension contents
Now that we have our basic stuff set down, let's define some properties about our extension.

Create a `getInfo()` method in our extension that returns an object:

```js
class Extension {
  getInfo() {
    return {
      // ...
    };
  }
}
```

We could put a number of things into here:

### Extension ID
This is a required property.  
This should ideally only contain characters a-z and numbers 0-9.

Usually you'll also want to add your name at the start of the ID too to make sure it doesn't conflict with existing extensions.

Add it like so:

```js
getInfo() {
  return {
    id: "johnMyExtension",
  };
}
```

### Extension Name
This is a required property.  
This is the name of the category for the extension. Don't make it too long or it'll look weird.

Add it like so:

```js
getInfo() {
  return {
    id: "johnMyExtension",
    name: "My Extension",
  };
}
```

### color1, color2, and color3
These all decide the color of the extension and it's blocks.

Most extensions only use `color1` and `color2`, but you can use `color3` too or even just not use any of them.

1. `color1` decides the main color
2. `color2` decides a secondary and "shadow" color for rounded menus
3. `color3` decides an outline color

<img src="/img/docimages/color-visual.png" alt="Image of previous explanation of color properties"></img>

Add it like so:

```js
getInfo() {
  return {
    id: "johnMyExtension",
    name: "My Extension",
    color1: "#ff0000",
    color2: "#00ff00",
    color3: "#0000ff",
  };
}
```

### docsURI
This is usually not included in most extensions, but you can link to another web page that explains your extension.

This will add a button to the top of the extension's category that links to the page.

<img src="/img/docimages/docsuri.png" alt="Image of the Open Documentation button"></img>

Add it like so:

```js
getInfo() {
  return {
    id: "johnMyExtension",
    name: "My Extension",
    docsURI: 'https://example.com', // change the website link to anything
  };
}
```

## Let's make a block
So we've talked about what the category needs, but we haven't touched blocks.

To start with creating a block, we need to first add an array to the extension that contains our blocks:

```js
getInfo() {
  return {
    id: "johnMyExtension",
    name: "My Extension",
    blocks: [
      // our blocks will go here
    ],
  };
}
```

**Let's create a basic block that just logs to the console.**

To do this, we first need to create a method in the class.  
Let's call it `logToConsole()`:

```js
class Extension {
  getInfo() {
    // our earlier code is here...
  }

  logToConsole() {
    console.log('Hello world!');
  }
}
```

Now let's create the block for this.

We need to add an object to the `blocks` array in the `getInfo` method, and the object needs the property `opcode` set to the name of our method.  
This is done like so:

```js
[
  {
    opcode: 'logToConsole'
  }
]
```

We want to add some text to the block.  
This is what the user will see on the block itself.

<img src="/img/docimages/block_label.png" alt="Text on a block"></img>

This is done like so:

```js
[
  {
    opcode: 'logToConsole',
    text: 'log to console'
  }
]
```

Our extension still wont be able to load with this block though, as we are missing one key thing:

### Block Types

Our block needs to be a specific type of block.  
Blocks have various different shapes and uses, so we need to pick the type of block we are making here.

**Here is a table of available block types:**

| |Explanation|Image|Functional when sandboxed|
|:-:|:-:|:-:|:-:|
|Scratch.BlockType.COMMAND|A placable code block. Can't be placed inside holes.|<img src="/img/docimages/blocktype_command.png" alt="next costume block"></img>|✅|
|Scratch.BlockType.REPORTER|A round output block that returns a string, number, etc.|<img src="/img/docimages/blocktype_reporter.png" alt="(answer) block"></img>|✅|
|Scratch.BlockType.BOOLEAN|A spiky output block that returns true or false.|<img src="/img/docimages/blocktype_boolean.png" alt="<true> block"></img>|✅|
|Scratch.BlockType.HAT|A block that activates the blocks below once a condition is true. Explained [here.](hats)|<img src="/img/docimages/blocktype_hat.png" alt="when <> block"></img>|✅|
|Scratch.BlockType.EVENT|An event block that will only run from external causes. Explained [here.](events)|<img src="/img/docimages/blocktype_event.png" alt="when flag clicked block"></img>|❌|
|Scratch.BlockType.CONDITIONAL|A block that may run blocks inside based on a condition. Explained [here.](branches)|<img src="/img/docimages/blocktype_conditional.png" alt="if <> then block"></img>|✅|
|Scratch.BlockType.LOOP|A block that may run blocks inside multiple times. Explained [here.](branches)|<img src="/img/docimages/blocktype_loop.png" alt="repeat () block"></img>|❓|
|Scratch.BlockType.LABEL|Not used for real blocks. A text label in the category. Explained [here.](labels)|<img src="/img/docimages/blocktype_label.png" alt="category label"></img>|✅|
|Scratch.BlockType.BUTTON|Not used for real blocks. A clickable button in the category. Explained [here.](buttons)|<img src="/img/docimages/blocktype_button.png" alt="category button"></img>|✅|
|Scratch.BlockType.XML|Not used for real blocks. Injects XML to the category. Explained [here.](xml-blocks)|No visuals for this block type|✅|

For now, we will only need the `Scratch.BlockType.COMMAND` block type.

This can be added as follows:

```js
[
  {
    opcode: 'logToConsole',
    text: 'log to console',
    blockType: Scratch.BlockType.COMMAND
  }
]
```

## Our example is done
Our example is done!

**hello-console.js** - [View source](/extensions/hello-console.js)
```js
(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "johnMyExtension",
        name: "My Extension",
        blocks: [
          {
            opcode: 'logToConsole',
            text: 'log to console',
            blockType: Scratch.BlockType.COMMAND
          }
        ]
      };
    }

    logToConsole() {
      console.log('Hello world!');
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
```

It should look like this:

<img src="/img/docimages/first-steps.png" alt="The extension in the toolbox"></img>

And clicking the block should log into console:

<img src="/img/docimages/first-steps2.png" alt="The block logging to console"></img>

## Next steps
Let's look into [making a block that returns values.](t1-making-a-reporter)