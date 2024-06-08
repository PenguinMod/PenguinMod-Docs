---
title: Custom Type APIs
---

systems for displaying/saving types other then the standard string|boolean|number

## object structure
the core system of custom types is an object that represents the data of that custom type and the functions required to show it to the user.
| signiture | fallback | description |
| --------- | -------- | ----------- |
| `toReporterContent(): HTMLElement` | `toString` | inner content for a script reporter |
| `toMonitorContent(): HTMLElement` |  `toReporterContent` | inner content for a variable monitor |
| `toListItem(): HTMLElement` | `toMonitorContent` | inner content for a single list item |
| `toListEditor(): String` | `toString` | string-based representation of this type for the list item editor |
| `fromListEditor(edit: String): this` | `replaceItem` | takes the users edits to the string produced by toListEditor and modifies the custom types content according to the input, returning the object that should take place of this type (normally just self/this) |

note that *anything* can be inside this object, its is just that the above functions are things already used internally both as signifiers of a custom type but also to show that custom types content