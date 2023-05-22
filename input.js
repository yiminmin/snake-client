
const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY } = require("./constants");

const stdin = process.stdin;
let connection;

// Sets up the interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit(); // Exits the process if the user presses Ctrl+C (SIGINT)
    } else if (key === MOVE_UP_KEY) {
      connection.write("Move: up");    
    } else if (key === MOVE_LEFT_KEY) {
      connection.write("Move: left");
    } else if (key === MOVE_DOWN_KEY) {
      connection.write("Move: down");
    } else if (key === MOVE_RIGHT_KEY) {
      connection.write("Move: right");
    } else if (key === 'd') {
      connection.write("Move: right");
    } else if (key === '1') {
      connection.write("Say: Hello!");
    } else if (key === '2') {
      connection.write("Say: LOL!");
    }
  };

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput };
