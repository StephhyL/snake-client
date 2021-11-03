
const {connect} = require('./client');

// setup interface to handle user input from stdin
const setUpInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function () {
    if (key === '\u0003') {
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);
  
  return stdin;
}


console.log("Connecting....");
connect(); // calling the connect function which has everything inside