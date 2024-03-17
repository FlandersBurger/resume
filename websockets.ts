import { remove } from "lodash";
import ws, { WebSocket } from "ws";
import http from "http";
const clients: WebSocket[] = [];

export class WebSocketServer {
  constructor(server: http.Server) {
    var wss = new ws.Server({ server: server });
    wss.on("connection", function (ws) {
      clients.push(ws);
      ws.on("message", function (message) {
        console.log("received: %s", message);
      });
      ws.on("close", function () {
        remove(clients, ws);
      });
    });
  }

  public broadcast(topic: string, data: object) {
    var json = JSON.stringify({ topic: topic, data: data });
    clients.forEach(function (client) {
      client.send(json);
    });
  }
}
