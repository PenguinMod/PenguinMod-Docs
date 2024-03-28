---
title: Making a reporter
sidebar_position: 3
---

:::note
Anything that only works unsandboxed will be noted, but regardless, we will assume you are creating an unsandboxed extension during this tutorial.
:::

## Make a new block
Add a new object to the `blocks` array. This time, the `blockType` should be `Scratch.BlockType.REPORTER`.

Let's say this block will just use a simple `testReporter()` function:

```js
[
  {
    opcode: 'logToConsole',
    text: 'log to console',
    blockType: Scratch.BlockType.COMMAND
  },
  {
    opcode: 'testReporter',
    text: 'testing!',
    blockType: Scratch.BlockType.REPORTER
  }
]
```

And let's just make the function return a basic string:

```js
class Extension {
    // getInfo...

    logToConsole() {
      console.log('Hello world!');
    }

    testReporter() {
        return "Hello world!";
    }
}
```

Loading this into PenguinMod, you should see the following:

<img src="/img/docimages/making-reporter-1.png" alt="Reporter in the toolbox"></img>

**This works!** *But why is there a checkbox?*

## Reporter-specific parameters

### disableMonitor

We can add the `disableMonitor` property to our block to remove the variable monitor option in the category.

<img src="/img/docimages/making-reporter-monitor.png" alt="Our reporter has a monitor"></img>

```js
{
  opcode: 'testReporter',
  text: 'testing!',
  blockType: Scratch.BlockType.REPORTER,
  disableMonitor: true
}
```

<img src="/img/docimages/making-reporter-2.png" alt="Reporter in the toolbox again"></img>

This isn't the only specific parameter we can add here:

### allowDropAnywhere

This is used a lot less, but we can use this parameter to place the block into "unexpected areas":

```js
{
  opcode: 'testReporter',
  text: 'testing!',
  blockType: Scratch.BlockType.REPORTER,
  allowDropAnywhere: true
}
```

<img src="/img/docimages/allowDropAnywhere.png" alt="Reporter inside a boolean hole"></img>

## Final code

**first-reporter.js** - [View source](/extensions/first-reporter.js)
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
          },
          {
            opcode: 'testReporter',
            text: 'testing!',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
	    allowDropAnywhere: true
          }
        ]
      };
    }

    logToConsole() {
      console.log('Hello world!');
    }
    testReporter() {
      return "Hello world!";
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
```

## Next steps
Why don't we [create a real boolean next?](t2-booleans)