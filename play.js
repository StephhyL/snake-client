
const {connect} = require('./client');
const {setupInput} = require('./input')




console.log("Connecting....");
//  connect(); // calling the connect function which has everything inside


// let connectResult = connect(); 
setupInput(connect()); // calling the setUpInput function