const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address
    port: PORT // PORT number
  });

  conn.setEncoding('utf8'); // interprets incoming data as text
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: PBJ");
    conn.write("Say: HELLO WORLD!");
    // let delay = 0;

    // const movement = ["Move: right", "Move: up", "Move: up", "Move: left", "Move: down"];
    // movement.forEach((movement) => {
    //   setTimeout(() => {
    //     conn.write(movement);
    //   }, delay)
    //   delay += 1000;
    // });
  
  })

  // when I get data from the server, what to do with the data? in this case, console.logging it out
  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
}

module.exports = {connect};