import { CandleStickStock, CandleStickData, HistoricalSearch } from "./CandlestickStock";
import { Stock } from './Stock';

export class CandlestickStockData {
    constructor(
        public stocks = [
            new CandleStickStock('Ford', 'F', '#4cd974', 'assets/images/ford-logo.png', []),
            new CandleStickStock('AT&T', 'T', '#d95f4c', 'assets/images/att-logo.png', []),
            new CandleStickStock('Apple', 'AAPL', '#4cbad9', 'assets/images/apple-logo-grey.png', []),
            new CandleStickStock('Tyson Foods', 'TSN', '#d94cc4', 'assets/images/tyson-logo.png', []),
            new CandleStickStock('Tesla', 'TSLA', '#d9cb4c', 'assets/images/tesla-logo.png', []),
            new CandleStickStock('Capital One', '#4c5fd9', 'COF', 'assets/images/capital-one-logo.png', []),
            new CandleStickStock('Intel', 'INTC', '#d9954c', 'assets/images/intel-logo.png', []),
            new CandleStickStock('Bank of America', 'BAC', '#a54cd9', 'assets/images/bank-of-america-logo.png', []),
            new CandleStickStock('Microsoft', 'MSFT', '#a5d94c', 'assets/images/microsoft-logo.png', []),
            new CandleStickStock('Wells Fargo', 'WFC', '#4cd9b3', 'assets/images/wells-fargo-logo.png', [])
        ]
    ) {  }

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
    populateData(sentData: HistoricalSearch, data: Stock[]): void {
        const filteredStocks = data.filter(stock => sentData.symbols.includes(stock.symbol));
        
        filteredStocks.forEach((stock, i) => {
                const currentStock = this.stocks.find(foundStock => foundStock.symbol === stock.symbol);
            
            for (let j = 0; j < stock.data.length; j += sentData.interval) {
                if (stock.data[j].timestamp > sentData.end) {
                    break;
                }
                while (stock.data[j].timestamp < sentData.start) {
                    j++;
                }
                let currentSlice = stock.data.slice(j, j + sentData.interval);
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
                currentStock.data.push(current);
            }
        })
    }
}