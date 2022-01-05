const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: {origin: '*'}
});
require('dotenv').config();

const PORT = process.env.PORT;
const { data } = require('./stockData');
const symbols = data.stocks.map(stock => stock.symbol); 

io.on('connection', (socket) => {
    console.log('Connected');

    socket.on('historical', () => {
        console.log('here');
        console.log(data.stocks);
        io.emit('historical', {'response-type': 'historical', 'data': data.stocks})
    })

    io.emit('list', {'response-type': 'list', 'symbols': symbols});
})

httpServer.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));