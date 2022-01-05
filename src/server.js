const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: {origin: '*'}
});
require('dotenv').config();

const PORT = process.env.PORT;

io.on('connection', (socket) => {
    console.log('Connected');

    socket.on('get stocks', () => {
        console.log('test');
    })
    io.emit('list', 'Test coming from server');
})

httpServer.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));