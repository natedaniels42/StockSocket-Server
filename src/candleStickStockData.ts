import { CandleStickStock, CandleStickData } from "./CandlestickStock";
import { Stock } from './Stock';

export class CandlestickStockData {
    constructor(
        public stocks = [
            new CandleStickStock('F', []),
            new CandleStickStock('T', []),
            new CandleStickStock('AAPL', []),
            new CandleStickStock('AMD', []),
            new CandleStickStock('VALE', []),
            new CandleStickStock('PLTR', []),
            new CandleStickStock('INTC', []),
            new CandleStickStock('BAC', []),
            new CandleStickStock('NVDA', []),
            new CandleStickStock('PFE', [])
        ]
    ) {  }

    populateData(interval: number, data: Stock[]) {
        data.forEach((stock, i) => {
            for (let j = 0; j < stock.data.length; j += interval) {
                let currentSlice = stock.data.slice(j, j + interval);
                let currentAmounts = currentSlice.map(item => item.amount);
                let max = Math.max(...currentAmounts);
                let min = Math.min(...currentAmounts);
                let open = currentAmounts[0];
                let close = currentAmounts[currentAmounts.length - 1];
                let current: CandleStickData = {
                    timestamp: stock.data[j].timestamp,
                    high: max,
                    low: min,
                    open: open,
                    close: close
                };
                this.stocks[i].data.push(current);
            }
        })
    }
}