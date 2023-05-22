const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY } = require("./constants");

const stdin = process.stdin;
let connection;

let currentDirection = "up";

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit(); // Exits the process if the user presses Ctrl+C (SIGINT)
  } else if (key === MOVE_UP_KEY && currentDirection !== "down") {
    currentDirection = "up";
  } else if (key === MOVE_LEFT_KEY && currentDirection !== "right") {
    currentDirection = "left";
  } else if (key === MOVE_DOWN_KEY && currentDirection !== "up") {
    currentDirection = "down";
  } else if (key === MOVE_RIGHT_KEY && currentDirection !== "left") {
    currentDirection = "right";
  } else if (key === '1') {
    connection.write("Say: Hello!");
  } else if (key === '2') {
    connection.write("Say: LOL!");
  }
};

// Sets up the interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

const getDirection = function() {
  return currentDirection;
};

module.exports = { setupInput, getDirection };

