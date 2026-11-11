---
title: Switch Case
sidebar_position: 1
---

# Switch Case
:::warning
These docs are not completely finished yet. We're slowly working on expanding the documentation while we work on other things, so please be patient with us!
:::

The Switch Case blocks consist of the following blockset:
<img src="/img/docimages/switchcase.png" alt="Switch case Blockset"></img>

The Switch Case blocks are simple once you learn them. This page should *hopefully* help with that. The `switch` block is where all the cases are housed. Think of it like a really long `if`/`else` chain, except easier to work with. The `default` variant can be thought of as a final `else` statement. The empty input is where you put in what is to be checked, such as a variable.

The `case` blocks themselves are also simple. You put them together inside a `switch` block and then the code you want to run inside. The input in the top is where you put what needs to be checked, see above. It can be anything, even a string!

The `run next case when` block is used for running the next case when the condition is true. I think. *frankly i havent used that block ever sorry*

And finally, the `exit case` block. This is similar to `break` in many other languages. It exits the Switch Case and cannot be used outside of a case. It throws an error when attempting to do so.