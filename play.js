const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address
    port: '50541' // PORT number
  });

  conn.setEncoding('utf8'); // interprets incoming data as text


  // when I get data from the server, what to do with the data? in this case, console.logging it out
  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;


}

console.log("Connecting....");
connect(); // calling the connect function which has everything inside