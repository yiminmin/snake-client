# Snake Client


Snake Client is a client-side component of the Snake game. It establishes a connection with the game server and provides user input functionality for controlling the snake in the game.

## Installation

To install Snake Client, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running the following command:

   ```
   npm install
   ```

## Usage

To start the Snake Client, run the following command:

```
node play.js
```

Make sure you have the Snake Server running and configured properly before launching the client.

## Configuration

The Snake Client requires the correct IP address and port number to connect to the game server. These values are specified in the `constants.js` file.

If needed, update the IP address and port in `constants.js` with the appropriate values:

```javascript
const IP = '10.0.2.15'; // Replace with the correct IP address
const PORT = 50541; // Replace with the correct port number
```

## Controls

The snake can be controlled using the following keys:

- Move Up: 'w'
- Move Down: 's'
- Move Left: 'a'
- Move Right: 'd'
- Say Hello: '1'
- Say LOL: '2'

Press Ctrl+C (SIGINT) to exit the client.

## Contributing

Contributions to the Snake Client project are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

```

https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
```
