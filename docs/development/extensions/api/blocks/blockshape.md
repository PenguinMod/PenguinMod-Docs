---
title: blockShape
---

### blockShape:Scratch.BlockShape

This changes the shape of a reporter or boolean, and can be used for things such as making a boolean look... not... like a boolean?

```js
{
  opcode: 'testReporter',
  text: 'testing!',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.SQUARE,
}
```

| |Explanation|Image|
|:-:|:-:|:-:|
|Scratch.BlockShape.ROUND|The default shape for a reporter.|<img src="/img/docimages/blockshape_round.png" alt="round block"></img>|
|Scratch.BlockShape.HEXAGONAL|The default shape for a boolean. Takes up more space then other shapes.|<img src="/img/docimages/blockshape_hexagonal.png" alt="hexagonal block"></img>|
|Scratch.BlockShape.SQUARE|The only shape to not be found normally!|<img src="/img/docimages/blockshape_square.png" alt="square block"></img>|