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
          },
          {
            opcode: 'testReporter',
            text: 'testing!',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
	    allowDropAnywhere: true
          }
        ]
      };
    }

    logToConsole() {
      console.log('Hello world!');
    }
    testReporter() {
      return "Hello world!";
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);