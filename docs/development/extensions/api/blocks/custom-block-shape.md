---
title: Custom Block Shape API
---

This API allows you to change the shape of a reporter block to whatever you wish. It can be used for clarifying custom types and making blocks for certain data-types!

*You should have a decent knowledge of ScratchBlocks and SVG Paths to use this API*

## [1] Registration
In order to make custom block shapes we need to first register them using ScratchBlocks. Heres how you can register your shape:
```js
  /* get ScratchBlocks if availiable... */
  if (Scratch.gui) {
    Scratch.gui.getBlockly().then(ScratchBlocks => {
      SB.BlockSvg.registerCustomShape(
        "[EXTENSION ID]-[SHAPE NAME]",
        {
          emptyInputPath: "m...z", // SVG Path (string) used for empty input slots
          emptyInputWidth: 12 * SB.BlockSvg.GRID_UNIT, // Optional hard-coded width value for 'emptyInputPath'
          leftPath: (block) => {
            /*
              required function that returns an array of SVG Paths
              to generate the left-side of the block
            */
            const blockWidth = block.edgeShapeWidth_;
            return [
              /* example */
              `a ${blockWidth} ${blockWidth} 0 0 1 0 -${2 * blockWidth}`
            ];
          },
          rightPath: (block) => {
            /*
              required function that returns an array of SVG Paths
              to generate the right-side of the block
            */
            const blockWidth = block.edgeShapeWidth_;
            return [
              /* example */
              `l ${blockWidth} ${blockWidth}`,
              `l -${blockWidth} ${blockWidth}`
            ];
          },
          blockPadding: {
            /*
              optional object to determine the padding of your shape
              'internal' determines how your shape pads with others
              'external' determines how other blocks pads with your shape

              See 'https://github.com/PenguinMod/PenguinMod-Blocks/blob/develop/core/block_render.js#L507'
              For more information about padding values
            */
            internal: {
              0: 5 * Blockly.BlockSvg.GRID_UNIT, // Field Input in custom shape
              1: 2 * Blockly.BlockSvg.GRID_UNIT, // Hexagon Input in custom shape
              2: 4 * Blockly.BlockSvg.GRID_UNIT, // Round Input in custom shape
              ... /* more optional shapes */
            },
            external: {
              0: 3 * Blockly.BlockSvg.GRID_UNIT, // Field Input in custom shape
              1: 3 * Blockly.BlockSvg.GRID_UNIT, // Hexagon Input in custom shape
              2: 1 * Blockly.BlockSvg.GRID_UNIT, // Round Input in custom shape
              ... /* more optional shapes */
            }
          }
        }
      );
    });
```

## [2] Using Custom Shapes in Your Extensions

Now that your shape is registered (with no errors), you can safely use the shape in your extension.

Heres how to format the block JSON:

```js
...
class Extension {
  getInfo() {
    return {
      id: '...',
      name: 'example',
      blocks: [
        {
          opcode: 'myCoolShape',
          blockType: BlockType.REPORTER,
          blockShape: "[EXTENSION ID]-[SHAPE NAME]",
          text: 'custom shape [CUSTOM_EMPTY_BLOCK]',
          arguments: {
            CUSTOM_EMPTY_BLOCK: {
              shape: "[EXTENSION ID]-[SHAPE NAME]"
            }
          }
        },
        /*
          If you want to make your custom shape strict
          (Only allowed to be inserted in Blocks of the same type)
          do this:
        */
        {
          opcode: 'myStrictShape',
          blockType: BlockType.REPORTER,
          blockShape: "[EXTENSION ID]-[SHAPE NAME]",
          forceOutputType: "[EXTENSION ID]-[SHAPE NAME]",
          text: 'custom shape [CUSTOM_EMPTY_BLOCK]',
          arguments: {
            CUSTOM_EMPTY_BLOCK: {
              shape: "[EXTENSION ID]-[SHAPE NAME]",
              check: "[EXTENSION ID]-[SHAPE NAME]",
            }
          }
        },
      ]
    }
  }
}
...
```

and you're done!

<img src="/img/docimages/custom_shape_example.png" alt="Image showing 2 custom block shapes"></img>
