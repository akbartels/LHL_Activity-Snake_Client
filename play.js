
const {connect} = require('./client');
const {setupInput} = require('./input');



console.log('Connecting ...');
const clientConnect = connect();



setupInput(clientConnect);