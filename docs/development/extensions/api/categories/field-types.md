---
title: Custom Fields API
---

## important notes
the object that contains every single custom field type is structured as `{[fieldName]: info}`, where `fieldName` is the name of the field (and therefor also the name used in the `type` key in an argument)

### menu structure
| key | type | function |
| --- | ---- | -------- |
| `output` | `String \| Array<String> \| null` | the output type of this fields allowReporters mode as supported by the blockly block json format |
| `outputShape` | `Scratch.BlockShape` | the block shape of this fields allowreporters mode |
| `implementation` | `Blockly.Field` | the field (as an extension of the `Blockly.Field` class) to be registered to blockly |

note that as of currently you will need to make your own listner for `Runtime.EXTENSION_FIELD_ADDED` that registers the field to blockly (the data recieved in the event is `{ name: String, implementation: Blockly.Field }`), below is a code snippet to do this
```js
Scratch.vm.on('EXTENSION_FIELD_ADDED', ({ name, implementation }) => {
    ScratchBlocks.Field.register(name, implementation);
});
```