const socket = io("http://localhost:4000/");

socket.on("ping", () => {
  console.log("escuchado");

  socket.emit("pong");
});
