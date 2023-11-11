const express = require('express');
const path = require('path');

const { WebSocket, WebSocketServer } = require('ws');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const WS_PORT = 8080
const wss = new WebSocketServer({ port: WS_PORT })

wss.on('listening', () => {
    console.log( `WebSocketServer listening on port ${WS_PORT}`)
})

wss.on('connection', function (ws) {
    ws.on('error', () => console.error(error))

    ws.on('message', function (data) {
        let jsonData = JSON.parse(data);
        wss.clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {

                client.send( JSON.stringify(jsonData))
            }
        })
    })

    ws.on('close', function () {
        wss.clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send({msg:'client left.'})
            }
        })
    })
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})


const PORT = 3000;
app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
})

