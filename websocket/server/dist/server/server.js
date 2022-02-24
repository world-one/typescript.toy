"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        ws.send(`Hello, you sent ${message}`);
    });
    ws.send('Hi!!');
});
server.listen(process.env.PORT || 8999, () => {
    console.log(`start ${process.env.PORT || 8999}`);
});
//# sourceMappingURL=server.js.map