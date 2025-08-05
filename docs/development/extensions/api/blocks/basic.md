---
title: block object keys
---

a list of all keys that go into a block object, there types, and there functional meaning.
keep in mind that in place of this object can be put `'---'` to represent a gap (but only one, adding more does not increase the gap)
| key | type | function |
| --- | ---- | -------- |
| `opcode` | `string \| null` | defines the id of this block, can be omitted on some things (like comments and xml blocks) |
| `blockType` | `Scratch.BlockType` | the type of this block (I.E. `command`, `comment` or `reporter`) |
| `text` | `String \| Array<String>` | the text of this block, when an array it represents the text on every "leg" of a block with multiple branches |
| `blockIconURI` | `String \| null` | an override for the categories `blockIconURI`, sets the image to be put at the start of the block and spaced from the text with `\|` |
| `extensions` | `Array<String> \| null` | gets mapped to the blockly param `extensions` (see [here](https://developers.google.com/blockly/guides/create-custom-blocks/extensions#extensions) for explanation) |
| `color1` | `String \| null` must match `/^#[0-9a-f]{6}$/i` | an override for the `color1` property from the category |
| `color2` | `String \| null` must match `/^#[0-9a-f]{6}$/i` | an override for the `color2` property from the category |
| `color3` | `String \| null` must match `/^#[0-9a-f]{6}$/i` | an override for the `color3` property from the category |
| `allowDropAnywhere` | `Boolean \| null`| if this block can be put into any input regardless of type (only works on blockType reporter)
| `branches` | `Array<Branch> \| null` | an array of objects (which most of the time will just be empty) that states how many branches should be on this block |
| `checkboxInFlyout` | `Boolean \| null` | whether or not there should be a monitor checkbox for this block in the toolbox, only set to true on reporter and boolean type blocks if the reporter has no arguments |
| `disableMonitor` | `Boolean \| null` | synonym of `checkboxInFlyout` |
| `branchIndicator` | `String \| null` | the indecator that should be appended to the end of the last leg in this block (only works on blocks with legs), if this property is in the object but is set to null-like then the icon `./static/blocks-media/repeat.svg` is used instead |
| `branchIconURI` | `String \| null` | synonym of `branchIndicator` |
| `alignments` | `Array<Scratch.ArgumentAlignment>` | [see here](/development/extensions/api/blocks/alignments) |
| `blockShape` | `Scratch.BlockShape` | [see here](/development/extensions/api/blocks/blockshape) |
| `notchAccepts` | `String \| null` | [see here](/development/extensions/api/blocks/custom-notch-shape) |
| `forceOutputType` | `String \| null` | overrights all output types on this block to be set with the string inputed, does nothing on falsey values |
| `isDynamic` | `Boolean \| null` | sets up this block to use a mutator to store the block shape and allow for dynamic handling of the blocks shape (no system to actualy do this atm though), the code for this also seems to be utterly untouched since the orignal concievment of scratch3 and so probably needs updated
| `arguments` | `{[String]: Argument}` | see bellow for the shape of the objects contained inside this list, to use these arguments you simply put into the strings of the text value `[argName]` where `argName` is the name of the argument in this list.
| `isEdgeActivated` | `Boolean \| null` | only on hat/event blocks, defines if this block, when triggered by function evalutation, should continue to trigger for every instance the output is true or only trigger on instances where the output has changed to be true |
| `label` | `String \| null` | Defines the label that should be used by the block monitor. |
| `labelFn` | `String \| null` | Defines the function, under the extension class, that should be run to get the label for the block monitor. This function is passed an object of menu values; any [variables](development/extensions/api/custom-variables) are instead passed as their name. |
| `switches` | `Array<String \| BlockSwitch> \| null` | Array that defines block switches. (See [BlockSwitch](#BlockSwitch)) |
| `switchText` | `String \| null` | Overwrite text used by the block switch addon. |

### Argument
| key | type | description |
| --- | ---- | ----------- |
| `type` | `Scratch.ArgumentType` | the type of this argument, certain types may use special key values in the argument |
| `dataURI` | `String \| null` | used only by the `"image"` argument type to state the image data to display |
| `width` | `String \| null` | used only by the `"image"` argument type to state the image width |
| `height` | `String \| null` | used only by the `"image"` argument type to state the image height |
| `flipRTL` | `Boolean \| null` | used only by the `"image"` argument type to state that the image should be flipped in rtl translations |
| `defaultValue` | `any \| null` | the value of this argument that is set by default |
| `menu` | `String \| null` | the key name of the menu that should take place of this argument |
| `nodes` | `Number \| null` | the number of nodes a polygon argument should have, this key name only applies to polygon arguments |
| `exemptFromNormalization` | `Boolean \| null` | if this input should be automaticaly casted to the inputs type |

## Branch
| key | type | description |
| --- | ---- | ----------- |
| `accepts` | `String \| null` | [see here](/development/extensions/api/blocks/custom-notch-shape) |

## BlockSwitch

| key | type | description |
| --- | ---- | ----------- |
| `opcode` | `String` | Required. Opcode to switch to.
| `isNoop` | `Boolean \| null` | Defaults to false. Tells the block switch addon that it shouldn't be switched. |
| `remapArguments` | `{ [String]: String } \| null` | An object that tells the block switch addon which arguments map onto others. |
| `remapMenus` | `{ [String]: { [String]: String } } \| null` | Tells the addon which menu values should be used instead of the current ones. |
| `overwriteText` | `String \| null` | Overwrites the text used by the addon. Overpowers `switchText`. |
| `createArguments` | `{ [String]: String }` | Define a seperate default value. |

## block type specialties
#### COMMAND:
most basic of basics, when ran it does something, can be connected with other command blocks via the top and bottom or reporter bocks can be connected to it via arguments
#### REPORTER:
makes a block that can connect to inputs and itself output a value when ran, the shape is either set seperately or round
#### BOOLEAN:
makes a block that can only connect to boolean inputs and output a true/false value, the shape is hexagonal
#### HAT:
#### EVENT:
