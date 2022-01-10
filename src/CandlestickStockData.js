"use strict";
exports.__esModule = true;
exports.CandlestickStockData = void 0;
var CandlestickStock_1 = require("./CandlestickStock");
var CandlestickStockData = /** @class */ (function () {
    function CandlestickStockData(stocks) {
        if (stocks === void 0) { stocks = [
            new CandlestickStock_1.CandleStickStock('F', []),
            new CandlestickStock_1.CandleStickStock('T', []),
            new CandlestickStock_1.CandleStickStock('AAPL', []),
            new CandlestickStock_1.CandleStickStock('AMD', []),
            new CandlestickStock_1.CandleStickStock('VALE', []),
            new CandlestickStock_1.CandleStickStock('PLTR', []),
            new CandlestickStock_1.CandleStickStock('INTC', []),
            new CandlestickStock_1.CandleStickStock('BAC', []),
            new CandlestickStock_1.CandleStickStock('NVDA', []),
            new CandlestickStock_1.CandleStickStock('PFE', [])
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
