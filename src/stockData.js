"use strict";
exports.__esModule = true;
var Stock_1 = require("./Stock");
var StockData = /** @class */ (function () {
    function StockData(stocks) {
        if (stocks === void 0) { stocks = [
            new Stock_1.Stock('Ford', 'F', 'assets/images/ford-logo.png', []),
            new Stock_1.Stock('AT&T', 'T', 'assets/images/att-logo.png', []),
            new Stock_1.Stock('Apple', 'AAPL', 'assets/images/apple-logo-grey.png', []),
            new Stock_1.Stock('Tyson Foods', 'TSN', 'assets/images/tyson-logo.png', []),
            new Stock_1.Stock('Tesla', 'TSLA', 'assets/images/tesla-logo.png', []),
            new Stock_1.Stock('Capital One', 'COF', 'assets/images/capital-one-logo.png', []),
            new Stock_1.Stock('Intel', 'INTC', 'assets/images/intel-logo.png', []),
            new Stock_1.Stock('Bank of America', 'BAC', 'assets/images/bank-of-america-logo.png', []),
            new Stock_1.Stock('Microsoft', 'MSFT', 'assets/images/microsoft-logo.png', []),
            new Stock_1.Stock('Wells Fargo', 'WFC', 'assets/images/wells-fargo-logo.png', [])
        ]; }
        this.stocks = stocks;
    }
    StockData.prototype.populateData = function () {
        this.stocks.forEach(function (stock) {
            var currentTime = Date.now();
            var startTime = currentTime - 604800000;
            var startAmount = Number(((Math.random() * 100) + 100).toFixed(2));
            stock.data.push({ timestamp: startTime, amount: startAmount });
            while (startTime < currentTime) {
                startTime += 60000;
                startAmount = Number((startAmount + (Math.random() * 3) - 1.5).toFixed(2));
                if (startAmount < 0) {
                    startAmount = 0;
                }
                stock.data.push({ timestamp: startTime, amount: startAmount });
            }
        });
    };
    StockData.prototype.updateData = function () {
        this.stocks.forEach(function (stock) {
            var _a = stock.data[stock.data.length - 1], timestamp = _a.timestamp, amount = _a.amount;
            var newAmount = Number((amount + (Math.random() * 3) - 1.5).toFixed(2));
            if (newAmount < 0) {
                newAmount = 0;
            }
            var newTime = timestamp + 60000;
            stock.data.push({ timestamp: newTime, amount: newAmount });
        });
    };
    return StockData;
}());
var data = new StockData();
data.populateData();
module.exports = {
    data: data
};
