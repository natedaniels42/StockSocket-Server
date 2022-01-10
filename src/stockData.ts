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

    public populateData() {
        this.stocks.forEach(stock => {
            let currentTime = Date.now()
            let startTime = currentTime - 604800000;
            let startAmount = Number(((Math.random() * 100) + 100).toFixed(2));
            stock.data.push({timestamp: startTime, amount: startAmount});
            while (startTime < currentTime) {
                startTime += 60000;
                startAmount = Number((startAmount + (Math.random() * 3) - 1.5).toFixed(2));
                if (startAmount < 0) {
                    startAmount = 0
                }
                stock.data.push({timestamp: startTime, amount: startAmount}); 
            }
        })
    }

    public updateData() {
        this.stocks.forEach(stock => {
            let { timestamp, amount } = stock.data[stock.data.length - 1];
            let newAmount = Number((amount + (Math.random() * 3) - 1.5).toFixed(2));
            if (newAmount < 0) {
                newAmount = 0;
            }
            let newTime = timestamp + 60000;
            stock.data.push({timestamp: newTime, amount: newAmount});
        })
    }
}

const data = new StockData();
data.populateData();

module.exports = {
    data
} 