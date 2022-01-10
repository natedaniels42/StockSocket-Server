export interface CandleStickData {
    timestamp: number,
    high: number,
    low: number,
    open: number,
    close: number
}

export class CandleStickStock {
    constructor (
        public symbol: string,
        public data: CandleStickData[]
    ) {  }
}