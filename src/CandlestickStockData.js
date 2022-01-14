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
    /**
     * Filters the data array to give an array of only the stocks being asked for
     * Loops through the filtered stocks and then creates the candlestick data by looping through
     * the data at the sent interval.
     * Once the candlestick data point is generated it is pushed into data for the
     * corresponding stock in the candlestickStockData
     * @param sentData - HistoricalSearch
     * @param data - Stock[]
     * @returns - void
     */
    CandlestickStockData.prototype.populateData = function (sentData, data) {
        var _this = this;
        var filteredStocks = data.filter(function (stock) { return sentData.symbols.includes(stock.symbol); });
        filteredStocks.forEach(function (stock, i) {
            var currentStock = _this.stocks.find(function (foundStock) { return foundStock.symbol === stock.symbol; });
            for (var j = 0; j < stock.data.length; j += sentData.interval) {
                if (stock.data[j].timestamp > sentData.end) {
                    break;
                }
                while (stock.data[j].timestamp < sentData.start) {
                    j++;
                }
                var currentSlice = stock.data.slice(j, j + sentData.interval);
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
                currentStock.data.push(current);
            }
        });
    };
    return CandlestickStockData;
}());
exports.CandlestickStockData = CandlestickStockData;
