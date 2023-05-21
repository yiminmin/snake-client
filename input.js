const stdin = process.stdin;

// Sets up the interface to handle user input from stdin
const setupInput = function() {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit(); // Exits the process if the user presses Ctrl+C (SIGINT)
    }
  };

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput };
