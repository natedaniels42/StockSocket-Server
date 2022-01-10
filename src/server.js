const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: { origins: 'http://localhost:4200' }
});
require('dotenv').config();

const PORT = process.env.PORT;
const { data } = require('./stockData');
const { CandlestickStockData } = require('./CandlestickStockData');
const { Stock } = require('./Stock');
const symbols = data.stocks.map(stock => stock.symbol); 
// console.log(data.stocks[0].data[data.stocks[0].data.length - 1]);
// setInterval(() => {
//     data.updateData();
//     console.log(data.stocks[0].data[data.stocks[0].data.length - 1]);
// }, 5000);
// let candlestick = new CandlestickStockData();
// candlestick.populateData(5, [ new Stock('ATT',[
//     {timestamp: 1, amount: 2},
//     {timestamp: 1, amount: 5},
//     {timestamp: 1, amount: 4},
//     {timestamp: 1, amount: 8},
//     {timestamp: 1, amount: 6},
//     {timestamp: 1, amount: 1},
//     {timestamp: 1, amount: 40},
//     {timestamp: 1, amount: 44},
//     {timestamp: 1, amount: 20},
//     {timestamp: 1, amount: 26},
//     {timestamp: 1, amount: 54},
//     {timestamp: 1, amount: 1},
//     {timestamp: 1, amount: 22},
//     {timestamp: 1, amount: 18},
//     {timestamp: 1, amount: 5}
//     ])
// ]
// )
// console.log(candlestick.stocks[0].data);


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