---
title: Storage Extension
sidebar_position: 2
---

# Storage

<img src="/img/docimages/storage_thumb.png" alt="Storage Extension Thumbnail" height="320"></img>

Storage is an extension which allows you to save and get the value of variables which are either stored on the user's computer or on the PenguinMod servers.

## Local Storage
:::warning
Users and Other projects can modify this data, so be aware of potential tampering.
:::

<img src="/img/docimages/local_storage_list.png" alt="Local Storage blocks" width="192"></img>

- The `get (key)` block will return the value that the key is set to.
- The `set (key) to (value)` block will set the value of the key specified.
- The `delete (key)` block will remove the value of the key specified.
- The `get all stored names` block will return an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of existing key names with values.

## Local Uploaded Project Storage
:::warning
Users can manually edit this data, so be aware of potential tampering.
:::

This is the same as Local Storage, but the keys will not share between uploaded projects.
The project must be uploaded to PenguinMod for this to be useful.

<img src="/img/docimages/local_uploaded_storage_list.png" alt="Local Uploaded Storage blocks" width="192"></img>

- The `get project (key)` block will return the value that the key is set to.
- The `set project (key) to (value)` block will set the value of the key specified.
- The `delete project (key)` block will remove the value of the key specified.
- The `get all stored names in this project` block will return an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of existing key names with values. Keys from other projects will not be here.

## Server Storage

Server Storage is a section in the Storage extension that allows you to use a PenguinMod server or your own server to save data.

:::warning
This is not a fully secure form of storage in its current state, as it can still be modified by users.
:::

![is using global server?](/img/docimages/is_using_global_server.png)

This block will return ``true`` if any keys being made are currently accessible by every project using this same server. If you are using an external server, this value will always be ``true``.

![set server to (project/global) server](/img/docimages/set_server_to_server_options.png)

Using this block will set the server being used to store data to either the global server (every project can access this) or the project server (only this project can access these variables). The catch is that to use the project server, the project needs to be uploaded as it uses the project's ID to know which keys the project can access.

### Bonus Functionality
You can also use this block to use external servers by using any block that returns a string and putting it into the server type input. The server will have to have a main ``/`` page and a ``get``, ``set``, and ``delete`` page (with ``set`` being a post request and ``delete`` being a delete request) in-order for it to work properly. The status code should ideally be 200 for every successful request and anything not between 200-299 for failing requests.

![waiting for server to respond?](/img/docimages/waiting_for_server_to_respond.png)

This block will return ``true`` if any blocks are currently waiting for a response. This will become ``false`` instantly after the action has been completed. The only main reason to use this is for drawing loading bars or loading spinners if you are doing that outside of the script that is doing the actions.

![server failed to respond?](/img/docimages/server_failed_to_respond.png)

This block will return ``true`` if any server actions have been attempted but not successful. Use this after setting a value to see if something went wrong or not. This is useful if you are setting a value after the server has gone offline.

![server error](/img/docimages/server_error.png)

If &lt;server failed to respond?&gt; is true, this block will contain the error that occurred.

![get server (key)](/img/docimages/get_server_inputKey.png)

This will get the value of a key with this name on the server.

![set server (key)](/img/docimages/set_server_inputKey_to_inputValue.png)

This will set the value of a key with this name on the server to the value given.

![delete server (key)](/img/docimages/delete_server_inputKey.png)

This will delete a key with this name on the server.

As a security measure, there are no blocks to get all of the keys set on a server. This is because users can use this to get all of the keys set and delete them all. If you really need this functionality and are willing to sacrifice some security for it, use another server variable to store which keys the project has set.

## Examples

![example1](/img/docimages/storage_example1.png)

This code will set the current server to the PenguinMod server and tell it to only use values from this project. It stops the script if it failed to set the server (ex: the server is offline), and then sets a key named the user's username to the amount of points the user has if the script was not stopped. 


## Credits

Storage is developed by [JeremyGamer13](https://jeremygamer13.vercel.app) with the server for it hosted by [tnix100](https://github.com/tnix100), originally suggested by Fir and silvxrcat in the PenguinMod Discord for an event.