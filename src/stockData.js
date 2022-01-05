"use strict";
exports.__esModule = true;
exports.StockData = void 0;
var Stock_1 = require("./Stock");
var StockData = /** @class */ (function () {
    function StockData(stocks) {
        this.stocks = stocks;
        this.stocks = [
            new Stock_1.Stock('F', []),
            new Stock_1.Stock('T', []),
            new Stock_1.Stock('AAPL', []),
            new Stock_1.Stock('AMD', []),
            new Stock_1.Stock('VALE', []),
            new Stock_1.Stock('PLTR', []),
            new Stock_1.Stock('INTC', []),
            new Stock_1.Stock('BAC', []),
            new Stock_1.Stock('NVDA', []),
            new Stock_1.Stock('PFE', [])
        ];
    }
    return StockData;
}());
exports.StockData = StockData;
