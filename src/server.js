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

/**
 * Interval to update data every 2 seconds
 */
setInterval(() => {
    data.updateData();
}, 2000);

/**
 * Socket connection
 */
io.on('connection', (socket) => {
    console.log('Connected');

    /**
     * Takes in the historical request from the client 
     * Creates a new instance of the CandlestickStockData
     * Calls the populateData method based on the properties sent from the client
     * Sends the CandlestickStockData back to the client
     */
    socket.on('historical', (sentData) => {
        const newData = new CandlestickStockData();
        newData.populateData(sentData.data, data.stocks);
        io.emit('historical', {'response-type': 'historical', 'data': newData, 'interval': sentData.data.interval});
    })

    /**
     * Takes in the live request fro the client
     * Create a new array of the current stocks with only the last 30 data points
     * Sends the new data back to the client 
     */
    socket.on('live', (sentData) => {
        const currentStocks = [Object.assign({}, data.stocks[sentData.data[0]]), Object.assign({}, data.stocks[sentData.data[1]]), Object.assign({}, data.stocks[sentData.data[2]])];
        currentStocks.forEach(stock => {
            stock.data = stock.data.slice(stock.data.length - 30, stock.data.length);
        })
        io.emit('live', {'response-type': 'live', 'data': currentStocks});
    })

    /**
     * Sends the list data to the client on connection
     */
    io.emit('list', {'response-type': 'list', 'symbols': symbols});
})

httpServer.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));