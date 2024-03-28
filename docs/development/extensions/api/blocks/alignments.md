---
title: alignments
---

### alignments:Array&lt;Scratch.ArgumentAlignment&gt;

This changes the alignment of different things inside the block.  
Add this property to a block as an array, and use the `Scratch.ArgumentAlignment` object to determine alignment.  
There are a few things to note:  
- Each argument is an index into the array (so adding `hello [ABC] [DEF]` will make `ABC` be the second item in the array, `DEF` be the third)
- Text counts as an argument (so in the above example, `hello` is the first item in the array)
- Branches count as arguments (its easier to see the item index for branches by looking at the block on the workspace)

Here is a visual representation:

<img src="/img/docimages/alignment_visual.png" alt="Image showing the above explanation"></img>

```js
{
  opcode: 'alignmentTest',
  blockType: Scratch.BlockType.CONDITIONAL,
  text: [
    'this block tests alignments',
    'left',
    'middle',
    'right'
  ],
  branchCount: 3,
  alignments: [
    null, // null or Scratch.ArgumentAlignment.DEFAULT act like no change
    null,
    Scratch.ArgumentAlignment.LEFT,
    null,
    Scratch.ArgumentAlignment.CENTER,
    null,
    Scratch.ArgumentAlignment.RIGHT
  ]
}
```

<img src="/img/docimages/alignment_visual2.png" alt="Image showing the alignment types"></img>