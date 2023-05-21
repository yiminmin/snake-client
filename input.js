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
    } else if (key === 'w') {
      connection.write("Move: up");    
    } else if (key === 'a') {
      connection.write("Move: left");
    } else if (key === 's') {
      connection.write("Move: down");
    } else if (key === 'd') {
      connection.write("Move: right");
    }
  };

  stdin.on('data', handleUserInput);

  return stdin;
};

module.exports = { setupInput };
