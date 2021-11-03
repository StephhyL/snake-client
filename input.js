
// stores the active TCP connection object
let connection;


// setup interface to handle user input from stdin

const setupInput = (conn) => {

  connection = conn //conecct();

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume(); // always thinking about input. 


  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {

  // if (key === '\u0003') {
  //   process.exit();
  // }
  // if (key === 'w') {
  //   console.log("Move: up");
  // }
  switch (key) {
    case 'w':
      console.log("Move: up");
      connection.write("Move: up");
      break;
    case 'a':
      console.log("Move: left");
      connection.write("Move: left");
      break;
    case 's':
      console.log("Move: down");
      connection.write("Move: down");
      break;
    case 'd':
      console.log("Move: right");
      connection.write("Move: right");
      break;
    case 'x':
    case '\u0003':
      process.exit();
  }

};

module.exports = { setupInput };