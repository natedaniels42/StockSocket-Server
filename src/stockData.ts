import { Stock } from './Stock';

class StockData {
    constructor (public stocks = [
        new Stock('Ford', 'F', 'assets/images/ford-logo.png', []),
        new Stock('AT&T', 'T', 'assets/images/att-logo.png', []),
        new Stock('Apple', 'AAPL', 'assets/images/apple-logo-grey.png', []),
        new Stock('Tyson Foods', 'TSN', 'assets/images/tyson-logo.png', []),
        new Stock('Tesla', 'TSLA', 'assets/images/tesla-logo.png', []),
        new Stock('Capital One', 'COF', 'assets/images/capital-one-logo.png', []),
        new Stock('Intel', 'INTC', 'assets/images/intel-logo.png', []),
        new Stock('Bank of America', 'BAC', 'assets/images/bank-of-america-logo.png', []),
        new Stock('Microsoft', 'MSFT', 'assets/images/microsoft-logo.png', []),
        new Stock('Wells Fargo', 'WFC', 'assets/images/wells-fargo-logo.png', [])
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