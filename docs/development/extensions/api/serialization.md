---
title: Extension Data
---

# Extension Data

The extension data APIs allow for the storage of data for extensions within the project file. This is split into 4 functions:

## `serialize`

The serialize function is a function that gets defined under the extension class. Using it, you're able to store any data under the project root. Whatever gets returned, gets stored.

```js
var xPosition = 0;
var yPosition = 15;

class Extension {
    ...
    serialize() {
        return {
            x: xPosition,
            y: yPosition,
            counted: this.counted
        };
    }
    ...
}
```

## `deserialize`

Your deserializer should be able to take in the output of your serializer, and return your extension back to the state it was in previously.

```js
class Extension {
    ...
    deserialize(data) {
        xPosition = data.x;
        yPosition = data.y;
        this.counted = data.counted;
    }
    ...
}
```

## `serializeForTarget`

Serialize for target, the target object of which is passed into the function, and stores it under the target. This could be useful for sprite-specific values.

```js
const dataPerTarget = new Map();

class Extension {
    ...
    serializeForTarget(target) { 
        return dataPerTarget.get(target.id);
    }
    ...
}
```

## `deserializeForTarget`

Deserializes for a specific function, both the target and data are passed.

```js
const dataPerTarget = new Map();

class Extension {
    ...
    deserializeForTarget(target, data) { 
        dataPerTarget.set(target.id, data);
    }
    ...
}
```

## `extensionStorage` APIs [deprecated]

The `extensionStorage` APIs are both deprecated in PenguinMod, and purely exist for compatibility with TurboWarp.

```js
vm.runtime.extensionStorage[yourExtensionId] = { ... }
target.extensionStorage[yourExtensionId] = { ... }
```
