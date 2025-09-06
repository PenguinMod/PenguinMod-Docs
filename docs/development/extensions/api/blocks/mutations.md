---
title: Block Mutation API
---

API for creating blocks with mutations (blocks that dynamically change inputs, visuals, etc)

*You should have a decent knowledge of ScratchBlocks to use this API*

## Setup
In your Block JSON, you can setup mutations by adding a 'mutations' object in the JSON.

In the object, there are various properties you must add:
| Key | Required | Description |
| --- | -------- | ----------- |
| serialize | yes | function that gets called when this block's mutation is saved |
| deserialize | yes | function that gets called when this block is loaded and needs to unload the saved mutation |
| init | optional | function that gets called when this block is initialized |

In your `serialize` function, there are 2 arguments availiable:
- `block` => the *ScratchBlocks* block calling this mutation
- `settings` => *Object* for writing values stored in the mutation (color, # of inputs, etc)

In your `deserialize` function, there are 2 arguments availiable:
- `block` => the *ScratchBlocks* block calling this mutation
- `settings` => *Object* for extracting values stored in the mutation (color, # of inputs, etc)

In your `init` function, there is 1 argument availiable:
- `block` => the initialized *ScratchBlocks* block

**IMPORTANT** Any **key** you set/read in the settings object **MUST** be lowercase. Otherwise it will not save!

Heres how your Block JSON should look:
```js
{
  opcode: "func",
  blockType: Scratch.BlockType.COMMAND,
  text: "my mutation block",
  mutations: {
    serialize: this.serializeBlock,
    deserialize: this.deserializeBlock,
    init: this.initializeBlock
  }
}
```

Then somewhere in your extension file, the functions could look like this:

```js
serializeBlock (block, settings) {
  // example: save wether or not this block is a end cap 
  settings.isendcap = block.nextConnection === null;
}

deserializeBlock(block, settings) {
  // example: toggle wether or not this block should be an end cap 
  block.setNextStatement(settings.isendcap || true, "normal");
}

initializeBlock(block) {
  // example: set the block color to red
  block.setColour("#ff0000");
}
```

---

Its also important to mention you need to **manually save mutations** if you add something like Buttons to your Block.

Lets say you make a [Custom Input](https://docs.penguinmod.com/development/extensions/api/custom-inputs) that, when clicked, adds a empty input to the block:
```js
block.appendValueInput("thisIsAnEmptyInput");
```

In order to call a manual save, you need to run this code:
```js
// Get the old mutation BEFORE adding the empty input
const oldMutation = ScratchBlocks.Xml.domToText(block.mutationToDom());

... append input example code here ...

// Get the new mutation
const newMutation = ScratchBlocks.Xml.domToText(block.mutationToDom());
ScratchBlocks.Events.fire(new ScratchBlocks.Events.BlockChange(
  block, 'mutation', null, oldMutation, newMutation
));
```

and you're done!
