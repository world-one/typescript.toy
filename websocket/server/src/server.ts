import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const app = express();

const server  = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (message: string) => {
        ws.send(`Hello, you sent ${message}`);
    });
    
    ws.send('Hi!!');
});

server.listen(process.env.PORT || 8999, () => {
    console.log(`start ${process.env.PORT || 8999}`); 
});

