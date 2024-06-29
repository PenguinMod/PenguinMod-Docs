---
title: Arguments and their Types
sidebar_position: 6
---

:::note
Anything that only works unsandboxed will be noted, but regardless, we will assume you are creating an unsandboxed extension during this tutorial.
:::

So far we have created a regular command block, reporter block, and a boolean block.  
But none of these blocks actually allow us to put other blocks inside, or even really do anything useful.

Why don't we take a look at **handling block arguments**?

## How do we add an input to a block?
First we need to start by adding an `arguments` object to a block.  
Let's use our console logging block for this.

```js
[
  {
    opcode: 'logToConsole',
    text: 'log to console',
    blockType: Scratch.BlockType.COMMAND,
    arguments: {}
  }
]
```

Next we need to add a property to this object. The value will be another object.  
It's recommended to use an all-capitals name, like so:

```js
[
  {
    opcode: 'logToConsole',
    text: 'log to console',
    blockType: Scratch.BlockType.COMMAND,
    arguments: {
        TEXT: {}
    }
  }
]
```

Now we need to decide where the block should show this input.  
If we want the argument to appear after the word "log" like so,

<img src="/img/docimages/arguments-1.png" alt="log () to console"></img>

then we'll need to surround the argument key in square brackets (`[TEXT]`) and place it after the word "log" in the `text` property:

```js
[
  {
    opcode: 'logToConsole',
    text: 'log [TEXT] to console',
    blockType: Scratch.BlockType.COMMAND,
    arguments: {
        TEXT: {}
    }
  }
]
```

We are nearly there, we just need to define the type of the argument.  
This determines whether we can accept letters, only numbers, colors, and for that we need to go into:

### Argument Types
Argument types define what our argument can take as an input. [See Here](/development/extensions/api/blocks/basic#argument) for all keys an argument can take.
You can set an argument's type by setting the `type` property in the argument to a `Scratch.ArgumentType`.  
Here is a list of all the available argument types:

| |Value|Explanation|
|:-:|:-:|:-:|
|Scratch.ArgumentType.ANGLE|`'angle'`|Numeric value with angle picker|
|Scratch.ArgumentType.BOOLEAN|`'Boolean'`|Boolean value with hexagonal placeholder|
|Scratch.ArgumentType.COLOR|`'color'`|Numeric value with color picker|
|Scratch.ArgumentType.NUMBER|`'number'`|Numeric value with text field|
|Scratch.ArgumentType.STRING|`'string'`|String value with text field|
|Scratch.ArgumentType.MATRIX|`'matrix'`|String value with matrix field|
|Scratch.ArgumentType.NOTE|`'note'`|MIDI note number with note picker (piano) field|
|Scratch.ArgumentType.IMAGE|`'image'`|Inline image on block (as part of the label)|
|Scratch.ArgumentType.POLYGON|`polygon`|pm: creates an input with an indefinite number of x,y inputs|
|Scratch.ArgumentType.COSTUME|`'costume'`|Costume menu (taken from tw)|
|Scratch.ArgumentType.SOUND|`'sound'`|Sound menu (taken from tw)|