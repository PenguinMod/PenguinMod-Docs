---
title: Booleans
sidebar_position: 4
---

:::note
Anything that only works unsandboxed will be noted, but regardless, we will assume you are creating an unsandboxed extension during this tutorial.
:::

## Make a new block
Add a new object to the `blocks` array. This time, the `blockType` should be `Scratch.BlockType.BOOLEAN`.

**Let's spice it up a bit.** This block will use `Math.random()` to determine the output value.

```js
[
  // our other blocks...
  {
    opcode: 'randomBoolean',
    text: 'randomness',
    blockType: Scratch.BlockType.BOOLEAN
  }
]
```

```js
class Extension {
    // getInfo, other block functions...

    randomBoolean() {
        return Math.round(Math.random()) === 1;
    }
}
```

It'll should look something like this:

<img src="/img/docimages/booleans-1.png" alt="Our boolean in the toolbox"></img>

We can use `disableMonitor` again to remove the checkbox:

```js
{
  opcode: 'randomBoolean',
  text: 'randomness',
  blockType: Scratch.BlockType.BOOLEAN,
  disableMonitor: true
}
```

<img src="/img/docimages/booleans-2.png" alt="Our boolean in the toolbox, with no monitor in sight"></img>

## Next steps
How about we [learn how PenguinMod handles block errors?](t3-errors)