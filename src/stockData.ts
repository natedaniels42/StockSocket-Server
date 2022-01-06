import { Stock } from './Stock';

class StockData {
    constructor (public stocks = [
        new Stock('F', [
            {timestamp: '2022-12-01 11:30:00', open: 50,high: 55,low: 45,close: 48},
            {timestamp: '2022-12-01 11:35:00', open: 50,high: 55,low: 45,close: 48}]),
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
}

const data = new StockData();

module.exports = {
    data
} 