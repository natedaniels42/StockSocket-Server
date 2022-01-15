export interface CandleStickData {
    timestamp: number,
    high: number,
    low: number,
    open: number,
    close: number
}

export class CandleStickStock {
    constructor (
        public name: string,
        public symbol: string,
        public color: string,
        public image: string,
        public data: CandleStickData[]
    ) {  }
}

export interface HistoricalSearch {
    symbols: string[],
    start: number,
    end: number,
    interval: number
}