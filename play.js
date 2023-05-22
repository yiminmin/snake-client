// const { connect } = require("./client");
// const { setupInput } = require("./input");

// console.log("Connecting ...");
// const conn = connect();

// // Automatically move the snake every 100 milliseconds
const { connect } = require("./client");
const { setupInput, getDirection } = require("./input");

console.log("Connecting ...");
const conn = connect();

// Call setupInput to start receiving user inputs
setupInput(conn);

// Automatically move the snake every 100 milliseconds
setInterval(() => {
  const direction = getDirection();
  conn.write(`Move: ${direction}`);
}, 400);


