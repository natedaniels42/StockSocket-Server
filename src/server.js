const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: {origin: '*'}
});
require('dotenv').config();

const PORT = process.env.PORT;
const { data } = require('./stockData');

io.on('connection', (socket) => {
    console.log('Connected');

    socket.on('get stocks', () => {
        console.log('test');
    })
    io.emit('list', {'response-type': 'list', 'message': data.stocks});
})

httpServer.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));