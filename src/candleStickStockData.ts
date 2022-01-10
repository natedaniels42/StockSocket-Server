import { CandleStickStock, CandleStickData } from "./CandlestickStock";
import { Stock } from './Stock';

export class CandlestickStockData {
    constructor(
        public stocks = [
            new CandleStickStock('Ford', 'F', 'assets/images/ford-logo.png', []),
            new CandleStickStock('AT&T', 'T', 'assets/images/att-logo.png', []),
            new CandleStickStock('Apple', 'AAPL', 'assets/images/apple-logo-grey.png', []),
            new CandleStickStock('Tyson Foods', 'TSN', 'assets/images/tyson-logo.png', []),
            new CandleStickStock('Tesla', 'TSLA', 'assets/images/tesla-logo.png', []),
            new CandleStickStock('Capital One', 'COF', 'assets/images/capital-one-logo.png', []),
            new CandleStickStock('Intel', 'INTC', 'assets/images/intel-logo.png', []),
            new CandleStickStock('Bank of America', 'BAC', 'assets/images/bank-of-america-logo.png', []),
            new CandleStickStock('Microsoft', 'MSFT', 'assets/images/microsoft-logo.png', []),
            new CandleStickStock('Wells Fargo', 'WFC', 'assets/images/wells-fargo-logo.png', [])
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