
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
}

const handleUserInput = (keyStroke) => {
  // '\u0003' is the keystroke for 'Ctl + C' AKA Exit the game
  // console.log(keyStroke)
  if (keyStroke === '\u0003') {
    console.log("You have exited the game")
    process.exit();
  }
  // MOVE: UP
  else if (keyStroke === 'w') {
    // console.log("you typed 'w'")
    connection.write("Move: up")
    
  }
  // MOVE: LEFT
  else if (keyStroke === 'a') {
    // console.log("you typed 'a'")
    connection.write("Move: left")
  }
  // MOVE: DOWN
  else if (keyStroke === 's') {
    // console.log("you typed 's'")
    connection.write("Move: down")
  }
  // MOVE: RIGHT
  else if (keyStroke === 'd') {
    // console.log("you typed 'd'")
    connection.write("Move: right")
  } 
  else if (keyStroke === "t") {
    connection.write("Say: Outta my way!!")
  } 
  else if (keyStroke === "r") {
    connection.write("Say: Imma get you!!")
  }
  
}

module.exports = {
  setupInput,
}