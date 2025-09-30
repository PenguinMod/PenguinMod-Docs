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

You can also use the delete block to delete a variable on the highest stack.

## Array expansion

Adding the Array extension can give you a few extra blocks. (you may need to switch to another sprite and back if you just added the extension)

The current scope array gives a list of all variables currently accessible within your current scope, in order of what was created first. This includes any variables from parent scopes.
<img src="/img/docimages/extensions/jwScope/array_current.png" alt="Current scope array"></img>

The all scope array has an array for each scope made, with each array containing the variables created in that scope. This includes variables made inaccessible by initialising of the same name.
<img src="/img/docimages/extensions/jwScope/array_all.png" alt="Current scope array"></img>