---
title: Variable API's
---

interfaces for creating and displaying variable types.

## menus
setting `variableType` in a menu object to a string value of what variable type you want it to show will make the menu into a variable menu, no other arguments are required. note that the variable type of `"scalar"` will will be replaced with `Variable.SCALAR_TYPE`

## custom types
### `registerVariable(type: string, varClass: Variable)`
 > running this function will overwrite any existing variables of that type, except for `Variable.SCALAR_TYPE`, `Variable.LIST_TYPE` and `Variable.BROADCAST_MESSAGE_TYPE`

run to register a custom type with the specified class as the variable content handler

### `registerVariable(type: string)`
 > running this function will not remove the types `Variable.SCALAR_TYPE`, `Variable.LIST_TYPE` and `Variable.BROADCAST_MESSAGE_TYPE`

will remove the given type from the custom type registerations

will throw an error if the given type doesnt exist

### `newVariableInstance(type: string, ...args): new Variable | {type: string, value: args, mustRecreate: true}`
creates a new variable instance under the given type

if the given type doesnt exist yet it will return `{type: string, value: args, mustRecreate: true}`, this is for the `addTarget` function to find custom variable types that needed to wait for an extension load. should be treated as a failure to create the variable.

### `runtime._extensionVariables: {[string]: Variable}`
contains the list of all registered custom variable types, each key is the variable type