import { Stock } from './Stock';

class StockData {
    constructor (public stocks = [
        [
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
        ]
    ]) {  }
}

const data = new StockData();
module.exports = {
    data
} 