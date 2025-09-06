---
title: Extension Integration
---

# Extension Integration

Extensions can do many things, however PenguinMod doesn't actually have many ways to access the insides of your extension.
This causes buggy or broken behavior in cases like Audio extensions not working with the pause button, volume slider, and project recorder addons.

The [`registerExtensionIntegrationComponents`](#registerextensionintegrationcomponents) function is intended to help with this.

## registerExtensionIntegrationComponents
```js
Scratch.vm.runtime.registerExtensionIntegrationComponents(extensionId, whitelistFeatures, components);
```

This function allows extensions to register components that are used for other PenguinMod features.
This can include GUI menus, addons, or other extensions.

You can re-run this function if you need to change any information.
However, the original information will be replaced, not appended to.

|Parameter|Type|Explanation|
|:-:|:-:|:-:|
|`extensionId`|`string`|The ID of your extension. Should be the same ID your extension already uses elsewhere.|
|`whitelistFeatures`|`Array<string>`|Which features to enable. See [`whitelistFeatures`](#whitelistfeatures).|
|`components`|`object`|Parts of your extension. See [`components`](#components).|

### `whitelistFeatures`
This is a list of permissions which determines what PenguinMod can do with the provided components. Passing an empty array will allow all components provided to be used by PenguinMod's features.

Generally you should use an empty array and not heavily use the components you provide, but some extensions might want to manually make support for some PenguinMod features to be in control of their behavior.

Only some components are used by each permission. You don't have to provide the components attached to a permission, but when using the whitelist, it's pointless to specify a permission that you won't provide the components for.
This is an array of strings. If you want to use the whitelist, the array can contain any of these permissions:

|Permission|Components|Explanation|
|:-:|:-:|:-:|
|`audioContextSuspend`|`audioContexts`|Allows PenguinMod to run `AudioContext.suspend()` on your `AudioContext`s|
|`audioContextResume`|`audioContexts`|Allows PenguinMod to run `AudioContext.resume()` on your `AudioContext`s|
|`audioMediaStream`|`audioContexts`, `audioNodes`|Allows PenguinMod to create media stream destinations and connect the `AudioNode`s to them|
|`gainNodeSet`|`gainNodes`|Allows PenguinMod to set the `gain.value` on your `GainNode`s|

### `components`
This is an object containing all of the components of your extension that you want to make work with PenguinMod's features. 

|Key|Value|Explanation|
|:-:|:-:|:-:|
|`audioContexts`|`Array<AudioContext>`|Any `AudioContext`s being used in the extension that you want to register.|
|`audioNodes`|`Array<AudioNode>`|Any destination `AudioNode`s you want to register, however see [`audioNodes`](#audionodes) to provide these properly.|
|`gainNodes`|`Array<GainNode>`|The deepest `GainNode`s you want to register, see [`gainNodes`](#gainnodes) to provide these properly.|

#### `audioNodes`
These nodes should be connected to the `destination` of the `AudioContext`s provided.
todo: add an exmple

#### `gainNodes`
Do not include `GainNode`s within the same tree of `AudioNode`s, only specify the `GainNode` closest to the `AudioContext`'s `destination`.
todo:  add an example
