const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connection", (client) => {
    console.log("Successfully connected to game server!");
    conn.write("Name: KAL");
  });

  conn.on("connect", () => {
    conn.write("Hello from client!");
  });

  return conn;
};

module.exports = {
  connect,
};
