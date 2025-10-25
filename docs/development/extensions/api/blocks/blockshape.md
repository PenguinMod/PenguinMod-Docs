---
title: blockShape
---

### blockShape:Scratch.BlockShape

This changes the shape of an output block to another block shape. You can use this to make it clearer what your block returns.

```js
{
  opcode: 'testReporter',
  text: 'testing!',
  blockType: Scratch.BlockType.REPORTER,
  blockShape: Scratch.BlockShape.SQUARE,
}
```

|Enum|Purpose|Image|
|:-:|:-:|:-:|
|Scratch.BlockShape.HEXAGONAL|`booleans/predicates`|<img src="/img/docimages/blockshape_hexagonal.png" alt="hexagonal block"></img>|
|Scratch.BlockShape.ROUND|`numbers/strings`|<img src="/img/docimages/blockshape_round.png" alt="round block"></img>|
|Scratch.BlockShape.SQUARE|`arrays/array buffers/uint arrays`|<img src="/img/docimages/blockshape_square.png" alt="square block"></img>|
|Scratch.BlockShape.LEAF|[VectorType](https://github.com/PenguinMod/PenguinMod-Vm/blob/develop/src/extensions/jwVector/index.js)|<img src="/img/docimages/blockshape_leaf.png" alt="leaf block"></img>|
|Scratch.BlockShape.PLUS|`Objects/Classes or Class instances`|<img src="/img/docimages/blockshape_plus.png" alt="plus block"></img>|
|Scratch.BlockShape.OCTAGONAL|Scratch `target`|<img src="/img/docimages/blockshape_octagonal.png" alt="octagonal block"></img>|
|Scratch.BlockShape.BUMPED|JavaScript `BigInt`|<img src="/img/docimages/blockshape_bumped.png" alt="bumped block"></img>|
|Scratch.BlockShape.INDENTED|[XMLType](https://github.com/PenguinMod/PenguinMod-Vm/blob/develop/src/extensions/jwXML/index.js)|<img src="/img/docimages/blockshape_indented.png" alt="indented block"></img>|
|Scratch.BlockShape.SCRAPPED|JavaScript `Map`|<img src="/img/docimages/blockshape_scrapped.png" alt="scrapped block"></img>|
|Scratch.BlockShape.ARROW|JavaScript `Set`|<img src="/img/docimages/blockshape_arrow.png" alt="arrow block"></img>|
|Scratch.BlockShape.TICKET|JavaScript `Date`|<img src="/img/docimages/blockshape_ticket.png" alt="ticket block"></img>|
