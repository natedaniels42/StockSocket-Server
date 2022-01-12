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

setInterval(() => {
    data.updateData();
}, 2000);


io.on('connection', (socket) => {
    console.log('Connected');

    socket.on('historical', (sentData) => {
        const newData = new CandlestickStockData();
        newData.populateData(sentData.data, data.stocks);
        io.emit('historical', {'response-type': 'historical', 'data': newData});
    })

    socket.on('live', (sentData) => {
        const currentStocks = [Object.assign({}, data.stocks[sentData.data[0]]), Object.assign({}, data.stocks[sentData.data[1]]), Object.assign({}, data.stocks[sentData.data[2]])];
        currentStocks.forEach(stock => {
            stock.data = stock.data.slice(stock.data.length - 30, stock.data.length);
        })
        io.emit('live', {'response-type': 'live', 'data': currentStocks});
    })

    io.emit('list', {'response-type': 'list', 'symbols': symbols});
})

httpServer.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));