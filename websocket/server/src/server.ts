import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

const app = express();

const server  = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (message: string, isBinary) => {
        ws.send(`Hello, you sent ${message}`);
        console.log('send');

        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
              client.send(message, { binary: isBinary });
            }
          });
    });
    
    ws.send('Hi!!');
});

server.listen(process.env.PORT || 8999, () => {
    console.log(`start ${process.env.PORT || 8999}`); 
});

