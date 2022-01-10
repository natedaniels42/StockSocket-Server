import { Stock } from './Stock';

class StockData {
    constructor (public stocks = [
        new Stock('F', []),
        new Stock('T', []),
        new Stock('AAPL', []),
        new Stock('AMD', []),
        new Stock('VALE', []),
        new Stock('PLTR', []),
        new Stock('INTC', []),
        new Stock('BAC', []),
        new Stock('NVDA', []),
        new Stock('PFE', [])
    ]) {  }

    populateData() {
        this.stocks.forEach(stock => {
            let currentTime = Date.now()
            let startTime = currentTime - 604800000;
            let startAmount = Number(((Math.random() * 50) + 25).toFixed(2));
            stock.data.push({timestamp: startTime, amount: startAmount});
            while (startTime < currentTime) {
                startTime += 60000;
                startAmount = Number((startAmount + (Math.random() * 5) - 2.5).toFixed(2));
                stock.data.push({timestamp: startTime, amount: startAmount}); 
            }
        })
    }
}

const data = new StockData();
data.populateData();

module.exports = {
    data
} 