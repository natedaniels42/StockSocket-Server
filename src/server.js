const app = require('express')();
const http = require('http').Server(app);
const cors = require('cors');
const io = require('socket.io')(http, {
    cors: {origin: '*'}
});

require('dotenv').config();

const PORT = process.env.PORT;

io.on('connection', (socket) => {
    console.log('Connected')

    socket.on('list', (data) => {
        console.log('list')
        io.emit('list', 'test')
    })
})

http.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));