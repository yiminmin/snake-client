const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data from the server
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: LIU");
   // Experiment with delayed move messages
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);

    // Experiment with continuous move commands
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);

  });

  return conn;
};

// console.log("Connecting ...");
// connect();


module.exports = { connect };



/**
 
const net = require("net");

// Server IP address and port number
const serverAddress = "10.0.2.15";
const serverPort = 50541;

// Create a new TCP connection
const client = net.createConnection({
  host: serverAddress,
  port: serverPort,
});

// Set the encoding
client.setEncoding("utf8");

// Event handler for successful connection
client.on("connect", () => {
  console.log("Connected to the server!"); // Successful connection message

  // Perform any necessary operations here, such as sending commands
  // For example, you can send initial player information or commands here
  client.write("PLAYER_NAME"); // Replace with your player name
});

// Event handler for receiving messages from the server
client.on("data", (data) => {
  console.log("Server says:", data); // Output the message sent by the server
  // Perform any necessary operations based on the received message
});

// Event handler for connection closure
client.on("close", () => {
  console.log("Connection closed!"); // Connection closure message
});

// Handle user input and other operations
// You can write logic here to handle user input and send corresponding commands or messages to the server

// For example, listen to user input in the command line
process.stdin.on("data", (input) => {
  const command = input.toString().trim(); // Get the user input command
  // Perform operations and send to the server based on the command
  client.write(command); // Send the user input command to the server
});
*/

/** 
const net = require("net");

// 服务器的 IP 地址和端口号
const serverAddress = "10.0.2.15";
const serverPort = 50541;

// 创建一个新的 TCP 连接
const client = net.createConnection({
  host: serverAddress,
  port: serverPort,
});

// 设置编码方式
client.setEncoding("utf8");

// 连接成功时的事件处理
client.on("connect", () => {
  console.log("Connected to the server!"); // 连接成功的提示信息

  // 在这里可以进行客户端相关的操作，如发送命令等
  // 例如，可以在此处发送初始的玩家信息或命令
  client.write("PLAYER_NAME"); // 替换为你的玩家名称
});

// 接收服务器消息的事件处理
client.on("data", (data) => {
  console.log("Server says:", data); // 输出服务器发送的消息
  // 在这里可以根据服务器发送的消息进行相关的处理
});

// 连接断开时的事件处理
client.on("close", () => {
  console.log("Connection closed!"); // 连接关闭的提示信息
});

// 处理用户输入等操作
// 你可以在此处编写逻辑，根据用户输入发送相应的命令或消息到服务器

// 例如，监听用户在命令行中的输入
process.stdin.on("data", (input) => {
  const command = input.toString().trim(); // 获取用户输入的命令
  // 在这里可以根据命令进行相应的处理和发送到服务器
  client.write(command); // 将用户输入的命令发送到服务器
});

*/