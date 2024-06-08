---
title: Custom Category Ordering API
---

the function `orderCategoryBlocks` (when inside the extension object, same object the `getInfo` function lives in) takes in the list of xml blocks in this category from `getBlocksXML` and returns a new array with the xml elements that you want to have shown inside this category (future addition: maby move this to be a true blockly category mutator as the resulting data is the same and the required input can easily be applied, allowing blockly to better optimise for its existence)