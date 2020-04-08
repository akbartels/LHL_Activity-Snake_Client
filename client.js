
/**
 * Establishes connection with the game server
 */
const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '50.64.116.162',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected ');
    conn.write("Name: AMY");
    // conn.write("Move: left")

    // const startTime = new Date().getTime();
    // setInterval(() => {
    //   if (new Date().getTime() - startTime > 60000) {
    //     clearInterval
    //   }
    //   conn.write("Move: up")
    // }, 50)

    

  //   setTimeout(() => {
  //     conn.write("Move: down")
  //   },50)
  //   setTimeout(() => {
  //     conn.write("Move: down")
  //   },100)
  //   setTimeout(() => {
  //     conn.write("Move: right")
  //   },150)


  });
  

  conn.on("data", (data) => {
    console.log("Server says: ", data);
    });
  return conn;
}

module.exports = {
  connect,
}