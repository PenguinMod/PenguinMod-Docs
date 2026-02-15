---
title: Custom Type APIs
---

System for displaying and saving types other than the standard `string`, `boolean`, and `number`.

## Object Structure
The core system of a custom type is an object that represents the data of that custom type and the functions required to show it to the user.
| Signature | fallback | Description |
| --------- | -------- | ----------- |
| `customId: String` | `null` | the ID of this custom type, used only to identify this object for serialization |
| `toReporterContent(): HTMLElement` | `toString` | inner content for a script reporter |
| `toMonitorContent(): HTMLElement` |  `toReporterContent` | inner content for a variable monitor |
| `toListItem(): HTMLElement` | `toMonitorContent` | inner content for a single list item |
| `toListEditor(): String` | `toString` | string-based representation of this type for the list item editor |
| `fromListEditor(edit: String): this` | `replaceItem` | takes the user's edits to the string produced by toListEditor and modifies the custom types content according to the input, returning the object that should replace this type (normally just self/this) |

Note that *anything* can be inside this object, it's just that the above functions are things already used internally both as signifiers of a custom type but also to show the custom type's content.

Example function:
```js
class CustomType {
    toString() {
        return 'look at me im a custom reporter content!'
    }
    toReporterContent() {
        const emWrap = document.createElement('em');
        emWrap.style.color = '#0e0efe';
        emWrap.innerText = 'look at me im a custom reporter content!';
        return emWrap;
    }
}
class Extension {
    getInfo() {
        return {
            id: 'notnull',
            name: 'example',
            blocks: [
                {
                    opcode: 'return',
                    blockType: BlockType.REPORTER,
                    text: 'return a custom type!'
                },
                {
                    opcode: 'recieve',
                    blockType: BlockType.COMMAND,
                    text: 'accept a [inp] custom type!',
                    arguments: {
                        inp: {
                            type: ArgumentType.STRING,
                            exemptFromNormalization: true
                        }
                    }
                }
            ]
        }
    }
    return() {
        return new CustomType();
    }
    recieve({ inp }) {
        console.log(inp instanceof CustomType) // true 
    }
}

Scratch.extensions.register(new Extension());
```

## serialization registration
### `registerSerializer(id: string, serialize: function(toSerialize: CustomType) {}: any, deserialize: function(fromSerialize: any) {}: CustomType)`
The ID must match the customId property of a custom type.

Serialize and deserialize must exist together.
Serialize must be a function that takes the custom type and returns some data that is then consumed by the deserialize function to remake the instance of custom type.

Example serializer registration:
```js
Scratch.vm.runtime.registerSerializer(
  "customId", // Must match the customId defined on the custom type
  value => {
    // Receives the custom type instance and must return a JSON object that represents it.
    if (value instanceof CustomType) {
      return {
        data: value._data
      };
    }
  },
  data => {
    // Receives the previously serialized data and must return a new instance of the custom type.
    if (data && data.data) {
      return new CustomType(data.data);
    }
  }
);
```
