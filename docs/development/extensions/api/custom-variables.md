---
title: Variable APIs
---

interfaces for creating and managing variables other then the default scratch set. see [custom types](/development/extensions/api/custom-types) and [category ordering](/development/extensions/api/categories/category-info) for more information on how to display these custom variables

## menus
setting `variableType` in a menu object to a string value of what variable type you want it to show will make the menu into a variable menu, no other arguments are required. note that the variable type of `"scalar"` will will be replaced with `Variable.SCALAR_TYPE`

## registration and utilization
### `Variable` object shape
- `constructor(runtime, ...args)`: makes the variable, args is the list of args passed to `newVariableInstance`, the list of args will normally be made by your code in some way, either because of serialization or because of you creating the variable.
- `toXML(isLocal: Boolean): String`: the returned string should be the xml `<variable type="{typeName}" id="{this.id}" islocal="{isLocal}" iscloud="{this.isCloud | false}">{this.name}</variable>` (where the things contained inside {} are variables/constants from or for the variable class that you need to pass down inside the xml), this function is ran any time variables need to be passed from the vm to blockly as one massive glob.
- `serialize(obj = this): Array`: the array of arguments (to be serialized) that represents this variable, when loading these arguments all get passed down into the constructor via the args list.
### `registerVariable(type: string, varClass: Variable)`
 > running this function will overwrite any existing variables of that type, except for `Variable.SCALAR_TYPE`, `Variable.LIST_TYPE` and `Variable.BROADCAST_MESSAGE_TYPE`

run to register a custom type with the specified class as the variable content handler

### `unregisterVariable(type: string)`
 > running this function will not remove the default operation of the types `Variable.SCALAR_TYPE`, `Variable.LIST_TYPE` and `Variable.BROADCAST_MESSAGE_TYPE`

will remove the given type from the custom type registerations

will throw an error if the given type doesnt exist

### `newVariableInstance(type: string, ...args): new Variable | {type: string, value: args, mustRecreate: true}`
creates a new variable instance under the given type

if the given type doesnt exist yet it will return `{type: string, value: args, mustRecreate: true}`, this is for the `addTarget` function to find custom variable types that needed to wait for an extension load. should be treated as a failure to create the variable.

### `runtime._extensionVariables: {[string]: Variable}`
contains the list of all registered custom variable types, each key is the variable type