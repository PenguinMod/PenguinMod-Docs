---
title: Custom Type APIs
---

systems for displaying/saving types other then the standard string|boolean|number

## object structure
the core system of custom types is an object that represents the data of that custom type and the functions required to show it to the user.
| signiture | fallback | description |
| --------- | -------- | ----------- |
| `customId: String` | `null` | the id of this custom type, used only to identify this object for serialization |
| `toReporterContent(): HTMLElement` | `toString` | inner content for a script reporter |
| `toMonitorContent(): HTMLElement` |  `toReporterContent` | inner content for a variable monitor |
| `toListItem(): HTMLElement` | `toMonitorContent` | inner content for a single list item |
| `toListEditor(): String` | `toString` | string-based representation of this type for the list item editor |
| `fromListEditor(edit: String): this` | `replaceItem` | takes the users edits to the string produced by toListEditor and modifies the custom types content according to the input, returning the object that should take place of this type (normally just self/this) |

note that *anything* can be inside this object, its is just that the above functions are things already used internally both as signifiers of a custom type but also to show that custom types content

example of function:
```js
class CustomType {
    toString() {
        return 'look at me im custom reporter content!'
    }
    toReporterContent() {
        const emWrap = document.createElement('em');
        emWrap.style.color = '#0e0efe';
        emWrap.innerText = 'look at me im custom reporter content!';
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
id must match the customId property of a custom type 

serialize and deserialize must exist together

serialize must be a function that takes the custom type and returns some data that is then consumed by the deserialize function to remake the instance of custom type 