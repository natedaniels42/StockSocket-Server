const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: { origins: 'http://localhost:4200' }
});
require('dotenv').config();

const PORT = process.env.PORT;
const { data } = require('./stockData');
const symbols = data.stocks.map(stock => stock.symbol); 
// console.log(data.stocks[0].data[data.stocks[0].data.length - 1]);
// setInterval(() => {
//     data.updateData();
//     console.log(data.stocks[0].data[data.stocks[0].data.length - 1]);
// }, 5000);

io.on('connection', (socket) => {
    console.log('Connected');

    socket.on('historical', (sentData) => {
        console.log(sentData);
        io.emit('historical', {'response-type': 'historical', 'data': sentData})
    })

    socket.on('live', (sentData) => {
        const currentStock = data.stocks.find(stock => stock.symbol === sentData)
        io.emit('live', currentStock);
    })

    io.emit('list', {'response-type': 'list', 'symbols': symbols});
})

httpServer.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));