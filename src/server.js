const app = require('express')();
const httpServer = require('http').createServer(app);
const cors = require('cors');
const io = require('socket.io')(httpServer);
require('dotenv').config();

const PORT = process.env.PORT;

// app.use(cors({
//     origin: 'http://localhost:4200'
// }))

const { data } = require('./stockData');
const symbols = data.stocks.map(stock => stock.symbol); 


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