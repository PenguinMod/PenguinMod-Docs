---
title: category info keys
---

a list of all keys that go into the object returned by `getInfo`.
| key | type | function |
| --- | ---- | -------- |
| `id` | `String` | defines the id of this category |
| `name` | `String` | the display name of this category |
| `color1` | `String \| null` must match `/^#[0-9a-f]{6}$/i` | the primary color of all blocks and the category icon, defaults to the pen extension color |
| `color2` | `String \| null` must match `/^#[0-9a-f]{6}$/i` | the secondary color of all blocks and the category icon, defaults to 0.1 mix with black |
| `color3` | `String \| null` must match `/^#[0-9a-f]{6}$/i` | the tertiary color of all blocks and the category icon, defaults to 0.2 mix with black |
| `showStatusButton` | `Boolean \| null` | if a status button should be shown on this category, used by extensions that connect to something external like the ev3 brick |
| `blockIconURI` | `String \| null` | the image to be shown as the icon of all blocks in this category |
| `menuIconURI` | `String \| null` | what the fuck, fuck the what |
| `isDynamic` | `Boolean \| null` | if this category should update more regularly due too a seperate set of events, also states if the orderBlocks function should be carried over |
| `orderBlocks` | `function(blocks: Array<String>): Array<String> \| null` | a function for handling how the contents of this category should be placed or when they should exist |
| `tbShow` | `Boolean \| null` | (unimplemented) show an icon stating this extension was made using turbobuilder |
| `menus` | `{[String]: Array<[String, String] \| { name: String, value: String } \| String> \| MenuObject} \| null` | all menus used by the blocks inside this category |
| `customFieldTypes` | `{[String]: any}` | [see here](/pm-docs/docs/development/extensions/api/categories/bfield-types.md) for contents |
| `docsURI` | `String \| null` | the url to be used by the documentation button, documentation button only shows if this string is set
| `blocks` | `Array<Block>` | [see here](/pm-docs/docs/development/extensions/api/blocks/basic.md) for contents |

### menu structure
| key | type | function |
| --- | ---- | -------- |
| `isTypeable` | `Boolean \| null` | if or if not this menu supports typing text into the menu aswell as selecting an option, menus setup this way do not support the value attribute and always accept reporters |
| `acceptReporters` | `Boolean \| null` | if this menu can take blocks in-place of the menu value |
| `variableType` | `String \| null` | the type of variable this menu reffers to, [see more](/development/extensions/api/custom-variables#menus) |
| `items` | `Array<[String, String] \| { name: String, value: String } \| String>` | all of the items in this menu, ignored if variableType is set |
