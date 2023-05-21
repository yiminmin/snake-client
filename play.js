const { connect } = require("./client");
const stdin = process.stdin;

// Sets up the interface to handle user input from stdin
const setupInput = function() {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// Handles user input from stdin
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit(); // Exits the process if the user presses Ctrl+C (SIGINT)
  }
};

// Listens for data events from stdin and calls handleUserInput function
stdin.on('data', handleUserInput);

// Calls the setupInput function to set up stdin for user input
setupInput();
