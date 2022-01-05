"use strict";
exports.__esModule = true;
var Stock_1 = require("./Stock");
var StockData = /** @class */ (function () {
    function StockData(stocks) {
        if (stocks === void 0) { stocks = [
            new Stock_1.Stock('F', [
                { timestamp: '2022-12-01 11:30:00', open: 50, high: 55, low: 45, close: 48 },
                { timestamp: '2022-12-01 11:35:00', open: 50, high: 55, low: 45, close: 48 }
            ]),
            new Stock_1.Stock('T', []),
            new Stock_1.Stock('AAPL', []),
            new Stock_1.Stock('AMD', []),
            new Stock_1.Stock('VALE', []),
            new Stock_1.Stock('PLTR', []),
            new Stock_1.Stock('INTC', []),
            new Stock_1.Stock('BAC', []),
            new Stock_1.Stock('NVDA', []),
            new Stock_1.Stock('PFE', [])
        ]; }
        this.stocks = stocks;
    }
    return StockData;
}());
var data = new StockData();
module.exports = {
    data: data
};
