import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
// import bootstrap from "bootstrap";
const app = express();

const httpserver = http.createServer(app); //aqui creamos nuevo servidor para usa socket io
const io = new WebSocketServer(httpserver); //resive una peticion http en este caso le asigamos la de node http
// app.use(express.static(__dirname + "/public"));
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("Nueva conexión", socket.id);

  socket.emit("ping");

  socket.on("pong", () => {
    console.log("pong escuchado");
  });
});

httpserver.listen(4000);
console.log("servidor puerto: http://localhost:" + 4000);
