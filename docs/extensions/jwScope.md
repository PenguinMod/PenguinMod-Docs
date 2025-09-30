---
title: Scope
sidebar_position: 3
---

# Scope

Scope is an extension that makes temporary variables based on the block stack.

## How it works

A variable is only based on what stack it is under. If it is inside a if statement, trying to access it outside of that if statement will not work.
<img src="/img/docimages/extensions/jwScope/if_scope.png" alt="If scope"></img>

However, you can initialise a variable outside of a stack, set a value to it inside, and access it outside.
<img src="/img/docimages/extensions/jwScope/init_scope.png" alt="Init scope"></img>

You can also initialise a variable inside the stack with the same name as a variable outside of the stack. You will only be able to access the variable inside the stack, and once you are out of that stack you can access the other variable again. 
<img src="/img/docimages/extensions/jwScope/init_scope_2.png" alt="Init scope 2"></img>