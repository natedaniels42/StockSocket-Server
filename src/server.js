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

const symbols = data.stocks.map(stock => {
    return {symbol: stock.symbol, image: stock.image}; 
});
let index = 1;

setInterval(() => {
    data.updateData();
}, 2000);


io.on('connection', (socket) => {
    console.log('Connected');

    socket.on('historical', (sentData) => {
        const newData = new CandlestickStockData();
        newData.populateData(sentData.data.interval, data.stocks);
        io.emit('historical', {'response-type': 'historical', 'data': newData});
    })

    socket.on('live', (sentData) => {
        const currentStocks = [data.stocks[sentData.data[0]], data.stocks[sentData.data[1]], data.stocks[sentData.data[2]]];
        io.emit('live', {'response-type': 'live', 'data': currentStocks});
    })

    io.emit('list', {'response-type': 'list', 'symbols': symbols});
})

httpServer.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));