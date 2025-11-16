(function(Scratch) {
  'use strict';
  class Extension {
    getInfo() {
      return {
        id: "johnMyExtension",
        name: "My Extension",
        blocks: [
          {
            opcode: 'logToConsole',
            text: 'log to console',
            blockType: Scratch.BlockType.COMMAND
          }
        ]
      };
    }

    logToConsole() {
      console.log('Hello world!');
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);