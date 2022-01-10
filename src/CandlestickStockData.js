"use strict";
exports.__esModule = true;
exports.CandlestickStockData = void 0;
var CandlestickStock_1 = require("./CandlestickStock");
var CandlestickStockData = /** @class */ (function () {
    function CandlestickStockData(stocks) {
        if (stocks === void 0) { stocks = [
            new CandlestickStock_1.CandleStickStock('Ford', 'F', 'assets/images/ford-logo.png', []),
            new CandlestickStock_1.CandleStickStock('AT&T', 'T', 'assets/images/att-logo.png', []),
            new CandlestickStock_1.CandleStickStock('Apple', 'AAPL', 'assets/images/apple-logo-grey.png', []),
            new CandlestickStock_1.CandleStickStock('Tyson Foods', 'TSN', 'assets/images/tyson-logo.png', []),
            new CandlestickStock_1.CandleStickStock('Tesla', 'TSLA', 'assets/images/tesla-logo.png', []),
            new CandlestickStock_1.CandleStickStock('Capital One', 'COF', 'assets/images/capital-one-logo.png', []),
            new CandlestickStock_1.CandleStickStock('Intel', 'INTC', 'assets/images/intel-logo.png', []),
            new CandlestickStock_1.CandleStickStock('Bank of America', 'BAC', 'assets/images/bank-of-america-logo.png', []),
            new CandlestickStock_1.CandleStickStock('Microsoft', 'MSFT', 'assets/images/microsoft-logo.png', []),
            new CandlestickStock_1.CandleStickStock('Wells Fargo', 'WFC', 'assets/images/wells-fargo-logo.png', [])
        ]; }
        this.stocks = stocks;
    }
    CandlestickStockData.prototype.populateData = function (interval, data) {
        var _this = this;
        data.forEach(function (stock, i) {
            for (var j = 0; j < stock.data.length; j += interval) {
                var currentSlice = stock.data.slice(j, j + interval);
                var currentAmounts = currentSlice.map(function (item) { return item.amount; });
                var max = Math.max.apply(Math, currentAmounts);
                var min = Math.min.apply(Math, currentAmounts);
                var open_1 = currentAmounts[0];
                var close_1 = currentAmounts[currentAmounts.length - 1];
                var current = {
                    timestamp: stock.data[j].timestamp,
                    high: max,
                    low: min,
                    open: open_1,
                    close: close_1
                };
                _this.stocks[i].data.push(current);
            }
        });
    };
    return CandlestickStockData;
}());
exports.CandlestickStockData = CandlestickStockData;
